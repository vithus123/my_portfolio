import React from 'react'
import Image from 'next/image';
import { IoLogoGithub } from "react-icons/io";
import { IoGlobeOutline } from "react-icons/io5";

const Projects = () => {
    return (

        <section id='Project'>

            <div className='bg-[#090f18] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
                <p className='heading'>
                    Pro<span className='text-yellow-400'>jects</span>
                </p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] 
                            mx-auto items-center gap-[3rem] mt-4rem text-white pt-[3rem] '>

                    {/* <div data-aos="flip-up" data-aos-delay="100">
                        <div className='text-center p-[1rem]'>

                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/feasto.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                Feasto <br />
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                                This project replicates the core design and functionality of Feasto's original interface, providing a seamless user experience across different devices. <br />
                                Used: <span className='text-decoration-line: underline font-bold'>React JS, TypeScript, React Slick, TailWind CSS  <br />
                                </span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[9rem]'>
                                <a href="https://github.com/Iynguuuuu/Feasto"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                                <a href="https://feasto.vercel.app/"> <IoGlobeOutline className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>

                        </div>
                    </div> */}

<div data-aos="flip-up" data-aos-delay="300">
                        <div className='text-center p-[1rem]'>
                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/WhatsApp Image 2024-12-17 at 16.47.46_62619d68.jpg" alt="Portfolio" fill  className='object-contain fixed'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                WeatherLight <br />
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                            Weatherwave will be getting temperature, humidity,feels like, sunrise, sunset, hourly, and daily forecast. For input, there are some quick links on top along with a text box for searching a city and also a current location-based search.
                            
                                <br />
                                Used: <span className='text-decoration-line: underline font-bold'>React JS, TailWind CSS, OpenWeatherMap for API
                                </span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[9rem]'>
                                <a href="https://github.com/vithus123/WeatherLight"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>

                            </div>

                        </div>
                    </div>


                    <div data-aos="flip-up" data-aos-delay="500">
                        <div className='text-center p-[1rem]'>

                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/111.PNG" alt="Portfolio" fill  className='object-contain fixed'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                            Personal Finance Management Webpage<br />
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                             Webpage using React and Tailwind CSS,
                             featuring Dark Mode & Light Mode, a sleek modern UI, and a 
                             fully responsive design for seamless access across all devices.
                              smooth, user-friendly interface for managing finances. <br />
                                Used: <span className='text-decoration-line: underline font-bold'>Spring Boot, PostgreSQL, Vue js <br />
                                </span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[9rem]'>
                                <a href="https://github.com/vithus123/Finance-Management-"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                                <a href="https://finance-management-green.vercel.app/"> <IoGlobeOutline className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>

                        </div>
                    </div>

                    <div data-aos="flip-up" data-aos-delay="700">
                        <div className='text-center p-[1rem]'>

                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/Capture5.PNG" alt="Portfolio" fill className='object-contain fixed'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                            DishDelight <br />
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                            Created a  as part of a Human-Computer Interaction module. Focused on user interface and experience. <br />
                                Mobile app Development
                                <br />Used:<span className='text-decoration-line: underline font-bold'> Android Studio, Java, API <br />
                                </span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[9rem]'>
                                <a href="https://github.com/vithus123"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                        
                            </div>

                        </div>
                    </div>

                    <div data-aos="flip-up" data-aos-delay="900">
                        <div className='text-center p-[1rem]'>

                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/capture1.PNG" alt="Portfolio" fill  className='object-contain fixed' 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                JORA  <br />
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                            Created a clothing online shopping website named Jora for a Web Application
                            Development module.  <br /> COMMERCIAL WEBSITE <br />
                                Used: <span className='text-decoration-line: underline font-bold'>HTML, CSS, JavaScript, PHP, MySQL <br />
                                </span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[9rem]'>
                                <a href="https://github.com/vithus123"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>

                        </div>
                    </div>

                   

                    <div data-aos="flip-up" data-aos-delay="1100">
                        <div className='text-center p-[1rem]'>
                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/Capture2.PNG" alt="Portfolio" fill  className='object-contain fixed'
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                Portfolio <br />
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                                Created my Portfolio website . <br />
                                Used: <span className='text-decoration-line: underline font-bold'>React JS, TailWind CSS, TypeScript, <br />
                                    Next JS</span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[9rem]'>
                                <a href="https://github.com/vithus123"> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                                <a href=""> <IoGlobeOutline className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>
                        </div>
                    </div>
{/* 
<div data-aos="flip-up" data-aos-delay="100">
                        <div className='text-center p-[1rem]'>

                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/P2.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                                Login Page <br />
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                                Created login page for Software Developement Group Project website. <br />
                                Used: <span className='text-decoration-line: underline font-bold'>React JS, CSS, JavaScript</span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[9rem]'>
                                <a href="https://bms-enzh.onrender.com/"> <IoGlobeOutline className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>


                        </div>
                    </div>


*/}
{/*                     
                    <div data-aos="flip-up" data-aos-delay="300">
                        <div className='text-center p-[1rem]'>
                            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative 
                                w-[300px] h-[200px] md:h-[300px] mx-auto '>
                                <Image src="/images/2.jpg" alt="Portfolio" layout='fill' className='object-contain fixed' />
                            </div>
                            <h1 className='text-[20px] mt:text-[10px] mt-[5px] mb-[5px]'>
                            Marketing Poster Designer <br />
                            </h1>
                            <p className='text-[15px] text-[#d3d2d2] font-normal opacity-70'>
                            Created visually appealing marketing posters to promote business, ensuring clear messaging and brand alignment to engage target audiences effectively. <br />
                                Used: <span className='text-decoration-line: underline font-bold'>canva</span>
                            </p>
                            <div className='mt-[1rem] flex items-stretch space-x-5 ml-[9rem]'>
                                <a href="https://github.com/Iynguuuuu/Web."> <IoLogoGithub className='w-[2rem] h-[2rem] text-white ' /></a>
                                <a href="https://iynguuuuu.github.io/Web./Homepage.html"> <IoGlobeOutline className='w-[2rem] h-[2rem] text-white ' /></a>
                            </div>


                        </div>
                    </div> */}




                </div>

            </div>

        </section>


    )
}

export default Projects