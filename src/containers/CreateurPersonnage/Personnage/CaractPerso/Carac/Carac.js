import React from 'react'
import classes from './Carac.module.css'
export default function Carac(props) {
    let carre=[]
    for(let i=0 ;i<props.nbPoint;i++){
        carre.push(<div key={i} className={classes.points}></div>)
    }
    return (
        <div className='row no-gutters'>
            <div className={["col-2",classes.signe,classes.moins].join(' ')} onClick={props.moins}></div>
            <div className="col text-center">
                <div className='row'>
                {props.children} : {carre}
                </div>
            </div>
            <div className={["col-2",classes.signe,classes.plus].join(' ')} onClick={props.plus}></div>
        </div>
    )
}
