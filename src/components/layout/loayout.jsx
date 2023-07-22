import Header from "./header/header";
import HeaderTop from "./header/header-top/header_top";
import Footer from "./footer/footer";
import EnquireBtn from "../ui/enquire/enquire";

const Layout = (props) => {
  const { children } = props;

  return (
    <>
      <EnquireBtn />
      <HeaderTop />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
