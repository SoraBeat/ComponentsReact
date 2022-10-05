import React from 'react'

const FormSubmit = ({text,doSomething}) => {
  return (
    <input type="submit" onClick={doSomething} value={text} className="btn btn-primary"/>
  )
}

export default FormSubmit