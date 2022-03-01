import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    
    // initialize state  
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const response  = await axios.get("https://thronesapi.com/api/v2/Characters");
        setCharacters(response.data);
    }

    const searchCharacter = (event) => {
        let searchKey = event.target.value;
        console.log(searchKey);
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
      getCharacters();
    }, []);

    // const displayCharacters = characters.forEach((c) => {
    //     return (<img src={c.url} alt={c.fullName} width="200" height="200" />);
    // });

    return (
      <div>
        <form>
          <label>Character Name </label>
          <input
            type="text"
            id="cname"
            name="cname"
            onChange={searchCharacter}
          ></input>
        </form>
        <div>
          {/* {displayCharacters} */}
          {characters.map(function (c, index) {
            return (
              <div>
                <img src={c.imageUrl} key={index} alt={c.fullName} width="200" height="200" />
                <h4>{c.fullName}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Search;
