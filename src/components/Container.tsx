
//polymorphic wrapper component

import { ElementType, ReactNode, ComponentPropsWithoutRef } from 'react'

type ContainerProps<T extends ElementType> =  {
    as?: T; // ElementType - Any name which will be valid JSX (Ex: button in <button>), not JSX itself as in that case we can use ReactNode
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({ as,children,...props }: ContainerProps<C>) {
    const Component = as || 'div';
    return ( 
       <Component {...props}>
          { children }
        </Component>  //We cannot use as as its small case
    );
}