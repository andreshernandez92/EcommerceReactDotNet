import {Product} from  "../../app/models/product";
import { List, ListItem, ListItemAvatar,Avatar, ListItemText,Button } from '@mui/material'
interface Props {
    products: Product[];
    addProduct:() => void;
}


export default function Catalog({products, addProduct}: Props) {
    return(
        <>
            <ProductList products={products}></ProductList>
            <Button variant="contained" onClick={addProduct}> Add Product</Button>
   
    </>
)
}