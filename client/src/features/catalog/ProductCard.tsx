import {  Avatar, Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import CardHeader from "@mui/material/CardHeader/CardHeader";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> 657de76ca01cb251d3a4559f6ac364755eb6159e
import { Product } from "../../app/models/product";
interface Props {
    product: Product;
}


export default function ProductCard({product}: Props){
return(
<Card >
    <CardHeader avatar={
        <Avatar sx={{bgcolor: 'secondary.main'}}>
            {product.name.charAt(0).toUpperCase()}
        </Avatar>
    }
    title={product.name}
    titleTypographyProps={{
        sx: {fontWeight:'strong', color: 'primary.main'}
    }}
    />
      <CardMedia
        sx={{ height: 140, backgroundSize:'contain',bgcolor: 'primary.light' }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5">
          ${(product.price).toFixed(2)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {product.brand} /   {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
<<<<<<< HEAD
        <Button size="small">View</Button>
=======
        <Button component={Link} to={`/catalog/${product.id}`} size="small">View</Button>
>>>>>>> 657de76ca01cb251d3a4559f6ac364755eb6159e
      </CardActions>
    </Card>


    
)


}