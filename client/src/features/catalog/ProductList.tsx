import { List, ListItem, ListItemAvatar,Avatar, ListItemText } from '@mui/material'

interface Props {
    products: Product[];
}


export default function ProductList({products}: Props){
    return (<List>
    {products.map(product => (
        <ListItem key={product.id}>
            <ListItemAvatar>
                <Avatar src ={product.pictureUrl}/>
            </ListItemAvatar> 
            <ListItemText>
                {product.name} -{product.price}
            </ListItemText>
            </ListItem>
        ))}
        </List>)
}