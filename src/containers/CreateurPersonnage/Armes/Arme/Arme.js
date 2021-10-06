import React from 'react'
import imgArc from '../../../../assets/images/armes/arc.png'
import imgEpee from '../../../../assets/images/armes/epee.png'
import imgFleau from '../../../../assets/images/armes/fleau.png'
import imgHache from '../../../../assets/images/armes/hache.png'
function Arme(props) {
    let isCurrentArme=null
    return (
        <div>
            <div className='row no-gutters'>
                {
                    props.armes.map((arme, index) => {
                        let imgArme;
                        switch (arme) {
                            case "arc": imgArme = imgArc
                                break
                            case "epee": imgArme = imgEpee
                                break
                            case "fleau": imgArme = imgFleau
                                break
                            case "hache": imgArme = imgHache
                        }

                        isCurrentArme=props.currentArme===arme
                        return (


                            <div key={index} className='col-3'>
                                <div  className='col-3'>
                                    <img
                                    style={{
                                        opacity:isCurrentArme?'1':'0.5',
                                        cursor:'pointer'
                                    }}
                                     src={imgArme} 
                                    onClick={()=>props.changeArme(arme)}
                                     />
                                </div>
                                <div className='text-center'>
                                    {arme}
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Arme
