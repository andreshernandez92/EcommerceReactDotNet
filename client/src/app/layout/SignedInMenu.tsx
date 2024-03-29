import { Button, Menu, Fade, MenuItem, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "../../features/account/accountSlice";
import { clearBasket } from "../../features/basket/basketSlice";
import { useAppDispatch, useAppSelector } from "../store/configStore";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
export default function SignedInMenu() {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector(state => state.account);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        color='inherit'
        onClick={handleClick}
        sx={{ typography: 'h6' }}
      ><Box sx={{display:{ xs: 'none', sm: 'flex' } }}>
          {user?.email}
        </Box> 
        <Box sx={{display: { xs: 'flex ', sm: 'none' }, ml: 10} } >
        <AccountCircleIcon/>
        </Box>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem component={Link} to='/orders'>My orders</MenuItem>
        <MenuItem onClick={() => {
          dispatch(signOut());
          dispatch(clearBasket());
        }}>Logout</MenuItem>
      </Menu>
    </>
  );
}