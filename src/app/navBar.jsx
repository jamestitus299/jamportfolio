import React from 'react'

const navBar = () => {
  return (
    <nav className="p-5 flex justify-between flex-wrap fixed top-0 w-full z-10 bg-gray-200 dark:bg-gray-900 ">
        <div className="text-3xl flex justify-center gap-10 py-2 text-gray-600">
          <hi className="text-xl font-burtons text-teal-600 ">James</hi>
          <Link
            href="https://www.linkedin.com/in/jamestitus299/"
            target="_blank"
          >
            <AiFillLinkedin className="dark:text-gray-100" />
          </Link>

          <Link href="https://github.com/jamestitus299" target="_blank">
            <AiFillGithub className="dark:text-gray-100" />
          </Link>
        </div>

        <ul className="flex items-center sm:flex-wrap">
          <li>
            <BsFillMoonStarsFill
              className="cursor-pointer text-2xl dark:text-gray-300"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            />
          </li>
          <li>
            <a
              href="#home"
              // target="_blank"
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              // target="_blank"
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              Projects
            </a>
          </li>
          {/* <li>
            <a
              href="#contact"
              // target="_blank"
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              Contact
            </a>
          </li> */}
          <li>
            <a
              href="https://drive.google.com/file/d/1V5PEa43ct9mdF1YhTWsRV8OkgwUNlcCj/view?usp=sharing"
              target="_blank"
              className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default navBar;
