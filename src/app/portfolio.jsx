"use client";

import {
	BsFillMoonStarsFill,
	BsBrowserChrome,
	BsAndroid2,
	BsApple,
} from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import deved from "../../public/dev-ed-wave.png";
import reactimg from "../../public/react.png";
import tailwindimg from "../../public/tailwind.png";
import js from "../../public/js.png";
import python from "../../public/python.png";
import flask from "../../public/flask.png";
import mongodb from "../../public/mongodb.png";
import socialbutterflyb from "../../public/socialbutterfly-1.png";
import socialbutterflyw from "../../public/socialbutterfly-2.png";
import journal1 from "../../public/journal-1.png";
import task1 from "../../public/task-1.png";
import quiz1 from "../../public/quiz-1.png";
import estate from "../../public/estate.png";
import weather from "../../public/weather-2.png";
import { React, useState } from "react";

const Portfolio = () => {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={darkMode ? "dark" : ""}>
			<main className="  bg-gray-200  px-10 md:px-20 lg:pd-40 dark:bg-gray-900">
				<section className="min-h-screen">
					<nav className="py-10 mb-12 flex justify-between">
						<hi className="text-xl font-burtons dark:text-teal-600 ">
							James
						</hi>
						<ul className="flex items-center">
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
									href="#"
									className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>

					<div className="text-center p-8">
						<h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
							James Titus
						</h2>
						<h3 className="text-sm py-2  text-center md:text-3xl dark:text-gray-200 ">
							Web developer | Software Engineer
						</h3>
						<p className="text-xl py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-gray-300">
							Love to code and help develop
							<span className="text-teal-500"> web sites </span>
							that power your business your way
						</p>
					</div>

					<div className="text-5xl flex justify-center gap-16 py-2 text-gray-600">
						<Link
							href="https://www.linkedin.com/in/james-titus-0a94b621a/"
							target="_blank"
						>
							<AiFillLinkedin />
						</Link>

						<Link
							href="https://github.com/jamestitus299"
							target="_blank"
						>
							<AiFillGithub />
						</Link>
					</div>

					<div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 mb-20 overflow-hidden md:h-120 md:w-120">
						<Image src={deved} fill cover />
					</div>
				</section>
				<section className="">
					<div className="px-10 mt-2 md:px-20 lg:pd-40 text-center">
						<h3 className="text-3xl py-1 dark:text-white text-center ">
							Technology I use
						</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
							I use the below technologies to develop web sites as
							<span className="text-teal-500">
								{" "}
								awesome{" "}
							</span>{" "}
							and and 
							<span className="text-teal-500">
								{" "}
								flexible{" "}
							</span>{" "} as you require
						</p>
					</div>
					<div className="flex flex-wrap gap-2 text-sm">
						<div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 w-100 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4 ">
							<Image
								src={reactimg}
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2  text-teal-600">
								React JS
							</h3>
						</div>
						<div className=" text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
							<Image
								src={tailwindimg}
								width={100}
								height={100}
								className="mx-auto mt-5"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
								Tailwind css
							</h3>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
							<Image
								src={js}
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
								Javascript
							</h3>
						</div>
						<div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
							<Image
								src={python}
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2 text-teal-600">
								Python
							</h3>
						</div>

						<div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
							<Image
								src={flask}
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2  mt-2 text-teal-600">
								Flask
							</h3>
						</div>

						<div className="text-center shadow-lg p-10 rounded-xl my-5 max-w-sm hover:scale-105 transform transition-transform duration-300 bg-gray-900 text-white dark:bg-white flex-1  w-full sm:w-1/2 md:w-1/4">
							<Image
								src={mongodb}
								width={100}
								height={100}
								className="mx-auto"
							/>
							<h3 className="text-lg font-medium pt-8 pb-2  mt-2 text-teal-600">
								MongoDB
							</h3>
						</div>
					</div>
				</section>
				<section>
					<div className="px-10 mt-16 mb-6  md:px-20 lg:pd-40 text-center">
						<h3 className="text-3xl py-1 dark:text-white">
							Develop for
						</h3>
					</div>

					<div className="flex justify-evenly mt-2 p-4">
						<BsBrowserChrome className="text-5xl text-gray-900 dark:text-gray-200" />
						<BsAndroid2 className="text-5xl text-gray-900 dark:text-gray-200" />
						<BsApple className="text-5xl text-gray-900 dark:text-gray-200" />
					</div>
				</section>

				<section className="">
					<div className="px-10 mt-16 md:px-20 lg:pd-40 text-center ">
						<h3 className="text-3xl py-1 dark:text-white ">
							My Projects
						</h3>
						<p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
							Check out a few of my projects below
						</p>
					</div>
					<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
						<div className="basis-1/3 flex-1 ">
							<Link href="https://estate-dev.vercel.app/" target="_blank">
								<Image
									className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
									width={"100%"}
									height={"100%"}
									src={estate}
								/>
							</Link>
						</div>
						
						<div className="basis-1/3 flex-1 ">
							<Link href="https://quizapi-a6ra.onrender.com/" target="_blank">
								<Image
									className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
									width={"100%"}
									height={"100%"}
									src={quiz1}
								/>
							</Link>
						</div>

						<div className="basis-1/3 flex-1 ">
							<Link href="https://jamjournal.onrender.com" target="_blank">
								<Image
									className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
									width={"100%"}
									height={"100%"}
									src={journal1}
								/>
							</Link>
						</div>

						<div className="basis-1/3 flex-1 ">
							<Link href="https://weather-app-steel-two.vercel.app/" target="_blank">
								<Image
									className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
									width={"100%"}
									height={"100%"}
									src={weather}
								/>
							</Link>
						</div>

						<div className="basis-1/3 flex-1 ">
							<Link href="https://tasktracker-jp5j.onrender.com" target="_blank">
								<Image
									className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
									width={"100%"}
									height={"100%"}
									src={task1}
								/>
							</Link>
						</div>

						<div className="basis-1/3 flex-1 ">
							<Link href="https://social-butterfly-navy.vercel.app/" target="_blank">
								<Image
									className="rounded-lg object-cover hover:scale-105 transform transition-transform duration-200"
									width={"100%"}
									height={"100%"}
									src={socialbutterflyb}
								/>
							</Link>
						</div>

						
						
					</div>
				</section>
				<footer>James Titus</footer>
			</main>
		</div>
	);
};

export default Portfolio;
