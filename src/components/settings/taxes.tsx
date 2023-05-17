import React from 'react'
import InputControl from './inputControl'

const Taxes = () => {
    return (
        <div className='stylerow'>
            <h3 className="head colorblue mb-4">
                Taxes Settings
            </h3>
            <div>
                <InputControl
                    text="Tax value"
                    width="275px"
                />
                <InputControl
                    text="Shipping value"
                    width="275px"
                />
                <InputControl
                    text="Shipping tax"
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

export default Taxes