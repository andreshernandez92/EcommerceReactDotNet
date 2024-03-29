import { Typography, Grid, Divider, Table, TableBody, TableContainer, TableRow, TableCell, TextField, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import NotFound from "../../app/errors/NotFound";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { LoadingButton } from "@mui/lab";
import { useAppDispatch, useAppSelector } from "../../app/store/configStore";
import {  addBasketItemAsync, removeBasketItemAsync } from "../basket/basketSlice";
import { fetchProductAsync, productSelectors } from "./catalogSlice";
export default function ProductDetails(){
const {basket, status} = useAppSelector(state=>state.basket)
const dispatch = useAppDispatch();
const {id} = useParams<{id: string}>();
const product = useAppSelector(state => productSelectors.selectById(state, id!));
const {status: ProductStatus} = useAppSelector(state=>state.catalog);
const[quantity,setQuantity]= useState(0);
const item = basket?.items.find(i=> i.productId === product?.id);

useEffect(()=>{
    if (item) setQuantity(item.quantity);
   if(!product) dispatch(fetchProductAsync(parseInt(id!)))
},[id,item, dispatch, product])

function handleInputChange(event: any){
    if(event.target.value>0){
    setQuantity(parseInt(event.target.value));

}}

function handleUpdateCart(){
    if(!item || quantity > item.quantity){
        const updatedQuantity = item ? quantity - item?.quantity: quantity;
     dispatch(addBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}))
        
    }
    else{
        const updatedQuantity = item.quantity - quantity;
     dispatch(removeBasketItemAsync({productId: product?.id!, quantity: updatedQuantity}))
    }
}


if(ProductStatus.includes('pending')) return <LoadingComponent message="Loading Product"/>

if(!product) return <NotFound/>




    return(
        <Grid container spacing={6} sx={{

  
            // Margin
            mx: 2, // Horizontal margin
            my: 3, // Vertical margin
        
      
          }}>
        <Grid item xs={12} sm={6}>
            <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}}/>
        </Grid>
        <Grid item xs={12} sm={6}>
            <Typography variant='h4' color='secondary'>{product.name}</Typography>
            <Divider sx={{mb:2}}/>
            <Typography variant='h4' color='secondary'>{product.price}</Typography>
            <TableContainer>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>{product.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Description</TableCell>
                            <TableCell>{product.description}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Type</TableCell>
                            <TableCell>{product.type}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Brand</TableCell>
                            <TableCell>{product.brand}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Quantity</TableCell>
                            <TableCell>{product.quantityStock}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
    
            <Grid container spacing={2}>
          
                <Grid item xs={12} sm={6}>
                    <Paper>
                    <TextField
                    onChange={handleInputChange}
                    variant='outlined'
                    type='number'
                    label='Quantity in Basket'
                    fullWidth
                    value={quantity}
                    />
                    </Paper>
                </Grid>
    
  
                <Grid item xs={12} sm={6}>
                <LoadingButton
                disabled={(item?.quantity=== quantity) || (!item && quantity ===0)}
                loading={status.includes('pending')}
                onClick={handleUpdateCart}
                sx={{height: '55px'}}
                color='primary'
                size="large"
                variant="contained"
                fullWidth
                >
                    {item ? 'Update Quantity' : 'Add to Cart'}
                </LoadingButton>
            </Grid>
    
        </Grid>  
      </Grid> 
      </Grid> 
)

}