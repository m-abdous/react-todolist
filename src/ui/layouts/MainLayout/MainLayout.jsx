import React from "react";
import Header from "@components/Header/Header";
import Footer from "@components/Footer/Footer";

const MainLayout = ({children}) => {
  return (
    <div className="wrapper">
      <Header />
          <main id="main" role="main">
              {children}
          </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
