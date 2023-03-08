
import './styles.css';
<<<<<<< HEAD
import Catalog from '../../features/catalog/Catalog';
=======
>>>>>>> 657de76ca01cb251d3a4559f6ac364755eb6159e
import Header from './Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useState} from 'react';
<<<<<<< HEAD
=======
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/AboutPage';
import ContactPage from '../../features/contact/ContactPage';
import Catalog from '../../features/catalog/Catalog';
<<<<<<< HEAD
>>>>>>> 657de76ca01cb251d3a4559f6ac364755eb6159e
=======
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
>>>>>>> 38dc0d3f65da7d0ba83297fbbe96d60ac9db044c
function App() {
const [darkMode, setDarkMode] = useState(false);
const paletteType = darkMode ? 'dark' : 'light';
const theme = createTheme({
  palette: {
    mode: paletteType,
    background: {
      default: paletteType === 'light' ? 'eaeaea' : '#121212'
    }
  }
})
  
function handleThemeChange() {
  setDarkMode(!darkMode);
}  


  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right' hideProgressBar></ToastContainer>
      <CssBaseline></CssBaseline>
<<<<<<< HEAD
   <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>;
   <Container>
    <Catalog />
    </Container>
    </ThemeProvider>
    );;
=======
   <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
   <Container>
    <Routes>
   <Route path='/' element={<HomePage/>}/>
    <Route path='catalog' element={<Catalog/>}/>
    <Route path='catalog/:id' element={<ProductDetails/>}/>
    <Route path='about' element={<AboutPage/>}/>
    <Route path='contact' element={<ContactPage/>}/>
    </Routes>
    </Container>
    </ThemeProvider>
    )
>>>>>>> 657de76ca01cb251d3a4559f6ac364755eb6159e
}

export default App;
