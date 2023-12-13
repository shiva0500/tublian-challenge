import React from 'react'
import './GButton.css'
import googleicon from '../../../assets/googleicon.svg'

const GButton = (props) => {
    const isContactUs = props.name && props.name.toLowerCase() === 'contact us';
    console.log(isContactUs);

    return (
        <button className='GButton'>
          {
            isContactUs ? "" : <img src={googleicon} alt="googleicon" height={20} /> 
          }
          &nbsp;
            {props.name}
        </button>
    )
}

export default GButton
