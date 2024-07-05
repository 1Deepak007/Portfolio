import React from 'react';
import 'remixicon/fonts/remixicon.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='fixed right-0 bottom-0 px-2'>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-2">
                    <Link to="https://github.com/1Deepak007">
                        <i className="ri-github-line text-white text-2xl animate-pulse"></i>
                    </Link>
                    {/* <Link to="">
                        <i className="ri-facebook-circle-fill text-white text-2xl animate-pulse"></i>
                    </Link> */}
                    <Link to="mailto:ds095536@gmail.com">
                        <i className="ri-mail-line text-white text-2xl animate-pulse"></i>
                    </Link>
                    <Link to="https://www.instagram.com/er._deepak_g?igsh=MWVhbmNveGQybDhoMg==">
                        <i className="ri-instagram-line text-white text-2xl animate-pulse"></i>
                    </Link>
                    <Link to="https://www.linkedin.com/in/deepak-gautam-99412121a/">
                        <i className="ri-linkedin-box-line text-white text-2xl animate-pulse"></i>
                    </Link>
                </div>
                <div className="w-[1px] h-52 bg-[#125f63]">

                </div>
            </div>
        </div>
    )
}

export default Sidebar
