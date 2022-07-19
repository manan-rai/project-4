import React from 'react'
import Head from './Head';
import Nav from './Nav';
import "./Header.css"
const Header = () => {
  return (
    <>
    <section className="header flex">
      <div className="header_logo items_center">
         <img src="/img/logo.png" alt="" />
      </div>
      <div className="menu_wrapper">
        <div className="menu_wrapper_top">
          <Head />
        </div>
        <div className="menu_wrapper_bottom ">
       <Nav />
        </div>
      </div>
    </section>
    </>
  )
}

export default Header


