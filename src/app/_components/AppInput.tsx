"use client"
import React from 'react'

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & { label?: string, labelClassName?: string, lablelFor?: string }

const AppInput = (props: Props) => {
    const [input, setInput] = React.useState(props.value || "")
    let message = '';
    if (input === '') {
        message = props.required ? `${props.label} is required` : ''
    }
    if (input > props.max!) {
        message = `Please enter value less than ${props.max}`
    }
    if (input < props.min!) {
        message = `Please enter value greater than ${props.min}`
    }
    return (
        <div>
            {props.label ? <label className={`my-2 ps-3 text-base font-bold block ${props.labelClassName}`} htmlFor={props.lablelFor}>{props.label}</label> : null}
            <input onChange={(e) => setInput(e.target.value)} name={props.name} type={props.type} id={props.id} className={`text-md w-[410px] rounded-lg p-4 text-black outline-none ${props.className}`} placeholder={props.placeholder} {...props} />
            {
                message ? <p className="text-red-500">{message}</p> : null
            }
        </div>
    )
}

export default AppInput