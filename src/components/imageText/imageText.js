import React from "react"
import classes from './imageText.module.css'

const ImageText = (props) => {

    let aligment, text_aligment;

    if(props.aligment === "right"){
        aligment = [classes.row, classes.textWrapper, classes.justifyContentEnd].join(' ');
        text_aligment = [classes.textRight, classes.alignItemsCenter].join(' ');
    }
    else{
        aligment = [classes.row, classes.textWrapper, classes.justifyContentStart].join(' ');
        text_aligment = [classes.textLeft, classes.alignItemsStart].join(' '); 
    }

    const style = {
        height: '600px',
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
                                    <span className = {classes.subheading}>Website Development and AR experience</span>
                                    <h2>SPOT COLOR</h2>
                                </div>
                                <div>
                                    <p>WP theme customization, WooCommerce Integration, Responsive development, AR and face recognition Virtual Try-on (work in progress).</p>
                                    <p><a href={props.link} target="_blank" className = {classes.customBtn}>Website</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default ImageText;