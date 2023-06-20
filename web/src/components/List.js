import { React, useState } from 'react'
import { data } from '../data/datos';
import { DivResults, DivResultScore, Result, DivInfo, GoodDiv, BadDiv } from './List.styled';

function List(props) {

    const filteredDataNeighbors = data.filter((barri) => {

        if (props.input.length < 4) {
            const result = "";
            return result;
        } else if (barri.name.toLocaleLowerCase().includes(props.input)) {
            console.log({ barri })
            return barri;
        }
    })

    console.log({ filteredDataNeighbors })
    const rankingData = filteredDataNeighbors.map((neighbor) => {
        return (
            <DivResults key={neighbor.id}>
                <DivResultScore>
                    <Result color="#63beffa7">{neighbor.score.toFixed(2)}
                    </Result>
                </DivResultScore>
                <DivInfo>
                    <h1 >{neighbor.name}</h1>
                    {neighbor.fires && <GoodDiv>- Hay ferias o mercados recurrentes en el barrio</GoodDiv>}
                    {neighbor.mercats && <GoodDiv>- Dispone de algún mercado municipal cercano</GoodDiv>}
                    {!neighbor.centres && <BadDiv>- Hay algún gran centro comercial cercano que puede desequilibrar el tejido comercial</BadDiv >}
                    {neighbor.galeries && <GoodDiv>- Hay alguna galeria comercial en el barrio</GoodDiv>}
                    {neighbor.variacio ? <GoodDiv>- Mucha variedad de comercios al alcance</GoodDiv> : <BadDiv> - Poca variedad de comercios al alcance</BadDiv>}
                    {neighbor.quotidia ? <GoodDiv>- Alta proporción de comercios de uso cotidiano en el barrio</GoodDiv> : <BadDiv>- Baja proporción de comercios de uso cotidiano en el barrio</BadDiv>}

                </DivInfo>

            </DivResults>
        )
    });

    return (
        <>
            {rankingData}
        </>
    )
}

export default List;