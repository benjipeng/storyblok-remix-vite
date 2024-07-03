import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => (
  <div className="text-center">
    <Navigation />
    {children}
    <Footer />
  </div>
);

export default Layout;
