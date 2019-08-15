import React from "react"
import classes from './imageText.module.css'

import { Link } from "gatsby"

const ImageText = (props) => {

    let aligment, text_aligment, page, copyarr, copy;

    if(props.aligment === "right"){
        aligment = [classes.row, classes.textWrapper, classes.justifyContentEnd].join(' ')
        text_aligment = [classes.textRight, classes.alignItemsCenter].join(' ')
    }
    else{
        aligment = [classes.row, classes.textWrapper, classes.justifyContentStart].join(' ')
        text_aligment = [classes.textLeft, classes.alignItemsStart].join(' ')
    }


    copyarr = props.description.split('<br>');

    copy = copyarr.map((elem, index)=>{
        return <p key={index}>{elem}</p>;
    });
        
    props.page ? page = <Link to={props.link} className = {classes.customBtn}>{props.btn}</Link> : page = <a href={props.link} target="_blank" className = {classes.customBtn}>{props.btn}</a>


    const style = {
        backgroundImage: `url(${props.img})`
    }
    
    return(
        <div className = {classes.containerFluid}>
            <div className = {aligment}>
                    <div className = {[classes.oneHalf, classes.img].join(' ')} style={style}></div>
                    <div className = {[classes.oneHalf, classes.halfText, classes.justifyContentEnd, classes.alignItemsCenter].join(' ')}>
                        <div className = {text_aligment}>
                            <div>
                                <div>
                                    <span className = {classes.subheading}>{props.subHeading}</span>
                                    <h2>{props.heading}</h2>
                                </div>
                                <div>
                                       {copy}
                                    <p>{page}</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default ImageText