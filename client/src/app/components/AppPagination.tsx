import { Box, Pagination, Typography } from "@mui/material";
import { Metadata } from "../models/pagination";

interface Props {
    metaData: Metadata;
    onPageChange: (page: number) => void;
}

export default function AppPagination({metaData,onPageChange}: Props){
    const {currentPage, totalCount, totalPages, pageSize} = metaData
    return(
        <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography>
            Displaying { (currentPage-1) * pageSize + 1  }-{currentPage*pageSize > totalCount ? totalCount : currentPage*  pageSize} of {totalCount} Items
        </Typography>
        <Pagination
        color="secondary"
        size='large'
        count={totalPages}
        page={currentPage}
        onChange={(e,page) => onPageChange(page)}
        />
    </Box>
    )
}