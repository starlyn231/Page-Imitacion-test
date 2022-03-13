
import './App.css';
//import { Header } from './component/header/Header';
import { Home } from './view/home/Home';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router'
import { Header } from './component/header/Header';


const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>


      <BrowserRouter>

        <Router />

      </BrowserRouter>


      <ReactQueryDevtools />
    </QueryClientProvider>


  );
}

export default App;
