import React from 'react'
import Arme from './Arme/Arme'
function Armes(props) {
    return (
        <div className='row no-gutters'>
            <Arme
             armes={props.armes}
             currentArme={props.currentArme}
             changeArme={props.handleChangeArmePersonnage}
             />
        </div>
    )
}

export default Armes
