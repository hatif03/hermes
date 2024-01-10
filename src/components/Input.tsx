import React from 'react'

type InputProps = {
    name: string;
    value?: string;
    type?: string;
    onChange?: (e: any) => void;
    className?: string;
    onKeyDown?: (e: any) => void;
    disabled?: boolean;
}

const Input = ({type="text", name, value, onChange, onKeyDown, className, disabled}: InputProps) => {
  return (
    <input 
        value={value}
        type={type} 
        placeholder={"Enter "+ name}
        className={` flex-1 placeholder-gray-400 bg-transparent px-3 py-1 border-2 border-gray-400 rounded-full ${className}`}
        onChange={onChange}
        onKeyDown={onKeyDown}
        disabled={disabled}
    />
  )
}

export default Input