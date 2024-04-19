import { useEffect, useState } from "react";
import "./App.css";
import { coloursUrl } from "./constants";
import { getColourData } from "./fetchHelper";
import ColourList from "./components/ColourList";
import { parseSearchedInput, sortColoursBySimilarity } from "./helper";

function App() {
  const [data, setData] = useState([]);
  const [searchedVal, setSearchedVal] = useState('');
  const [showSearchedContent, setSearchedContent] = useState('');

  useEffect(() => {
    const fetchColourData = async() => {
      try {
        const colourData = await getColourData(coloursUrl);
        setData(colourData)
      } catch (error) {
        console.error(error);
      }
    }
    fetchColourData();
  },[]);

  const handleSearch = () => {
    if(!searchedVal) return;
    const searchedColour = parseSearchedInput(searchedVal);
    const isValidColour = !searchedColour.includes('NaN');
    const searchedContent = isValidColour ? `result for '${searchedVal}'` : 'Colour is invalid';

    setSearchedContent(searchedContent);
    const sortedColours = sortColoursBySimilarity(searchedColour, data);
    setData(sortedColours.slice(0,100));
  }

  const handleKeyPress = (e) => {
     if(e.key === 'Enter') {
      handleSearch();
     } else if(e.key === 'Backspace' && !searchedVal) {
      setSearchedContent('')
     }
  }


  return (
    <div className="container">
      <div className="colour-searcher">
        <h2 className="title">Colour Searcher</h2>
        <div className="colour-input">
          <label>
            Colour
            <input 
            type="text" 
            placeholder="Enter Colour" 
            value={searchedVal} 
            onChange={e => setSearchedVal(e.target.value)} 
            onKeyDown={handleKeyPress}
            />
          </label>
        </div>

        {data.length ? <div className="colours-detail">
            {<span className="searched-content">{showSearchedContent}</span>}
            <ColourList coloursList={data}/>
        </div>: <span>Loading</span>}
      </div>
    </div>
  );
}

export default App;
