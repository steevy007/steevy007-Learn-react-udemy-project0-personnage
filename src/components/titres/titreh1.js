import React from 'react'
import classes from './titreh1.module.css'
const  titreh1=(props)=> {
    const style=`border border-dark bg-primary p-2 m-2 rounded text-white text-center ${classes.font_family}`
    return (
        <>
            <h1 className={style}>{props.text}</h1>
        </>
    )
}

export default titreh1