import React from 'react'
import Image1 from '../../../../assets/images/persos/player1.png'
import Image2 from '../../../../assets/images/persos/player2.png'
import Image3 from '../../../../assets/images/persos/player3.png'
import classes from './ImagePerso.module.css'
function ImagePerso(props) {
    let printImage=''
    if(props.num===1)printImage=Image1
    else if(props.num===2)printImage=Image2
    else printImage=Image3
    return (
        <div className="row no-gutters text-center align-items-center">
           <div className={["col-1",classes.fleche,classes.gauche].join(' ')} onClick={props.flecheGauche}></div>
           <div className="col">
           <img src={printImage} alt="Perso" />
           </div>
           <div className={["col-1",classes.fleche,classes.droite].join(' ')} onClick={props.flecheDroite}></div>
        </div>
    )
}

export default ImagePerso
