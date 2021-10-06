import React from 'react'
import Carac from './Carac/Carac'
export default function CaractPerso(props) {
    return (
        <>
            <div>
                Points Restants :  <span className="badge bg-success">{props.nbPointDisponible}</span>
            </div>
            <div>
                <Carac nbPoint={props.force} moins={()=>props.moins('force')} plus={()=>props.plus('force')}> Force</Carac>
                <Carac  nbPoint={props.agilite} moins={()=>props.moins('agilite')} plus={()=>props.plus('agilite')}> Agilite</Carac>
                <Carac  nbPoint={props.intelligence} moins={()=>props.moins('intelligence')} plus={()=>props.plus('intelligence')}> Intelligence</Carac>
            </div>
        </>
    )
}
