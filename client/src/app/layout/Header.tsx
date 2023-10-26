
import { ShoppingCart } from "@mui/icons-material";
import { Toolbar,Divider, Typography, AppBar, Switch, ListItem, List, IconButton, Badge, Button, Container, Drawer, ListItemButton, ListItemText, Paper, Fade, Menu, MenuItem } from "@mui/material"
import Box from "@mui/material/Box";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configStore";
import MenuIcon from '@mui/icons-material/Menu';
import SignedinMenu from "./SignedInMenu";
import { useState } from "react";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ProductSearch from "../../features/catalog/ProductSearch";
import { signOut } from "../../features/account/accountSlice";
import { clearBasket } from "../../features/basket/basketSlice";
const midLinks = [
{title: 'Homepage', path: '/'},
{title: 'catalog', path: '/catalog'},
{title: 'about', path: '/about'},
{title: 'contact', path: '/contact'}

]
const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
    ]

const navStyles = {
color: 'inherit', 
textDecoration:'none',
typography:'h6',
'&:hover':{
   color: 'grey.500'
},
'&.active': {
color: 'text.secondary'
}}



    const drawerWidth = 240;
export default function Header(props:any) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleClick = (event: any) => {
      setAnchorEl1(event.currentTarget);
    };

    const [anchorEl1, setAnchorEl1] = useState(null);
const handleClose = () => {
  setAnchorEl1(null);
};
const open = Boolean(anchorEl1);
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
    const container = window !== undefined ? () => window().document.body : undefined;
  

    const {basket} = useAppSelector(state=> state.basket);
    const {user} = useAppSelector(state => state.account);
    const itemCount = basket?.items.reduce((sum,item)=> sum + item.quantity, 0);
    const drawer = (
        
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2, ...navStyles }} component={NavLink}  to='/' >
        ECOMMERCEREACTDOTNET
        </Typography>
        <Divider />
        <List>

          {midLinks.map(({title,path}) => (
            <ListItem component={NavLink} to={path} key={path} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText > {title.toUpperCase()}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
                 
          {user &&
            <ListItem component={NavLink}
            to={'/inventory'}
            sx={navStyles}>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText > INVENTORY</ListItemText>
              </ListItemButton>
            </ListItem>
             }
        </List>
      </Box>
    );
  
  
    return (
      
      <Box  display='flex' alignItems='center' sx={{ display: 'flex' }}>
        <AppBar component="nav" position='static' sx={{mb: 0}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              sx={{ flexGrow: .4, display: { xs: 'none', sm: 'block' }, ...navStyles}}
              component={NavLink}  to='/'>
                ECOMMERCEREACTDOTNET
            </Typography>
            <Paper sx={{}}>
                <ProductSearch/>
            </Paper>
            <List sx={{display:{ xs: 'none', sm: 'flex' } }}>
            {midLinks.map(({title,path})=> (
                <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{color: 'inherit', typography:'h6'}}
                >
                    {title.toUpperCase()}
                </ListItem>
            ))} {user &&
              <ListItem component={NavLink}
              to={'/inventory'}
              sx={{...navStyles,color: 'inherit', typography:'h6'}}>
               INVENTORY
  
              </ListItem>
               }
        </List>
         
         
            <Box display='flex' alignItems='left'>
        <IconButton component={Link} to ='/basket' size='large' sx={{color: 'inherit'}}>
            <Badge badgeContent={itemCount} color='secondary'>
                <ShoppingCart/>
            </Badge>
        </IconButton>
        
        </Box>
        {user ? (

        <SignedinMenu/>
    
        ) : (<Box>
            <List sx={{display:{ xs: 'none', sm: 'flex' } }}>
            {rightLinks.map(({title,path})=> (
                <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{color: 'inherit', typography:'h6'}}
                >
                    {title.toUpperCase()}
                </ListItem>
                
            ))}</List>
            <Box>
            <Button
        color='inherit'
        onClick={handleClick}
        sx={{ typography: 'h6' }}
      ><Box sx={{display: { xs: 'flex ', sm: 'none' }, ml: 10} } >
        <AccountCircleIcon/>
        </Box>
      </Button>
      <Menu
        anchorEl={anchorEl1}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {rightLinks.map(({title,path})=> (
        <MenuItem onClick={handleClose}  component={NavLink}
        to={path}
        key={path}
        sx={{color: 'inherit', typography:'h6'}}>{title.toUpperCase()}</MenuItem>
          
        ))}
        </Menu>


            </Box>
            </Box>
        )}

<Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
       
</Toolbar>
        </AppBar>
      </Box>
      
    );
}