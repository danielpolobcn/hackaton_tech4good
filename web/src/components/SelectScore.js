

import { InputNumScores, DivInputNameBarris, DivLeyenda, DivBuscar } from './DropdownInput.styled';

const SelectScore = ({ inputNum, setInputNum, resultsRef }) => {

    const inputNumHandler = (e) => {
        const num = Number(e.target.value);
        // convertir input num a Number para que "000" sea 0
        (num <= 10 && num > 0)
            ? setInputNum(e.target.value)
            : setInputNum("0")

        resultsRef.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }

    return (
        <DivInputNameBarris>
            <h1>Índice de proximidad</h1>
            <br />
            <DivLeyenda>
                Introduce aquí el índice de comercio de proximidad para ver qué barrios cumplen con ese valor.
                <br /><br /></DivLeyenda>
            <DivBuscar>
                <label htmlFor="inputScore" className='right5'><strong>Buscar por índice: </strong></label>

                <InputNumScores type="number" list="scores" id="inputScore" name="inputScore" placeholder="escribe un valor de 0 a 10"
                    onChange={inputNumHandler} value={inputNum} min={0} max={10} autoFocus /> <span className='left5'> (entre 1 y 10 puntos, 0 = todos)</span>
            </DivBuscar>
        </DivInputNameBarris>
    )
}
export default SelectScore;