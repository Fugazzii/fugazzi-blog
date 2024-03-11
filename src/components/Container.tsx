import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useSelector } from "react-redux";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  const isDarkMode = useSelector((state: any) => state.themeMode.isDarkMode);

  return (
    <main style={{ background: isDarkMode ? "rgb(17, 24, 39, 1)" : "#282c35" }}>
      <Navbar />
        {children}
      <Footer />
    </main>
  );
};

export default Container;
