import { React, useState } from 'react'
import { datosBarriosPosition } from '../data/datosBarriosPosition';
import { DivResults, DivResultScore, Result, DivInfo, GoodDiv, BadDiv } from './List.styled';

function List({ input }) {

    const filteredDataNeighbors = datosBarriosPosition.filter((barri) => {

        if (input.length < 3) {
            const result = "";
            return result;
        } else if (barri.name.toLocaleLowerCase().includes(input)) {
            /* console.log({ barri }) */
            return barri;
        }
    })

    const rankingData = filteredDataNeighbors.map((neighbor) => {

        return (
            <DivResults key={neighbor.id}>
                <DivResultScore score={neighbor.score}>
                    <Result>
                        <strong>{neighbor.score.toFixed(0)}</strong>
                    </Result>
                </DivResultScore>
                <DivInfo>
                    <h1 >{neighbor.name}</h1>
                    <br />
                    <hr />
                    <br />
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