import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
    
    // initialize state  
    const [characters, setCharacters] = useState([]);
    const [matchingCharacters, setMatchingCharacters] = useState([]);
    const [searchKey, setSearchKey] = useState("");

    const getCharacters = async () => {
        const response  = await axios.get("https://thronesapi.com/api/v2/Characters");
        setCharacters(response.data);
        setMatchingCharacters(response.data);
    }

    const setSearchCharacter = (event) => {
        let searchKeyVal = event.target.value;
        if (searchKeyVal !== undefined) {
          setSearchKey(searchKeyVal);
        }
        filterAndSetMatchingCharacters();
    }

    // Similar to componentDidMount and componentDidUpdate
    useEffect(() => {
      getCharacters();
      filterAndSetMatchingCharacters();
    }, []);

    const filterAndSetMatchingCharacters = () => {
        const filteredCharacters = characters.filter((c) => {
            //return c.fullName.toLowerCase().includes(searchKey.toLowerCase());
            return c.fullName.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1;

        });
        setMatchingCharacters(filteredCharacters);
    }

    return (
    
      <div>
        <form> 
          <label>Character Name </label>
          <input
            type="text"
            id="cname"
            name="cname"
            placeholder="search character"
            onChange={setSearchCharacter}
          ></input>
        </form>
        <div>
          {matchingCharacters.map(function (char, index) {
            return (
                <div key={index}>
                    <img src={char.imageUrl} key={index} alt={char.fullName} width="200" height="200" />
                    <h4>{char.fullName}</h4>
              </div>);
          })}
        </div>
      </div>
    );
}

export default Search;
