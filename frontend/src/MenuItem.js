import React from 'react'
import "./MenuItem.css"

function MenuItem(props) {
  return (
    <a className='menuItem' 
        onMouseEnter={() => {
            props.setImageHover(true);
            console.log(props.imageHover);
            props.setSectionImage("./images/test.jpg");
          }}
        onMouseLeave={() => {
            props.setImageHover(false);
            props.setSectionImage(null);
          }}>
        <div className="menuIcon">
            {props.icon}
        </div>
        <h3>{props.sectionName}</h3>
    </a>
  )
}

export default MenuItem