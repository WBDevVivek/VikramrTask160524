import React from 'react'
import Link from 'next/link'

const LinkComp = ({ children, href, className, ...restProps }) => {
    return (
        <Link
            href={href} className={` ${className}`} {...restProps}
        >
            {children}
        </Link>
    )
}

export default LinkComp