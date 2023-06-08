import React from 'react'
import '../styles/components/input.scss';

function Input(props) {
  return (
    <>
        <div className='game'>{props.text}</div>
    </>
  )
}

export default Input
