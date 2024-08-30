import { FC, PropsWithChildren } from "react";

interface NestedLayoutProps {
  title: string;
}

const NestedLayout: FC<PropsWithChildren<NestedLayoutProps>> = ({
  title,
  children,
}) => {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default NestedLayout;
