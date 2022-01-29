
import './App.css';
//import { Header } from './component/header/Header';
import { Home } from './view/home/Home';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>

      <div>
        <Home />
      </div>

      <ReactQueryDevtools />
    </QueryClientProvider>


  );
}

export default App;
