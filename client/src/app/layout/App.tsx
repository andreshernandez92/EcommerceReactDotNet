import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';
import LoadingComponent from "./LoadingComponent";
import { fetchBasketAsync } from "../../features/basket/basketSlice";
import HomePage from "../../features/home/HomePage";
import { useAppDispatch } from "../store/configStore";
import Footer from "./Footer";
import { fetchCurrentUser } from "../../features/account/accountSlice";
import '@fontsource/poppins'; 
import '@fontsource/open-sans';
function App() {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await dispatch(fetchCurrentUser());
      await dispatch(fetchBasketAsync());
    } catch (error) {
      console.log(error);
    }
  }, [dispatch]);

  useEffect(() => {
    initApp().then(() => setLoading(false));
  }, [initApp])


const theme = createTheme({
  palette: {
    primary: {
      main: '#6D597A',
    },
    secondary: {
      main: '#B56576',
    },
    error: {
      main: '#E56B6F',
    },
    background: {
      default: '#EACDC2',
    },
    text: {
      primary: '#1B1B1B',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    h1: {
      fontFamily: 'Poppins, sans-serif',
    },
    h2: {
      fontFamily: 'Poppins, sans-serif',
      
    },
    h3: {
      fontFamily: 'Poppins, sans-serif',
    },
  },
});

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored" />
      <CssBaseline />
      <Header />
      {loading ? <LoadingComponent message="Initialising app..." />
          : location.pathname === '/' ? <HomePage />
          : <Container sx={{mt: 4}}>
              <Outlet />
            </Container>
      }
<Footer/>
    </ThemeProvider>
  );
}

export default App;