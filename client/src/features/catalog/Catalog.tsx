import ProductList from "./ProductList";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configStore";
import { setPageNumber, setProductParams } from "./catalogSlice";
import AppPagination from "../../app/components/AppPagination";
import useProducts from "../../app/hooks/useProducts";
import { Box ,FormControl,Grid, InputLabel, MenuItem, Paper, Select, SelectChangeEvent  } from "@mui/material";


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
  
    return(
        <>
<Box>
  <Grid container spacing={2}>
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="OrderBy">Order By</InputLabel>
        <Select
          labelId="OrderBy"
          id="OrderBy"
          value={productParams.orderBy}
          onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))}
          autoWidth
          label="Order By"
        >
          {sortOptions.map(({ value, label }) => (
            <MenuItem value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="Brands">Brands</InputLabel>
        <Select
          labelId="Brands"
          id="Brands"
          value={productParams.brands}
          onChange={(items) => dispatch(setProductParams({ brands: items.target.value }))}
          autoWidth
          label="Brands"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {brands.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
    <Grid item xs={12} sm={6} md={4}>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="types">Types</InputLabel>
        <Select
          labelId="types"
          id="types"
          value={productParams.types}
          onChange={(items) => dispatch(setProductParams({ types: items.target.value }))}
          autoWidth
          label="Types"
        >
          <MenuItem value=""><em>None</em></MenuItem>
          {types.map((item) => (
            <MenuItem value={item}>{item}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Grid>
  </Grid>
</Box>

       
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