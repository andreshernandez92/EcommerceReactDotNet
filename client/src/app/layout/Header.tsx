
import { ShoppingCart } from "@mui/icons-material";
import { Toolbar,Divider, Typography, AppBar, ListItem, List, IconButton, Badge, Button, Drawer, ListItemButton, Paper, Fade, Menu, MenuItem } from "@mui/material"
import Box from "@mui/material/Box";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configStore";
import MenuIcon from '@mui/icons-material/Menu';
import SignedinMenu from "./SignedInMenu";
import { useState } from "react";
import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import ProductSearch from "../../features/catalog/ProductSearch";
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
        
      <Box onClick={handleDrawerToggle} sx={{
        backgroundColor: 'background.paper', // Set your preferred background color
        color: 'text.primary', // Set your preferred text color
        textAlign: 'center',
        width: drawerWidth
      }}>
        <Typography variant="h6" sx={{ fontSize: {
      xs: '1rem', // Adjust the font size for extra small screens (mobile)
      sm: '1rem', // Adjust the font size for small screens
      md: '1rem', // Adjust the font size for medium screens
      lg: '1rem', // Adjust the font size for large screens
      xl: '2rem', // Adjust the font size for extra large screens
    },my: 2 }} component={NavLink}  to='/' >
        ECOMMERCEREACTDOTNET
        </Typography>
        <Divider />
        <List>

          {midLinks.map(({title,path}) => (
            <ListItem component={NavLink} to={path} key={path} disablePadding>
              <ListItemButton >
              <Typography sx={{ ...navStyles}}> {title.toUpperCase()}</Typography>
              </ListItemButton>
            </ListItem>
          ))}
                 
          {user &&
            <ListItem component={NavLink}
            to={'/inventory'}
            >
            <Typography sx={{ ...navStyles}}>INVENTORY</Typography>  
            </ListItem>
             }
            {user &&
            <ListItem component={NavLink}
            to={'/payments'}
            >
            <Typography sx={{ ...navStyles}}>PAYMENTS</Typography>  
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
              sx={{ flexGrow: .4, display: { xs: 'none', sm: 'block' },color:'white'}}
              component={NavLink}  to='/'>
                ECOMMERCEREACTDOTNET
            </Typography>
            <Paper >
                <ProductSearch/>
            </Paper>
            <List sx={{display:{ xs: 'none', sm: 'flex' } }}>
            {midLinks.map(({title,path})=> (
                <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{ ...navStyles}}
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
               {user &&
              <ListItem component={NavLink}
              to={'/payments'}
              sx={{...navStyles,color: 'inherit', typography:'h6'}}>
               PAYMENTS
  
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
                <Typography
                component={NavLink}
                to={path}
                key={path}
                sx={{ml: 2,...navStyles  }}
                >
                    {title.toUpperCase()}
                </Typography>
                
            ))}</List>
            <Box>
            <Button
        color='inherit'
        onClick={handleClick}
        sx={{ display: { xs: 'flex ', sm: 'none' }, ml: 10, ...navStyles }}
      ><Box >
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
        sx={{...navStyles}}>{title.toUpperCase()}</MenuItem>))}
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
              backgroundColor: 'background.paper', // Set your preferred background color
              
              display: { xs: 'block', sm: 'none' },
              ...navStyles,
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