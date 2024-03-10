import { Fragment, ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Container;
