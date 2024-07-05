import React from 'react'
import SectionTitle from '../../components/SectionTitle'
// import { Link } from 'react-router-dom'
import Card3D from '../../components/sub_components/Card3D'
// import CardGlass from '../../components/sub_components/CardGlass'
// import Card from '../../components/sub_components/Card'
import myImage from '../../resources/mypic.jpg';

const Contact = () => {
    const user = {
        name: 'Deepak Gautam',
        email: 'ds095536@gmail.com',
        mobile: '7007408796',
        location: 'Pune',
        country: 'India'
    }

    return (
        <>
            <SectionTitle title="Get in touch" />

            <div className="grid grid-cols-1 gap-4 md:gap-96  mt-4 md:grid-cols-4 ">
                <div className="col-span-1 md:col-span-2 md:ms-0">
                    <h2></h2>
                    <div className="mt-0">
                        <div className="flex flex-row items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover w-1/2 md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg p-3 mt-2 md:mt-0" src={myImage} alt="Mypic" />
                            <div className="flex flex-col md:justify-between p-4 leading-normal text-xs md:text-base md:text-left">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{user.name}</h5>
                                <p className="md:mb-3 font-normal text-gray-700 dark:text-gray-400">Phone: {user.mobile}</p>
                                <p className="md:mb-3 font-normal text-gray-700 dark:text-gray-400">Email: {user.email}</p>
                                <p className="md:mb-3 font-normal text-gray-700 dark:text-gray-400">Location: {user.location}, {user.country}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <Card3D />
                </div>
            </div>
        </>
    )
}

export default Contact
