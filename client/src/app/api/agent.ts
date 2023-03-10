import axios, { AxiosError, AxiosResponse } from 'axios'
import history from '../customcomponents/Historycustom';
import { toast } from "react-toastify";
import { resolve } from 'path';
import { request } from 'http';
axios.defaults.baseURL = 'http://localhost:5277/api/'
axios.defaults.withCredentials =true;
const responseBody = (response: AxiosResponse) => response.data ;
type MyErrorResponse = {
    errors: any,
    title: any,
  }

const sleep = () => new Promise(resolve => setTimeout(resolve, 1000))

axios.interceptors.response.use( async response => {
    await sleep();
    return response
}, (error: AxiosError<MyErrorResponse>)=> {
    const {data, status, statusText} = error.response!;
    switch(status){
        case 400:
            if(data.errors) {
                const modelStateErrors: string[] =[];
                for(const key in data.errors){
                    if(data.errors[key]){
                        modelStateErrors.push(data.errors[key])
                    }
                }
                throw modelStateErrors.flat();
            }
            
            toast.error(data.title);
            break;
        case 401:
            toast.error(data.title);
            break;
            case 500:    
            console.log(error.response!)
            history.push('/server-error',{state:data, status, statusText});
                break;
            default:
            break; 
    
        }
        return Promise.reject(error.response)
})
const requests = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body:{}) => axios.post(url).then(responseBody),
    put: (url: string, body:{}) => axios.put(url).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const Catalog = {
    list:() => requests.get('products'),
    details: (id: number) => requests.get(`products/${id}`)
}

const TestErrors = {
    get400Error: () => requests.get('Bug/bad-request'),
    get401Error: () => requests.get('Bug/unauthorised'),
    get404Error: () => requests.get('Bug/not-found'),
    get500Error: () => requests.get('Bug/server-error'),
    getValidationError: () => requests.get('Bug/validation-error'),
}

const Basket = {
    get: () => requests.get('basket'),
    addItem: (productId: number, quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`,{}),
    removeItem: (productId: number, quantity = 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`),


}


const agent = {
    Catalog,
    TestErrors,
    Basket
}

export default agent;