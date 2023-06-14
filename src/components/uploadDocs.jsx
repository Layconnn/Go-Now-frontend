import React from 'react'
import '../styles/components/upload-docs.scss';

function UploadDocs(props) {
  return (
    <>
         <div className="template">
            <img src={props.src} alt="" className='template__image' />
            <h5>{props.h5}</h5>
            <h2 className='template__action'>{props.h2}</h2>
        </div>
    </>
  )
}

export default UploadDocs
