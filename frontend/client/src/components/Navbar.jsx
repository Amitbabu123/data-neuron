
import { Link } from 'react-router-dom';
import logo from '../../public/logo1.png';

const Navbar = () => {

 
  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
          </div>
          {/* Assuming logo is a path to an image */}
          <img src={logo} alt="Logo" className="h-10 w-auto cursor-pointer" />
        </div>
        <div className="navbar-center hidden lg:flex">
        </div>
        <div className="navbar-end">
          {/* Replace <a> with <Link> */}
          <Link to="/layout" className="inline-block px-4 py-2 bg-[#11256d] text-white rounded-lg transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Task-1</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
