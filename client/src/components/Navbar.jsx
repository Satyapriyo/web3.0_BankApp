import React, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../images/logo.png";
//TODO: I have to add a component to add recurring value in Navbar FIXME:
// const NavbarItems = (title) => {
//   return <li className={`mx-4 cursor-pointer `}>{title}</li>;
// };
const Navbar = () => {
  let k= 0;
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="w-full flex md:justify-center justify-between">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Markets", "Wallets", "Exchange", "Tutorials"].map((item) => {
          k= k+1
          return <li className="mx-4 cursor-pointer" key={k+1}>{item}</li>;
        })}
        <li className="bg-purple-400 py-2 px-7 rounded-full text-white cursor-pointer hover:bg-purple-500">
          Login
        </li>
      </ul>
      <div className="flex relative">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
          flex flex-col text-white bg-slate-500 animate-slide ease-in-out duration-300
          "
          >
            <li>
              <AiOutlineClose
                fontSize={28}
                onClick={() => setToggleMenu(false)}
              />
            </li>
            {["Markets", "Wallets", "Exchange", "Tutorials"].map((item) => {
              k=k+2
              return (
                <li className="mx-4 my-5  cursor-pointer text-lg" key={k}>{item}</li>
              );
            })}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
