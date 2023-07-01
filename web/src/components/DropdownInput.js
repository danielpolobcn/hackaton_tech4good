import { useState, useEffect } from "react";
import { datosBarriosPosition } from '../data/datosBarriosPosition';
import { InputDatos, DivInputNameBarris, DivLeyenda, DivBuscar } from './DropdownInput.styled';
import List from './List';


const DropdownInput = () => {
  const [inputText, setInputText] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    //to clear inputText
    isClicked ? setInputText("") : setInputText(inputText);
  }, [isClicked])

  const changeAccents = (text) => {
    text = text.replace(new RegExp(/[àáâãäå]/g), "a");
    text = text.replace(/[éèê]/g, "e");
    text = text.replace(/[óòô]/g, "o");
    text = text.replace(/[íîì]/g, "i");
    text = text.replace(/[úûù]/g, "u");
    return text;
  }

  const inputHandler = (e) => {
    //convert input text to lower case
    const inputLowerCase = e.target.value.toLowerCase();
    setInputText(inputLowerCase);
    /* 
    //without accents
    const inputNoAccents = changeAccents(lowerCase);
    setInputText(inputNoAccents);
    */
  };

  return (
    <DivInputNameBarris>
      <h1>Índice de proximidad</h1>
      <br />
      <DivLeyenda>
        Introduce aquí el nombre de tu barrio de Barcelona para conocer su índice de comercio de proximidad, valorado entre 1 y 10 puntos.
        <br /><br /></DivLeyenda>
      <DivBuscar>
        <label htmlFor="datos" className="right5"><strong>Buscar por barrio: </strong> </label>
        <InputDatos type="text" list="barrios" id="datos" name="datos" placeholder="escribe el nombre del barrio"
          onChange={inputHandler} onClick={() => setIsClicked(!isClicked)} value={inputText} autoFocus />
        <datalist id="barrios">
          {(inputText.length >= 2) &&
            datosBarriosPosition.map(item => {
              return <option key={item.id} >{item.name.toLowerCase()}</option>
            })
          }
        </datalist>
      </DivBuscar>
      <List input={inputText} />

    </DivInputNameBarris >
  )
}
export default DropdownInput;