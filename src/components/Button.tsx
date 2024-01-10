import React from 'react'
import Spinner from './Spinner';

type ButtonProps = {
    text?: string;
    className?: string;
    secondary?: boolean;
    loading?: boolean;
    onClick?: () => void;
}

const Button = ({text="Button", className, secondary, loading=false, onClick}: ButtonProps) => {
  return (
    <button
        onClick={onClick}
        disabled={loading}
        className={` items-center flex justify-center gap-3 py-2 px-9 rounded-full text-white border-2 border-white hover:bg-myPink transition-all hover:drop-shadow-lg ${secondary? " bg-myPink": "bg-myBlue"} ${className} ${loading && 'cursor-wait'}`}
    >
        {loading && <Spinner/>}
        {text}
    </button>
  )
}

export default Button