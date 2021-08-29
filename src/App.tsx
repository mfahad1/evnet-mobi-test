import { QueryClient, QueryClientProvider } from 'react-query';
import UserGistSearch from './modules/UserGistSearch/UserGistSearch.module';

import './App.scss';

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
