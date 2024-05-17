import React from 'react'

const IconComp = ({ children, className = "", ...restProps }) => {
    return (
        <span className={`${className}`}  {...restProps}>
            {children}
        </span>
    )
}

export default IconComp