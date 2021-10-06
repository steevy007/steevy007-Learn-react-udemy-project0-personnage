import React from 'react'
import image1 from '../../../assets/images/persos/player1.png'
import image2 from '../../../assets/images/persos/player2.png'
import image3 from '../../../assets/images/persos/player3.png'
import arc from '../../../assets/images/armes/arc.png'
import epee from '../../../assets/images/armes/epee.png'
import fleau from '../../../assets/images/armes/fleau.png'
import hache from '../../../assets/images/armes/hache.png'
export default function Personnage(props) {
    let arme = ''
    let image = ''
    switch (props.arme) {
        case 'arc': arme = arc
            break
        case 'epee': arme = epee
            break
        case 'fleau': arme = fleau
            break
        case 'hache': arme = hache
    }
    if (props.image === 1) image = image1
    if (props.image === 2) image = image2
    if (props.image === 3) image = image3
    return (
        <div className='row no-gutters'>
            <div className='col-6'>
                <img src={image} alt="personnage" />
            </div>
            <div className='col-6'>
               
                    Force : {props.force} <br />
                    Agilite : {props.agilite} <br />
                    Intelligence : {props.intelligence}
                
                    <img src={arme} />
            </div>
        </div>
    )
}
