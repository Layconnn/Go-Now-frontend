import React from 'react'
import '../styles/components/input.scss';

function Input(props) {
  return (
    <>
        <input type='text' placeholder={props.placeholder}  />
    </>
  )
}

export default Input
