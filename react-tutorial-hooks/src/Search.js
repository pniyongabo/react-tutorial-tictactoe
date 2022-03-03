import { useState, useEffect } from "react";
import axios from "axios";

function Search() {
  // initialize state
  const [characters, setCharacters] = useState([]);
  const [matchingCharacters, setMatchingCharacters] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getCharacters = async () => {
    const response = await axios.get(
      "https://thronesapi.com/api/v2/Characters"
    );
    setCharacters(response.data);
    setMatchingCharacters(response.data);
  };

  const setSearchCharacter = (event) => {
    let searchKeyVal = event.target.value;
    if (searchKeyVal !== undefined) {
      setSearchKey(searchKeyVal);
    }
    filterAndSetMatchingCharacters();
  };

  // const setSearchCharacterFromForm = (event) => {
  //   let searchKeyVal = document.getElementById("characterName").value;
  //   if (searchKeyVal !== undefined) {
  //     setSearchKey(searchKeyVal);
  //   }
  //   filterAndSetMatchingCharacters();
  //   event.preventDefault();
  // }

  const doNothing = (event) => {
    event.preventDefault();
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
  };

  return (
    <div>
      <form style={{ padding: 20 }} onSubmit={doNothing}>
        {/* <label>Character Name</label> */}
        <input
          type="text"
          id="characterName"
          name="characterName"
          onChange={setSearchCharacter}
          size="30"
          placeholder="search character by first/last name"
        ></input>
      </form>

      <div className="container">
        <div className="row">
          {matchingCharacters.map(function (char, index) {
            return (
              <div key={index} className="col-sm">
                <img
                  src={char.imageUrl}
                  key={index}
                  alt={char.fullName}
                  width="200"
                  height="200"
                />
                <h4>{char.fullName}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Search;
