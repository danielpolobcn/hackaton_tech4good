import { useState } from "react";
import { InputDatos, DivInputNameBarris, DivLeyenda } from './DropdownInput.styled';
import List from './List';


const DropdownInput = () => {

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };


  console.log({ inputText });
  return (
    <DivInputNameBarris>
      <h1>Índice de proximidad</h1>
      <DivLeyenda>
        Introduce aquí el nombre de tu barrio de Barcelona para conocer su índice de comercio de proximidad, valorado entre 0 y 10 puntos.
        <br /><br />
        <label htmlFor="datos"><strong>Buscar:</strong> </label></DivLeyenda>
      <InputDatos type="text" name="datos" placeholder="escribe el nombre del barrio"
        onChange={inputHandler} value={inputText} autoFocus />

      <List input={inputText} />

    </DivInputNameBarris >
  )
}
export default DropdownInput;