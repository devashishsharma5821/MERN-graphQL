import './App.css';
import { gql, useQuery } from "@apollo/client";
import Form from './components/Form';
import List from './components/List';


  const ALL_EVENTS = gql`
  {
    events {
    _id
    title
    description
    price
    date
  }
}
`


function App() {
  const events = useQuery(ALL_EVENTS);
  const {error, data, loading} = events;
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error...</div>
  
  
  return (
    <>
    <Form  />
    {data.events.map((event)=> {
        return <List event={event} />
    })}
    </>
  );
}

export default App;
