import { Link } from "react-scroll";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";

const Contact = () => {
  return (
    <footer
      id="footer"
      className="min-h-screen bg-customBackground font-poppins text-slate-800 text-sm pt-16"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between pt-8 pb-6">
          <div className="flex items-center justify-center m-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-redressed font-semibold text-gray-800"
            >
              Barcardi
            </Link>
          </div>

          <FooterList>
            <h3 className="text-base font-bold mb-2">ABOUT US</h3>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              About Barcardi
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              Contact Us
            </Link>
            <Link
              to="#"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              Media
            </Link>
            <Link
              to="#"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              Career
            </Link>
            <Link
              to="#"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              FAQ
            </Link>
            <p className="text-gray-800 hover:text-indigo-500">
              &copy; {new Date().getFullYear()} Barcardi
            </p>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">Links</h3>
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
              Flavour
            </Link>
            <Link
              to="product"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              Product
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              About Us
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-gray-800 hover:text-indigo-500"
            >
              Contact Us
            </Link>
          </FooterList>

          <FooterList>
            <h3 className="text-base font-bold mb-2">STAY IN THE KNOW</h3>
            <input
              type="email"
              placeholder="Enter your email address"
              className="mb-4 p-2 border border-slate-300 rounded w-full"
            />
            <hr className="border-t-2 border-slate-300 mb-2" />
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link to="#">
                <MdFacebook size={24} />
              </Link>
              <Link to="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link to="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link to="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
