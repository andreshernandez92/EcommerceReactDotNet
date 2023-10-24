import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configStore";
import { setPageNumber, setProductParams } from "./catalogSlice";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../app/components/RadioButton";
import CheckboxButtons from "../../app/components/CheckboxButtons";
import AppPagination from "../../app/components/AppPagination";
import useProducts from "../../app/hooks/useProducts";
import { Box ,Grid, Paper  } from "@mui/material";

const sortOptions = [
    {value:'name', label: 'Alphabetical'},
    {value:'priceDesc', label: 'Price - High to Low'},
    {value:'priceAsc', label: 'Price - Low to High'},
]

export default function Catalog() {
    const {products,brands, types, filtersLoaded,metaData} = useProducts();
    const{productParams}= useAppSelector(state=> state.catalog)
    const dispatch = useAppDispatch();
    

if(!filtersLoaded) return <LoadingComponent message="Loading Products..."/>

/***            <Grid item xs={3}>
          
            <Paper sx={{mb: 2, p: 2}}>
           <RadioButtonGroup
           selectedValue={productParams.orderBy}
           options={sortOptions}
           onChange={(e)=> dispatch(setProductParams({orderBy: e.target.value}))}
           />
            </Paper>
            <Paper sx={{mb: 2, p: 2}}>
    <CheckboxButtons
    items={brands}
    checked={productParams.brands}
    onChange={(items: string[]) => dispatch(setProductParams({brands: items}))}
    />
</Paper>
            <Paper sx={{mb: 2, p: 2}}>
            <CheckboxButtons
    items={types}
    checked={productParams.types}
    onChange={(items: string[]) => dispatch(setProductParams({types: items}))}
    />
</Paper>

 */

    return(
        <>
       
                <Box sx={{ flexGrow: 1 }}> 
                <ProductList products={products}></ProductList>
                {metaData &&
                   <AppPagination
                   metaData={metaData}
                   onPageChange={(page:number)=> dispatch(setPageNumber({pageNumber: page}))}/>}
                </Box>
    </>
)
}