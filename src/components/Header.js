import  React from 'react';
import Navigation from "./Navigation";

function Header() {

  return (
    <header className="flex justify-between bg-white p-3 font-bold 
    border-b border-gray-300 rounded-b-lg"> 
        Manikirans' Protfolio
        <Navigation/>
    </header>
  );
}

export default Header;
