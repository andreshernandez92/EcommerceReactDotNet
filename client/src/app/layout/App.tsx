
import './styles.css';
import Catalog from '../../features/catalog/Catalog';
import Header from './Header';
import CssBaseline from '@mui/material/CssBaseline';
import { Container } from '@mui/system';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useState} from 'react';
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
      <CssBaseline></CssBaseline>
   <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>;
   <Container>
    <Catalog />
    </Container>
    </ThemeProvider>
    );;
}

export default App;
