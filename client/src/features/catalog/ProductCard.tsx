import { LoadingButton } from "@mui/lab";
import {  Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader/CardHeader";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { useAppDispatch, useAppSelector } from "../../app/store/configStore";
import { addBasketItemAsync } from "../basket/basketSlice";
import { currencyFormat } from "../../app/utils/util";


interface Props {
    product: Product;
}


export default function ProductCard({product}: Props){
const {status} = useAppSelector(state=> state.basket);
const dispatch = useAppDispatch();

return(
<Card >
      <CardMedia
        sx={{ height: '9.375rem' }}
        image={product.pictureUrl}
        title={product.name}
        component={Link} 
        to={`/catalog/${product.id}`}
      />
      <CardContent sx={{ padding: theme => `${theme.spacing(3, 5.25, 4)} !important` }} >
      <Typography variant='h6' sx={{ marginBottom: 2 }} component={Link} to={`/catalog/${product.id}`}>
      {(product.name)}
        </Typography> 
        <Typography sx={{ marginBottom: 2 }}>
        {currencyFormat(product.price)}
        </Typography>
        <Typography variant="body2">
        {product.brand} /   {product.type}
        </Typography>
      </CardContent>
      <LoadingButton 
        loading={status === 'pendingAddItem' + product.id} 
        onClick={() => dispatch(addBasketItemAsync({productId: product.id}))} 
        variant='contained' sx={{ py: 2.5, width: '100%', borderTopLeftRadius: 0, borderTopRightRadius: 0 }}
        >Add to Cart</LoadingButton>
    </Card>


    
)


}