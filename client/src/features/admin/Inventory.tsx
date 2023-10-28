import {
    Edit,
    Delete,
  } from "@mui/icons-material";
  import { LoadingButton } from "@mui/lab";
  import {
    Box,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    Paper,
    IconButton,
  } from "@mui/material";
  import { useState } from "react";
  import AppPagination from "../../app/components/AppPagination";
  import useProducts from "../../app/hooks/useProducts";
  import { Product } from "../../app/models/product";
  import { useAppDispatch } from "../../app/store/configStore";
  import { removeProduct, setPageNumber } from "../catalog/catalogSlice";
  import agent from "../../app/api/agent";
  import ProductForm from "./ProductForm";
  import { currencyFormat } from "../../app/utils/util";
  export default function Inventory() {
    const { products, metaData } = useProducts();
    const dispatch = useAppDispatch();
    const [editMode, setEditMode] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
      undefined
    );
    const [loading, setLoading] = useState(false);
    const [target, setTarget] = useState(0);
  
    function handleSelectProduct(product: Product) {
      setSelectedProduct(product);
      setEditMode(true);
    }
  
    function cancelEdit() {
      if (selectedProduct) setSelectedProduct(undefined);
      setEditMode(false);
    }
  
    function handleDeleteProduct(id: number) {
      setLoading(true);
      setTarget(id);
      agent.Admin.deleteProduct(id)
        .then(() => dispatch(removeProduct(id)))
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  
    if (editMode) return <ProductForm product={selectedProduct} cancelEdit={cancelEdit} />;
  
    return (
      <Paper>
        <Box p={2} display="flex" justifyContent="space-between">
          <Typography variant="h4">Inventory</Typography>
          <Button
            onClick={() => setEditMode(true)}
            variant="contained"
            size="large"
          >
            Create
          </Button>
        </Box>
        <List>
          {products.map((product) => (
            <ListItem key={product.id}>
              <Box display="flex" alignItems="center" width="100%">
                <img
                  src={product.pictureUrl}
                  alt={product.name}
                  style={{ height: 50, marginRight: 20 }}
                />
                <ListItemText
                  primary={product.name}
                  secondary={
                    <span>
                      <Typography variant="body2">
                        Price: {currencyFormat(product.price)}
                      </Typography>
                      <Typography variant="body2">
                        Type: {product.type}
                      </Typography>
                      <Typography variant="body2">
                        Brand: {product.brand}
                      </Typography>
                      <Typography variant="body2">
                        Quantity: {product.quantityStock}
                      </Typography>
                    </span>
                  }
                />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => handleSelectProduct(product)}>
                    <Edit />
                  </IconButton>
                  <LoadingButton
                    loading={loading && target === product.id}
                    onClick={() => handleDeleteProduct(product.id)}
                    color="error"
                  >
                    <Delete />
                  </LoadingButton>
                </ListItemSecondaryAction>
              </Box>
            </ListItem>
          ))}
        </List>
        {metaData && (
          <Box p={2}>
            <AppPagination
              metaData={metaData}
              onPageChange={(page: number) =>
                dispatch(setPageNumber({ pageNumber: page }))
              }
            />
          </Box>
        )}
      </Paper>
    );
  }
  