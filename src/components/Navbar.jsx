import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="font-poppins bg-transparent backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="mr-4 text-2xl font-redressed text-gray-800 font-semibold hover:text-indigo-500"
            >
              Barcardi
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 font-semibold">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              Home
            </Link>
            <Link
              to="flavour"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              Flavours
            </Link>
            <Link to="product" className="text-gray-800 hover:text-indigo-500">
              Products
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              About
            </Link>
            <Link
              to="footer"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-3 bg-customBackground">
            <Link to="product" smooth={true} duration={500}>
              <button className="px-3 py-1 border-[2px] border-gray-300 text-gray-800 rounded-md hover:border-indigo-500 hover:text-slate-400 font-poppins font-semibold">
                Shop Now
              </button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="text-slate-800 hover:text-gray-500 focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? <RxCross2 size={30} /> : <MdMenu size={30} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col backdrop-blur-sm space-y-2 px-4 py-2 bg-white shadow-lg">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-indigo-500"
          >
            Home
          </Link>
          <Link
            to="flavour"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-indigo-500"
          >
            Flavours
          </Link>
          <Link
            to="product"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-indigo-500"
          >
            Products
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-indigo-500"
          >
            About
          </Link>
          <Link
            to="footer"
            smooth={true}
            duration={500}
            className="text-gray-800 hover:text-indigo-500"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
