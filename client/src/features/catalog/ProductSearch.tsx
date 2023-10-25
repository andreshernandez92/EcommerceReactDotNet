import { debounce, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configStore";
import { setProductParams } from "./catalogSlice";
import { router } from "../../app/router/Routes";

export default function ProductSearch() {
    const{productParams} = useAppSelector(state=> state.catalog)
    const[searchTerm, setSearchTerm] = useState(productParams.searchTerm)
    const dispatch = useAppDispatch();

    const debouncedSearch = debounce((event: any) => {
        dispatch(setProductParams({searchTerm: event.target.value}))
    },1000)

    return(
        <TextField  label='Search Products'
        variant='standard'
        fullWidth
        value={searchTerm || ''}
        onChange={(event: any) => {
            router.navigate('/catalog');
            setSearchTerm(event.target.value);
            debouncedSearch(event);
            
        }}

        />
   )

}