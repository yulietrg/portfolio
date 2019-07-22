import React from "react"
import classes from './imageTextList.module.css'

import ImageText from "../imageText/imageText"

import data from "../../data/work.js"


const ImageTextList = () => {

    let imageText = data.map((elem)=>{
        return <ImageText key={ elem.id} aligment = {elem.aligment} subHeading = {elem.subHeading} heading = {elem.heading} description={elem.description} img={elem.image} link={elem.link} page={elem.page}/>
    })

    return (   
        <section id="work" className={classes.work}>
            {imageText}
        </section>  
    )
}

export default ImageTextList