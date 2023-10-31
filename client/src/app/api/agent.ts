import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from "react-toastify";
import { PaginatedResponse } from '../models/pagination';
import { store } from '../store/configStore';
import { router } from '../router/Routes';
axios.defaults.baseURL = process.env.REACT_APP_API_URL
axios.defaults.withCredentials =true;
const responseBody = (response: AxiosResponse) => response.data ;
type MyErrorResponse = {
    errors: any,
    title: any,
  }

const sleep = () => new Promise(resolve => setTimeout(resolve, 500))

axios.interceptors.request.use(config=> {

    const token = store.getState().account.user?.token;
    if(token) config.headers.Authorization = `Bearer ${token}` 
    return config;
})

axios.interceptors.response.use( async response => {
    if(process.env.NODE_ENV==='development') await sleep();
    const pagination = response.headers['pagination'];
    if(pagination){
        response.data = new PaginatedResponse(response.data,JSON.parse(pagination));
        return response;
    }
    return response
}, (error: AxiosError<MyErrorResponse>)=> {
    const {data, status} = error.response!;
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
            toast.error(data.title );
            break;
            case 403:
            toast.error("Not in the proper role to do that!" );
            break;  
            case 500:    
            console.log(error.response!)
            router.navigate('/server-error', {state: {error: data}});
                break;
            default:
            break; 
    
        }
        return Promise.reject(error.response)
})
const requests = {
    get: (url: string, params?: URLSearchParams) => axios.get(url, {params}).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
    postForm: (url: string, data: FormData) => axios.post(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody),
    putForm: (url: string, data: FormData) => axios.put(url, data, {
        headers: {'Content-type': 'multipart/form-data'}
    }).then(responseBody)
}



const Catalog = {
    list:(params: URLSearchParams) => requests.get('products', params),
    details: (id: number) => requests.get(`products/${id}`),
    fetchFilters: () => requests.get('products/filters'),
}

const TestErrors = {
    get400Error: () => requests.get('Bug/bad-request'),
    get401Error: () => requests.get('Bug/unauthorised'),
    get404Error: () => requests.get('Bug/not-found'),
    get500Error: () => requests.get('Bug/server-error'),
    getValidationError: () => requests.get('Bug/validation-error'),
}


const Account = {
    login: (values: any) => requests.post('account/login', values),
    register: (values: any) => requests.post('account/register', values),
    currentUser: () => requests.get('account/currentUser'),
    fetchAddress:() => requests.get('/Account/savedAddress'),
    trial:() => requests.get('/Account/savedAddress').then(response=>console.log(response)),
}

const Basket = {
    get: () => requests.get('basket'),
    addItem: (productId: number, quantity = 1) => requests.post(`basket?productId=${productId}&quantity=${quantity}`,{}),
    removeItem: (productId: number, quantity = 1) => requests.delete(`basket?productId=${productId}&quantity=${quantity}`),
}

const Payments = {
    createPaymentIntent: () => requests.post('payment', {}),
    getPayments: () => requests.get('payment')
}

const Orders = {
    list: () => requests.get('orders'),
    fetch: (id: number) => requests.get(`orders/${id}`),
    create:(values: any) => requests.post('orders', values)
}

const Admin = {
    createProduct: (product: any) => requests.postForm('products', createFormData(product)),
    updateProduct: (product: any) => requests.putForm('products', createFormData(product)),
    deleteProduct: (id: number) => requests.delete(`products/${id}`)
}

function createFormData(item: any) {
    let formData = new FormData();
    for (const key in item) {
        formData.append(key, item[key])
    }
    return formData;
}

const agent = {
    Catalog,
    TestErrors,
    Basket,
    Account,
    Orders,
    Payments,
    Admin
}

export default agent;