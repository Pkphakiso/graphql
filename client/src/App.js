
import './App.css';
import { ApolloClient , InMemoryCache , ApolloProvider , useQuery , useMutation } from "@apollo/client";
import DisplayData from './components/DisplayData';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache() ,
    uri: "http://localhost:4000/"
  })
  const query = useQuery;
  return (
    <ApolloProvider client={client}>
      <div> <h2>List of Users</h2> </div>
      <DisplayData />  
    </ApolloProvider>
    
  );
}

export default App;
