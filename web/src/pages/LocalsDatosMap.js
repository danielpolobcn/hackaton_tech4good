import { useEffect, useState } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { useMap } from 'react-leaflet/hooks';
//import Marker from '../components/Marker';
//import Popup from '../components/Popup';
import { Marker, Popup } from 'react-leaflet';
import { datosBarriosPosition } from '../data/datosBarriosPosition';

const LocalsDatosMap = () => {
    //idBarri has to be greater than 0 to initially show a neigbourhood with score on the map
    const [idBarri, setIdBarri] = useState(10);
    const [position, setPosition] = useState([41.39, 2.17]);
    const [nameBarri, setNameBarri] = useState("");
    const [indexProx, setIndexProx] = useState("");
    const [newCenter, setNewCenter] = useState([41.39, 2.17]);

    useEffect(() => {
        const barriSelectedUniArr = datosBarriosPosition.filter(barri => Number(barri.id) === Number(idBarri));
        const barriSelected = barriSelectedUniArr[0];
        //console.log(barriSelected);
        const posi = barriSelected.position;
        setNameBarri(barriSelected.name);
        setPosition(posi);
        setIndexProx(barriSelected.score); /*JSON.parse(barriString)*/

    }, [idBarri]);

    useEffect(() => {
        setNewCenter(position);
    }, [position]);

    const handleChangeSelect = (e) => {
        setIdBarri(e.target.value);
    }

    return (
        <>
            <select name="selectBarri" onChange={e => handleChangeSelect(e)} className='select'>
                <option value="0" defaultValue={'Selecciona un barrio ...'}
                >Selecciona un barrio ...</option>
                {
                    datosBarriosPosition.sort((a, b) => a.name > b.name ? 1 : -1).map((barrio) => <option key={barrio.id} value={(barrio.id)} >{barrio.name} </option>)
                }
            </select >
            <MapContainer center={newCenter} zoom={12} scrollWheelZoom={false} className="map">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        <strong> {nameBarri}</strong><br />tiene un índice de proximidad de:   <strong> {indexProx}</strong>.
                    </Popup>
                </Marker>
            </MapContainer>


        </>
    )
}
export default LocalsDatosMap;