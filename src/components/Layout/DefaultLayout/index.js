import Header from "./Header";
import Footer from "./Footer";


function DefaultLayout({ children }) {
 

  return (
      <div className="min-h-screen">
          <Header/>
          {children}
          <Footer/>
      </div>
  );
}

export default DefaultLayout;