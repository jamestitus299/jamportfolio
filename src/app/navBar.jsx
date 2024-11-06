import React from 'react';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const navBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    // <nav className="p-5 flex justify-between flex-wrap fixed top-0 w-full z-10 bg-gray-200 dark:bg-gray-900 ">
    //     <div className="text-3xl flex justify-center gap-10 py-2 text-gray-600">
    //       <hi className="text-xl font-burtons text-teal-600 ">James</hi>
    //       <Link
    //         href="https://www.linkedin.com/in/jamestitus299/"
    //         target="_blank"
    //       >
    //         <AiFillLinkedin className="dark:text-gray-100" />
    //       </Link>

    //       <Link href="https://github.com/jamestitus299" target="_blank">
    //         <AiFillGithub className="dark:text-gray-100" />
    //       </Link>
    //     </div>

    //     <ul className="flex items-center sm:flex-wrap">
    //       <li>
    //         <BsFillMoonStarsFill
    //           className="cursor-pointer text-2xl dark:text-gray-300"
    //           onClick={() => {
    //             setDarkMode(!darkMode);
    //           }}
    //         />
    //       </li>
    //       <li>
    //         <a
    //           href="#home"
    //           // target="_blank"
    //           className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
    //         >
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a
    //           href="#projects"
    //           // target="_blank"
    //           className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
    //         >
    //           Projects
    //         </a>
    //       </li>
    //       {/* <li>
    //         <a
    //           href="#contact"
    //           // target="_blank"
    //           className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
    //         >
    //           Contact
    //         </a>
    //       </li> */}
    //       <li>
    //         <a
    //           href="https://drive.google.com/file/d/1V5PEa43ct9mdF1YhTWsRV8OkgwUNlcCj/view?usp=sharing"
    //           target="_blank"
    //           className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
    //         >
    //           Resume
    //         </a>
    //       </li>
    //     </ul>
    //   </nav>
    <nav className="bg-gray-800 text-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-teal-500">MyLogo</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-teal-500">
              Home
            </a>
            <a href="#about" className="hover:text-teal-500">
              About
            </a>
            <a href="#services" className="hover:text-teal-500">
              Services
            </a>
            <a href="#contact" className="hover:text-teal-500">
              Contact
            </a>
          </div>

          {/* Hamburger Menu Button (for mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block text-gray-300 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md"
            >
              Home
            </a>
            <a
              href="#about"
              className="block text-gray-300 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md"
            >
              About
            </a>
            <a
              href="#services"
              className="block text-gray-300 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md"
            >
              Services
            </a>
            <a
              href="#contact"
              className="block text-gray-300 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default navBar;
