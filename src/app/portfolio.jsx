"use client";

import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import deved from "../../public/dev-ed-wave.png";
import reactimg from "../../public/react.png";
import tailwindimg from "../../public/tailwind.png";
import js from "../../public/js.png";
import python from "../../public/python.png";
import flask from "../../public/flask.png";
import mongodb from "../../public/mongodb.png";
import php from "../../public/icons8-php-logo-160.svg"
import wordpress from "../../public/icons8-wordpress-480.svg"
import journal1 from "../../public/jamjournal.png";
import task1 from "../../public/task-1.png";
import quiz1 from "../../public/quiz-1.png";
import estate from "../../public/estate.png";
import weather from "../../public/weather-2.png";
import firebase from "../../public/firebase.svg";
import foodsaver from "../../public/foodsaver.png";
import buyurcycle from "../../public/buyurcycle.png";
import socialbutterfly from "../../public/socialbutterfly-2.png";
import java from "../../public/java.png";
import { React, useState } from "react";
// import ContactForm from "./ContactForm";
// import navBar from "./navBar";

import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiMenu, FiX } from "react-icons/fi";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>

      <nav className="p-5 flex justify-between flex-wrap fixed top-0 w-full z-10 bg-gray-200 dark:bg-gray-900 ">
        <div className="text-3xl flex justify-center gap-10 p-8 text-gray-600 md:p-6">
          <hi className="text-xl font-burtons text-teal-600 ">James</hi>
          <Link
            href="https://www.linkedin.com/in/james-titus-0a94b621a/"
            target="_blank"
          >
            <AiFillLinkedin className="dark:text-gray-100" />
          </Link>

          <Link href="https://github.com/jamestitus299" target="_blank">
            <AiFillGithub className="dark:text-gray-100" />
          </Link>

          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl dark:text-gray-300 mt-1"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
          />
        </div>



        {/* Menu Button for Mobile */}
        <button
          className="text-3xl sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX className="text-cyan-500" /> : <FiMenu className="text-cyan-500" />}
        </button>

        {/* Menu Items - show based on `menuOpen` on small screens */}
        <ul
          className={`${menuOpen ? "block" : "hidden"
            } flex-col items-center p-8 sm:flex sm:flex-row sm:space-x-8 sm:justify-center md:p-6`}
        >

          <li>
            <a
              href="#home"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mt-2 sm:mt-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/12zcKnx1VVy8PK4TBHB-wK-bDggCJ8Mlt/view"
              target="_blank"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div className="" id="home">
        <main className=" pt-32 bg-gray-200  px-10 md:px-20 lg:pd-40 dark:bg-gray-900">
          <section className=" flex-wrap">
            <div className="text-center p-8">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                James Titus
              </h2>
              <h3 className="text-sm py-2  text-center md:text-3xl dark:text-gray-200 ">
                Software Engineer
              </h3>
              <p className="text-xl py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
                Love to
                <span className="text-teal-500"> code </span> and help develop
                <span className="text-teal-500"> Software </span>
                and
                <span className="text-teal-500"> Web Sites </span>
                that power your business your way
                {/* , with the power of
                <span className="text-teal-500"> Data </span> */}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "auto",
              }}

            >
              <Image src={deved} alt="Deved Image"/>
            </div>
          </section>

          <section className="pt-20 sm:pt-8">
            <div className="px-10 mt-2 md:px-20 lg:pd-40 text-center sm:pd-20">
              <h3 className="text-3xl py-1 dark:text-white text-center sm:text-2xl">
                Technology I use
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                
                <span className="text-teal-500"> I use the below technologies to develop Software </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-sm">

              <div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 w-100 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4 ">
                <Image
                  src={reactimg}
                  alt="React Img"
                  width={100}
                  height={100}
                  className="mx-auto mt-4"
                />
                <h3 className="text-lg font-medium pt-8 pb-2  text-teal-600">
                  React
                </h3>
              </div>
              <div className=" text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
                <Image
                  src={java}
                  alt="Tailwind Image"
                  width={100}
                  height={100}
                  className="mx-auto mt-5"
                />
                <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                  Java
                </h3>
              </div>
              <div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
                <Image
                  src={js}
                  alt="Javascript Image"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600 my-5">
                  Javascript
                </h3>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
                <Image
                  src={python}
                  alt="Python Image"
                  width={100}
                  height={100}
                  className="mx-auto mt-5"
                />
                <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                  Python
                </h3>
              </div>

              {/* <div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
                <Image
                  src={php}
                  alt="php Image"
                  width={100}
                  height={100}
                  className="mx-auto mt-5"
                />
                <h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
                  PHP
                </h3>
              </div> */}

              <div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
                <Image
                  src={flask}
                  alt="Flask Image"
                  width={100}
                  height={100}
                  className="mx-auto mt-5"
                />
                <h3 className="text-lg font-medium pt-8 pb-2  mt-2 text-teal-600">
                  Flask
                </h3>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
                <Image
                  src={wordpress}
                  alt="Wordpress Image"
                  width={100}
                  height={100}
                  className="mx-auto mt-0"
                />
                <h3 className="text-lg font-medium pt-8 pb-2  mt-2 text-teal-600">
                  Wordpress
                </h3>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
                <Image
                  src={mongodb}
                  alt="MongoDb Image"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
                <h3 className="text-lg font-medium pt-8 pb-2  mt-2 text-teal-600">
                  MongoDB
                </h3>
              </div>

              <div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
                <Image
                  src={firebase}
                  alt="FireBase Image"
                  width={100}
                  height={100}
                  className="mx-auto mt-3"
                />
                <h3 className="text-lg font-medium pt-8 pb-2  mt-2 text-teal-600" >
                  FireBase
                </h3>
              </div>
            </div>
          </section>

          <section className="" id="projects">
            <div className="px-10 mt-16 md:px-20 lg:pd-40 text-center ">
              <h3 className="text-3xl py-1 dark:text-white ">My Projects</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                Check out a few of my projects below
              </p>
            </div>
            <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

              <div className="basis-1/3 flex-1 ">
                <Link href="https://food-saver.netlify.app/" target="_blank">
                  <Image
                    className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
                    width={"100%"}
                    height={"100%"}
                    src={foodsaver}
                    alt="Image"
                  />
                </Link>
              </div>

              <div className="basis-1/3 flex-1 ">
                <a href="https://estate-dev.vercel.app/" target="_blank">
                  <Image
                    className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
                    width={"100%"}
                    height={"100%"}
                    src={estate}
                    alt="Estate Image"
                  />
                </a>
              </div>


              <div className="basis-1/3 flex-1 ">
                <Link
                  href="https://tasktracker-jp5j.onrender.com"
                  target="_blank"
                >
                  <Image
                    className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
                    width={"100%"}
                    height={"100%"}
                    src={task1}
                    alt=" Image"
                  />
                </Link>
              </div>

              <div className="basis-1/3 flex-1 ">
                <a
                  href="https://weather-app-steel-two.vercel.app/"
                  target="_blank"
                >
                  <Image
                    className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
                    width={"100%"}
                    height={"100%"}
                    src={weather}
                    alt=" Image"
                  />
                </a>
              </div>

              <div className="basis-1/3 flex-1">
                <a href="https://quizapi-a6ra.onrender.com/" target="_blank">
                  <Image
                    className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
                    width={"100%"}
                    height={"100%"}
                    src={quiz1}
                    alt=" Image"
                  />
                </a>
              </div>

              <div className="basis-1/3 flex-1 ">
                <a href="https://buyurcycle.wordpress.com/" target="_blank">
                  <Image
                    className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
                    // width={"10%"}
                    // height={"10%"}
                    src={buyurcycle}
                    alt=" Image"
                  />
                </a>
              </div>

              <div className="basis-1/3 flex-1 ">
                <a href="https://jamjournal.onrender.com" target="_blank">
                  <Image
                    className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
                    // width={"10%"}
                    // height={"10%"}
                    src={journal1}
                    alt=" Image"
                  />
                </a>
              </div>

              <div className="basis-1/3 flex-1 ">
                <a href="https://social-butterfly-navy.vercel.app/" target="_blank">
                  <Image
                    className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
                    // width={"10%"}
                    // height={"10%"}
                    src={socialbutterfly}
                    alt=" Image"
                  />
                </a>
              </div>

            </div>
          </section>
          {/* <section className="p-12 mt-8" id="contact">
            <div className="px-10 mt-12  md:px-20 lg:pd-40 text-center">
              <h3 className="text-4xl py-1 text-teal-600 text-center ">
                Contact Me
              </h3>
            </div>
            <div className="px-10 mt-8 ">
              <ContactForm />
            </div>
          </section> */}
        </main>
      </div>
    </div>
  );
};

export default Portfolio;




