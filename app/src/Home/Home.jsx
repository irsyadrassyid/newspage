
import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CompSearch } from '../Component/CompSearch';
import { News } from '../Component/News'


export function Home(props) {

  const [items, setitems] = useState();
  const [search, setSearch] = useState("putin");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);


  useEffect(() => {

    axios.get(`https://newsapi.org/v2/everything?q=${search}&sortBy=popularity&apiKey=4dc7f887f63d4fe5bae2a08304f6db72`)
      .then((response) => {
        setIsLoaded(true);
        setitems(response.data);
      }).catch(error => {
        setIsLoaded(true);
        setError(error);
      });



    console.log(search);
  }, [search]);



  return (
    <div>
      {console.log(items)}
      <CompSearch search={search} setSearch={setSearch} />
      <News items={items} />
    </div>

  );


}




export default Home;
