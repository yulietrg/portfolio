import React from "react"

const Image = (prop) => {

  const style={
    'display': 'block',
    'margin': '0 auto',
    'width': '1200px'
  }

  return <img src={prop.src} style={style}/>
}

export default Image
