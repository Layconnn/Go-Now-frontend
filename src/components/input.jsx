import React from 'react'
import '../styles/components/input.scss';

function Input(props) {
  return (
    <>
        <input className='game' type={props.type} placeholder={props.placeholder} />
    </>
  )
}

export default Input
