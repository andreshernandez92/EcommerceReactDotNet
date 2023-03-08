import { Typography, Grid, Divider, Table, TableBody, TableContainer, TableRow, TableCell } from "@mui/material";
import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react';
import axios from 'axios'
import { Product } from "../../app/models/product";
import agent from "../../app/api/agent";
import { parse } from "path";
export default function ProductDetails(){
const {id} = useParams<{id: string}>();
const [product, setProduct] = useState<Product | null>(null);
const [loading, setLoading] = useState(true)
useEffect(()=>{
    agent.Catalog.details(parseInt(id!))
    .then(response => setProduct(response))
    .catch(error=>console.log(error))
    .finally(()=> setLoading(false))
},[id])

if(loading) return <h3> Loading</h3>

if(!product) return <h3>Product not Found</h3>

    return(
  <Grid container spacing={6}>
    <Grid item xs={6}>
        <img src={product.pictureUrl} alt={product.name} style={{width:'100%'}}/>
        </Grid>
        <Grid item xs={6}>
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
    </Grid>
  </Grid>
)

}