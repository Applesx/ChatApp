import { 
  createTheme,
  CssBaseline,
  ThemeProvider,
  Container
 } from '@mui/material';
import './App.css'
import Auth from './components/auth/Auth.tsx';
import { RouterProvider } from 'react-router-dom';
import router from './components/Routes.tsx';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
})

function App() {
 

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Container >
        <RouterProvider router={router}/>
      </Container>
    </ThemeProvider>
  )
}

export default App;
