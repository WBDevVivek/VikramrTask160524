import React from 'react'

const sizes = {
  xl: "text-[42px] font-bold md:text-[38px] sm:text-[32px]",
  lg: "text-[28px] font-semibold md:text-[26px] sm:text-2xl",
  md: "text-2xl font-semibold md:text-[22px]",
  xs: "text-base font-semibold",
  sm: "text-xl font-semibold",
}



const HeadingComp = ({ children, as, className = "",
size="xs",
  ...restProps }) => {


  const Component = as || "h6";

  return (
    <Component className={` ${className} ${(size && sizes[size])}`} {...restProps}
    >
      {children}
    </Component>
  )
}

export default HeadingComp