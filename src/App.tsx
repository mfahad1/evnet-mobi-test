import { QueryClient, QueryClientProvider } from 'react-query';
import './App.scss';
import UserGistSearch from './modules/UserGistSearch/UserGistSearch.module';

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <UserGistSearch />
      </QueryClientProvider>
    </div>
  );
}

export default App;
