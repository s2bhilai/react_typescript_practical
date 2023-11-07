
import { ComponentPropsWithoutRef } from 'react';

type ButtonProps =  ComponentPropsWithoutRef<'button'> & { href?: never; };

type AnchorProps = ComponentPropsWithoutRef<'a'> & { href?: string; };

//below function returns boolean, if boolean is true 
//then props type which is passed as argument will be AnchorProps
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps  {
    return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
    //const { el, ...otherProps } = props;
    if(isAnchorProps(props)) {
        return <a className='button' {...props}></a>;
    }

    return <button className='button' {...props} ></button>
}