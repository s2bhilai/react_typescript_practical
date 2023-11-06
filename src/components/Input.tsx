
import { type ComponentPropsWithoutRef } from 'react'

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>

export default function Input({ label,id, ...props123 }: InputProps) {
    return (
        <p>
            <label htmlFor={id}>{ label }</label>
            <input id={id} { ...props123 } />
        </p>
    );
}