import React from 'react'


const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-[10px]",
}

const variants = {
  fill: {
    btnformate: "bg-buttonColor",
  },
  outline: {
    btnformate: "bg-gray-300 border-2 border-gray-600"
  },
  gradient: {
    btnformate: "bg-yellow-200"
  }
}

const sizes = {

  "2xl": "h-[57px] px-[25px] text-base",
  xl: "h-[50px] px-4",
  lg: "h-[48px] px-8 text-base",
  md: "h-[36px] px-4 text-sm",
  xs: "h-[25px] px-1.5",
  sm: "h-[35px]",
}



const ButtonComp = ({
  children,
  className = "",
  shape,
  variant="outline",
  btncolor="btnformate",
  size="lg",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""}  ${(variant && variants[variant]?.[btncolor]) || ""}  ${(size && sizes[size]) || ""} `}
      {...restProps}
    >
      {children}
    </button>
  )
}

export default ButtonComp