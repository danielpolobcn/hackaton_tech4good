import ChartScores from '../components/ChartScores';
import { useState, useRef } from 'react';
import { DivLocalsTot } from './LocalsDatosIndice.styled';
import SelectScore from '../components/SelectScore';

const LocalsDatosChart = () => {

    const [inputNum, setInputNum] = useState("0");
    const resultsRef = useRef();
    return (
        <DivLocalsTot>
            <SelectScore inputNum={inputNum} setInputNum={setInputNum} resultsRef={resultsRef} />
            <ChartScores inputScore={inputNum} resultsRef={resultsRef} />
        </DivLocalsTot>
    )
}
export default LocalsDatosChart;