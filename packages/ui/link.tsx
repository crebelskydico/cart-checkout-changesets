import * as React from "react";

// eslint-disable-next-line @typescript-eslint/naming-convention -- This is a React component
interface ILinkProps {
  children?: React.ReactNode;
}

export function Link({ children }: ILinkProps): JSX.Element {
  return (
    <div>
      <h1>Link</h1>
      {children}
    </div>
  );
}
