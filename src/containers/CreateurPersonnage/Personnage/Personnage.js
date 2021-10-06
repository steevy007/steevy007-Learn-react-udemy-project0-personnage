import React from 'react'
import ImagePerso from './ImagePerso/ImagePerso'
import CaractPerso from './CaractPerso/CaractPerso'
function Personnage(props) {
    return (
        <div className="row no-gutters">
            <div className="col-6"><ImagePerso num={props.image} flecheGauche={props.flecheGauche} flecheDroite={props.flecheDroite} /></div>
            <div className="col-6">
                <CaractPerso {...props} nbPointDisponible={props.nbPointDisponible} moins={props.moins} plus={props.plus} />
            </div>
        </div>
    )
}

export default Personnage
