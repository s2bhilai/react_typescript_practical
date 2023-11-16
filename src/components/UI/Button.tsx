import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link, type LinkProps } from "react-router-dom";

// Setting up shared BaseProps that will be used no matter if a <button> or <Link> should be rendered
type BaseProps = {
  children: ReactNode;
  textOnly?: boolean;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseProps & { to?: never };
type ButtonLinkProps = LinkProps & BaseProps & { to: string };

function isRouterLink(
  props: ButtonProps | ButtonLinkProps
): props is ButtonLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | ButtonLinkProps) {
  if (isRouterLink(props)) {
    // Destructuring inside the `if` statement to ensure TypeScript "understands" that `props` is of type
    //`ButtonLinkProps` and `otherProps` will therefore only contain props that work on <Link>
    const { children, textOnly, ...otherProps } = props;
    return (
      <Link
        className={`button ${textOnly ? "button--text-only" : ""}`}
        {...otherProps}
      >
        {children}
      </Link>
    );
  }

  //Destructuring after the `if` statement to ensure TypeScript "understands" that `props`
  //is of type `ButtonProps` and `otherProps` will therefore only contain props
  //that work on <button>
  const { children, textOnly, ...otherProps } = props;

  return (
    <button
      className={`button ${textOnly ? "button--text-only" : ""} `}
      {...otherProps}
    >
      {children}
    </button>
  );
}
