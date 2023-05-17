import React from 'react'
import InputControl from './inputControl'

const Mail = () => {
  return (
    <div className='stylerow'>
      <h3 className="head colorblue mb-4">
        e-mail settings
      </h3>
      <div>
        <InputControl
          text="E-mail"
          width="275px"
        />
        <InputControl
          text="Welcome message"
          width="275px"
        />
        <InputControl
          text="message after completion shopping"
          width="275px"
        />

        <div>
          <div className='d-flex align-items-center'>
            <input type="checkbox" />
            <span className='d-inline-block ml-3'>Calculating the tax within the price of the final product</span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Mail