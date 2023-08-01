import { useState } from 'react';
import './index.css';

const Color = ({color, setSelectedColor}) => {
return(
  <div className={color}
  onClick={()=> {
    setSelectedColor(color);
  }}
  ></div>
)
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{setSelectedColor}</div>
      </div>
      <div id="colors-list">
      <Color color="red" setSelectedColor={setSelectedColor}/> 
      <Color color="green" setSelectedColor={setSelectedColor}/>
      <Color color="violet" setSelectedColor={setSelectedColor}/>
      </div>
    </div>
  );
};

export default App;
