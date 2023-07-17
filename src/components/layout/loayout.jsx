import { Container } from "react-bootstrap";
import Header from "./header/header";
import HeaderTop from "./header/header-top/header_top";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <HeaderTop />
      <Header />
      {children}
      {/* <p>footer</p> */}
    </>
  );
};

export default Layout;
