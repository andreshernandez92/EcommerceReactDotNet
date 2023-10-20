
import { ShoppingCart } from "@mui/icons-material";
import { Toolbar,Divider, Typography, AppBar, Switch, ListItem, List, IconButton, Badge, Button, CssBaseline, Drawer, ListItemButton, ListItemText } from "@mui/material"
import Box from "@mui/material/Box";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../store/configStore";
import MenuIcon from '@mui/icons-material/Menu';
import SignedinMenu from "./SignedInMenu";
import { useState } from "react";
import React from "react";

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
          ))}{user &&
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
        <AppBar component="nav" position='static' sx={{mb: 2}}>
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
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, ...navStyles}}
              component={NavLink}  to='/'>
                ECOMMERCEREACTDOTNET
            </Typography>
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
              sx={navStyles}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText > INVENTORY</ListItemText>
                </ListItemButton>
              </ListItem>
               }
        </List>
         
         
            <Box display='flex' alignItems='right'>
        <IconButton component={Link} to ='/basket' size='large' sx={{color: 'inherit'}}>
            <Badge badgeContent={itemCount} color='secondary'>
                <ShoppingCart/>
            </Badge>
        </IconButton>
        
        {user ? (
        <SignedinMenu/> ) : (
            <List sx={{display: 'flex'}}>
            {rightLinks.map(({title,path})=> (
                <ListItem
                component={NavLink}
                to={path}
                key={path}
                sx={{color: 'inherit', typography:'h6'}}
                >
                    {title.toUpperCase()}
                </ListItem>
            ))}           
        
        </List>
        )}
        </Box>
          </Toolbar>
          
        </AppBar>
        <nav>
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
        </nav>
      </Box>
      
    );
}