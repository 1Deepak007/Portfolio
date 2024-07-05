import React from 'react'
import './Css/Card3D.css'
import { Link } from 'react-router-dom'
import github from '../../resources/icons/icons8-github.gif'
import linkedIn from '../../resources/icons/icons8-linkedin.gif'
import { MdOutlineMailOutline } from "react-icons/md";

const Card3D = () => {
    return (
        <div className="parent pb-5 md:pb-0">
            <div className="card h-10 md:w-80">
                <div className="logo">
                    <span className="circle circle1"></span>
                    <span className="circle circle2"></span>
                    <span className="circle circle3"></span>
                    <span className="circle circle4"></span>
                    <span className="circle circle5">
                        <Link to="https://github.com/1Deepak007" className="social-button .social-button3">
                            <img src={github} alt="github" className="rounded-full"></img>
                        </Link>
                    </span>
                </div>
                <div className="glass mt-0">
                    <div className="content">
                        <span className="title">Checkout</span>
                        <span className='text'>
                            <div className='pe-10'>
                                <p className='mb-5 text-sm md:text-base'>checkout the projects, codes and more on my github account and social media handles.</p>
                            </div>
                        </span>
                        {/* <div className="">
                            <div className="bottom">
                                <div className="social-buttons-container ">
                                    <Link to="https://github.com/1Deepak007" className="social-button .social-button3">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="20" viewBox="0 0 48 48" className='svg'>
                                            <path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path><path fill="#455a64" d="M21,41v-5.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V41h2v-6.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5	V41h2v-5.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V41h1.8c0.2-0.3,0.2-0.6,0.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5	c-2.3,0-4.3,3.1-4.3,5.2v3.9c0,0.4,0.1,0.8,0.2,1.1H21L21,41z M40.1,26.4L40.1,26.4c0,0-1.3-0.4-2.4-0.4h-0.1	c-1.1,0-2.9,0.3-2.9,0.3c-0.1,0-0.1,0-0.1-0.1s0-0.1,0.1-0.1s2-0.3,3.1-0.3s2.4,0.4,2.5,0.4s0.1,0.1,0.1,0.2	C40.2,26.3,40.2,26.4,40.1,26.4z M39.8,27.2L39.8,27.2c0,0-1.4-0.4-2.6-0.4c-0.9,0-3,0.2-3.1,0.2S34,27,34,26.9s0-0.1,0.1-0.1	s2.2-0.2,3.1-0.2c1.3,0,2.6,0.4,2.6,0.4c0.1,0,0.1,0.1,0.1,0.2C39.9,27.1,39.9,27.2,39.8,27.2z M7.8,26.4c-0.1,0-0.1,0-0.1-0.1	s0-0.1,0.1-0.2c0.8-0.2,2.4-0.5,3.3-0.5c0.8,0,3.5,0.2,3.6,0.2s0.1,0.1,0.1,0.1c0,0.1-0.1,0.1-0.1,0.1s-2.7-0.2-3.5-0.2	C10.1,26,8.6,26.2,7.8,26.4L7.8,26.4z M8.2,27.9c0,0-0.1,0-0.1-0.1s0-0.1,0-0.2c0.1,0,1.4-0.8,2.9-1c1.3-0.2,4,0.1,4.2,0.1	c0.1,0,0.1,0.1,0.1,0.1c0,0.1-0.1,0.1-0.1,0.1l0,0c0,0-2.8-0.3-4.1-0.1C9.6,27.1,8.2,27.9,8.2,27.9L8.2,27.9z"></path><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5s10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path><path fill="#455a64" d="M28.6,16.3c0,0,1.7-2.3,4.8-2.3c1.2,1.2,0.4,4.8,0,5.8L28.6,16.3z M20.4,16.3c0,0-1.7-2.3-4.8-2.3	c-1.2,1.2-0.4,4.8,0,5.8L20.4,16.3z M20.1,35.9c0,0-2.3,0-2.8,0c-1.2,0-2.3-0.5-2.8-1.5c-0.6-1.1-1.1-2.3-2.6-3.3	c-0.3-0.2-0.1-0.4,0.4-0.4c0.5,0.1,1.4,0.2,2.1,1.1c0.7,0.9,1.5,2,2.8,2s2.7,0,3.5-0.9L20.1,35.9z"></path><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8	s16,7.2,16,16S32.8,40,24,40z"></path>
                                        </svg>
                                    </Link>
                                    <Link to='https://www.instagram.com/er._deepak_g?igsh=MWVhbmNveGQybDhoMg==' className="social-button .social-button3">
                                        <svg viewBox="5 4 40 40" xmlns="http://www.w3.org/2000/svg" className="svg">
                                            <path fill="#0288d1" d="M8.4,15L8.4,15L8.4,15c2.8,0,4.6-2,4.6-4.5C12.9,7.9,11.3,6,8.5,6S4,7.9,4,10.5C4,13,5.7,15,8.4,15z"></path><rect width="9" height="26" x="4" y="17" fill="#0288d1"></rect><path fill="#0288d1" d="M44,26.5c0-5.2-4.3-9.5-9.5-9.5c-3.1,0-5.8,1.4-7.5,3.7V17h-9v26h9V28l0,0c0-2.2,1.8-4,4-4s4,1.8,4,4v15h9	C44,43,44,28,44,26.5z"></path>
                                        </svg>
                                    </Link>
                                    <Link to='https://www.instagram.com/er._deepak_g?igsh=MWVhbmNveGQybDhoMg==' className="social-button .social-button3">
                                        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                                            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>


                <div className="md:hidden">
                    <div className="bottom md:ms-16">
                        <div className="social-buttons-container">
                            <Link to="https://github.com/1Deepak007" className="social-button .social-button3">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="20" viewBox="0 0 48 48" className='svg'>
                                    <path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path><path fill="#455a64" d="M21,41v-5.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V41h2v-6.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5	V41h2v-5.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5V41h1.8c0.2-0.3,0.2-0.6,0.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5	c-2.3,0-4.3,3.1-4.3,5.2v3.9c0,0.4,0.1,0.8,0.2,1.1H21L21,41z M40.1,26.4L40.1,26.4c0,0-1.3-0.4-2.4-0.4h-0.1	c-1.1,0-2.9,0.3-2.9,0.3c-0.1,0-0.1,0-0.1-0.1s0-0.1,0.1-0.1s2-0.3,3.1-0.3s2.4,0.4,2.5,0.4s0.1,0.1,0.1,0.2	C40.2,26.3,40.2,26.4,40.1,26.4z M39.8,27.2L39.8,27.2c0,0-1.4-0.4-2.6-0.4c-0.9,0-3,0.2-3.1,0.2S34,27,34,26.9s0-0.1,0.1-0.1	s2.2-0.2,3.1-0.2c1.3,0,2.6,0.4,2.6,0.4c0.1,0,0.1,0.1,0.1,0.2C39.9,27.1,39.9,27.2,39.8,27.2z M7.8,26.4c-0.1,0-0.1,0-0.1-0.1	s0-0.1,0.1-0.2c0.8-0.2,2.4-0.5,3.3-0.5c0.8,0,3.5,0.2,3.6,0.2s0.1,0.1,0.1,0.1c0,0.1-0.1,0.1-0.1,0.1s-2.7-0.2-3.5-0.2	C10.1,26,8.6,26.2,7.8,26.4L7.8,26.4z M8.2,27.9c0,0-0.1,0-0.1-0.1s0-0.1,0-0.2c0.1,0,1.4-0.8,2.9-1c1.3-0.2,4,0.1,4.2,0.1	c0.1,0,0.1,0.1,0.1,0.1c0,0.1-0.1,0.1-0.1,0.1l0,0c0,0-2.8-0.3-4.1-0.1C9.6,27.1,8.2,27.9,8.2,27.9L8.2,27.9z"></path><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5s10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path><path fill="#455a64" d="M28.6,16.3c0,0,1.7-2.3,4.8-2.3c1.2,1.2,0.4,4.8,0,5.8L28.6,16.3z M20.4,16.3c0,0-1.7-2.3-4.8-2.3	c-1.2,1.2-0.4,4.8,0,5.8L20.4,16.3z M20.1,35.9c0,0-2.3,0-2.8,0c-1.2,0-2.3-0.5-2.8-1.5c-0.6-1.1-1.1-2.3-2.6-3.3	c-0.3-0.2-0.1-0.4,0.4-0.4c0.5,0.1,1.4,0.2,2.1,1.1c0.7,0.9,1.5,2,2.8,2s2.7,0,3.5-0.9L20.1,35.9z"></path><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8	s16,7.2,16,16S32.8,40,24,40z"></path>
                                </svg>
                            </Link>
                            <Link to='https://www.linkedin.com/in/deepak-gautam-99412121a/' className="social-button .social-button3">
                                <svg viewBox="5 4 40 40" xmlns="http://www.w3.org/2000/svg" className="svg">
                                    <path fill="#0288d1" d="M8.4,15L8.4,15L8.4,15c2.8,0,4.6-2,4.6-4.5C12.9,7.9,11.3,6,8.5,6S4,7.9,4,10.5C4,13,5.7,15,8.4,15z"></path><rect width="9" height="26" x="4" y="17" fill="#0288d1"></rect><path fill="#0288d1" d="M44,26.5c0-5.2-4.3-9.5-9.5-9.5c-3.1,0-5.8,1.4-7.5,3.7V17h-9v26h9V28l0,0c0-2.2,1.8-4,4-4s4,1.8,4,4v15h9	C44,43,44,28,44,26.5z"></path>
                                </svg>
                            </Link>
                            <Link to='https://www.instagram.com/er._deepak_g?igsh=MWVhbmNveGQybDhoMg==' className="social-button .social-button3">
                                <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" className="svg">
                                    <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                                </svg>
                            </Link>
                            <Link to='mailto:ds095536@gmail.com' className="social-button .social-button3">
                                <MdOutlineMailOutline className='text-blue-700 size-5'/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card3D
