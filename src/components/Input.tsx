
import { forwardRef, type ComponentPropsWithoutRef } from 'react'

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>

//forwardRef
//First parameter refers to the type 'ref' will manage
//Second parameter referes to type of props the function inside forwardRef will receive
const Input = forwardRef<HTMLInputElement,InputProps>(function Input(
    { label,id, ...props123 }: InputProps,
    ref) {
    return (
        <p>
            <label htmlFor={id}>{ label }</label>
            <input id={id} name={id} { ...props123 } ref={ref} />
        </p>
    );
});

export default Input;