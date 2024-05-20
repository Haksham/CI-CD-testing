import React from 'react'

export default function Alert(props) {
  const capitalise=(word)=>{
    const tes =word.toLowerCase();
    return tes.charAt(0).toUpperCase()+tes.slice(1);
  }
  return (
    props.alert && <div class={`alert alert-${props.alert.type}  fade show `} role="alert">
      <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
      {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
    </div>
  )
}
