import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configStore";
import { setPageNumber, setProductParams } from "./catalogSlice";
import { Grid, Paper } from "@mui/material";
import ProductSearch from "./ProductSearch";
import RadioButtonGroup from "../../app/components/RadioButton";
import CheckboxButtons from "../../app/components/CheckboxButtons";
import AppPagination from "../../app/components/AppPagination";
import useProducts from "../../app/hooks/useProducts";

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
            <Paper sx={{mb:2}}>
                <ProductSearch/>
            </Paper>
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
                </Grid>

            <Grid item xs={3}/>
                <Grid item xs={9} sx={{mb:2}}>
                    {metaData &&
                   <AppPagination
                   metaData={metaData}
                   onPageChange={(page:number)=> dispatch(setPageNumber({pageNumber: page}))}/>}
                </Grid>
 */

    return(
        <>


            <Grid container spacing={6}>

    
            <Grid item xs={12} sm={6} md={4}>
                <ProductList products={products}></ProductList>
                </Grid>
                
            </Grid>
    </>
)
}