import * as React from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention -- This is a component
interface IButtonProps {
  children?: React.ReactNode;
}

export function Button({ children }: IButtonProps): JSX.Element {
  return (
    <div>
      <h1>Button</h1>
      {children}
    </div>
  );
}
