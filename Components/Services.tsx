import { CodeBracketSquareIcon } from '@heroicons/react/16/solid'
import { FaUserCircle } from "react-icons/fa";
import { FaCameraRetro } from "react-icons/fa";
import React from 'react'

const Services = () => {
    return (

        <section id='Service'>
            <div className='bg-[#090f18] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
                <p className='heading'>
                    My <span className='text-yellow-400'>Services</span>
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] 
                            mx-auto items-center gap-[3rem] mt-4rem text-white pt-[3rem] '>
                    <div data-aos="fade-right">
                        <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                                Full-Stack
                            </h1>
                            {/* <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto explicabo iste accusantium cupiditate laboriosam molestias officiis itaque sapiente,
                            ut blanditiis reiciendis ducimus nobis soluta quo et eos maxime porro vel.
                        </p> */}

                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-delay="300">
                        <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <FaUserCircle className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                                Portfolio
                            </h1>
                            {/* <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto explicabo iste accusantium cupiditate laboriosam molestias officiis itaque sapiente,
                            ut blanditiis reiciendis ducimus nobis soluta quo et eos maxime porro vel.
                        </p> */}

                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-delay="500">
                        <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                                    uppercase font-semibold text-center p-[2rem] rounded-3xl '>
                            <FaCameraRetro className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
                            <h1 className='text-[20px] mt:text-[30px] mt-[1.5rem] mb-[1.5rem] capitalize'>
                                Content Creation
                            </h1>
                            {/* <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto explicabo iste accusantium cupiditate laboriosam molestias officiis itaque sapiente,
                            ut blanditiis reiciendis ducimus nobis soluta quo et eos maxime porro vel.
                        </p> */}

                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default Services