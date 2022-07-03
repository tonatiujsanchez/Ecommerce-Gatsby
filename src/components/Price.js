import React from 'react'

const Price = ({ price, currency="mxn", className }) => {
  return (
    <p className={`${className}`}>
        $<span>{ price / 100 }</span>{' '}<span className='uppercase'>{currency}</span>
    </p>
  )
}

export default Price