
import { useRef, type ComponentPropsWithoutRef, type FormEvent, 
    useImperativeHandle, forwardRef } from 'react'

export type FormHandle = { 
    clear: () => void;
}

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle,FormProps>(function Form(
    { onSave,children,...otherProps }: FormProps,
    ref) {

    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref,() => {
        return {
           clear() {
            console.log('CLEARING');
            form.current?.reset();
           } 
        }
    });//Works only with forwardRef

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
        //form.current?.reset(); //reset is a method on form, similarly expose a custom method 
        //so that parent component can call that method, for this useImperativeHandle
    }

    return (
        <form onSubmit={ handleSubmit } {...otherProps} ref={form}>
            { children }
        </form>
    )
});

export default Form;