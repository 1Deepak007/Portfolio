import React from 'react';
import SectionTitle from '../../components/SectionTitle';
import jsIcon from '../../resources/icons/icons8-javascript.gif';
import reactIcon from '../../resources/icons/icons8-react-js.gif';
import nodeIcon from '../../resources/icons/icons8-node-js.svg';
import dtbs from '../../resources/icons/icon-db.gif';
import djangoIcon from '../../resources/icons/icon-django.gif'
import pythonIcon from '../../resources/icons/icons8-python.gif';
import database from '../../resources/icons/icons-database.gif';
import sql from '../../resources/icons/icon-db.gif';
import dexpertImage from '../../resources/dexpertIcon.png';
import integralimage from '../../resources/icons/educationicons/integralUniIcon.jpg';
import dypimage from '../../resources/icons/educationicons/dypImage.jpg';
import { Link } from 'react-router-dom';
import Card from '../../components/sub_components/Card';
import Timeline from '../../components/sub_components/Timeline';
// import Projects from '../../components/Projects';


const About = () => {
  const skills = ["Javascript", "React.js", "Python", "Django", "SQL", "MSQL", "Node.js"];
  const icons = [jsIcon, reactIcon, pythonIcon, djangoIcon, dtbs, database, nodeIcon];

  const experiences = [
    {
      id: 1,
      name: "Dexpert System",
      image: dexpertImage,
      location: "May 2024 - Current",
      about: "FullStack web developer intern works on MERN stack, MySQL, PostgreSQL",
      link: '#',
    },
  ];

  const education = [
    {
      id: 1,
      name: "Dr. D.Y.Patil Institute of MCA",
      image: dypimage,
      location: 'Pune, Maharashtra',
      about: "Master of Computer Applications",
      link: 'https://www.dypimca.ac.in/',
    },
    {
      id: 2,
      name: "Integral University",
      image: integralimage,
      location: 'Lucknow, Uttar Pradesh',
      about: "Bachelor of Computer Applications",
      link: 'https://www.iul.ac.in/',
    },
  ];

  

  return (
    <>
      <div>
        <SectionTitle title='About me' />

        <div className="flex flex-col md:flex-row text-white items-center md:items-start">
          <iframe
            src="https://lottie.host/embed/bc89b311-48d7-4a5d-a735-1cc82f8eabdc/ehDMOmfnNK.json"
            className="w-full h-64 md:w-96 md:h-96"
          ></iframe>

          <div className="mt-10 md:mt-0 md:ml-10 whitespace-pre-wrap text-center md:text-left">
            <span className="block">Hello</span>
            <span className="block">My name is Deepak Gautam.</span>
            <span className="block mt-2">
              As a beginner in the field of Information Technology, I strive to associate myself
              with an organization where I can utilize my skills in the best possible manner, which
              further gives me an opportunity to grow in my career journey while contributing to the
              development of the organization.
            </span>
            <span className='block mt-2'>
              As a highly accomplished and ambitious recent postgraduate in Master of Computer Applications (MCA)
              from the prestigious Dr. D.Y. Patil Institute of MCA, Pune, and a strong foundation in computer
              applications from Integral University, Lucknow, I possess a unique blend of technical expertise,
              creativity, and a relentless drive to excel in web development. With a strong academic pedigree and
              an insatiable thirst for knowledge, I am poised to leverage my skills and expertise to drive technological
              innovation, foster growth, and make a meaningful impact in the industry. I am eager to collaborate with
              forward-thinking professionals and seek mentorship to further hone my skills and contribute to the success of visionary organizations.
            </span>
          </div>
        </div>

        <div>
          <h1 className='text-green-400 md:text-3xl text-2xl mt-10 underline underline-offset-8'>Tools & Technologies </h1>
          <div className="grid grid-cols-2 gap-4 mt-5 border-blue-400 sm:grid-cols-4">
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center mt-5 text-white">
                <img src={icons[index]} alt={skill} className="w-6 h-6 mr-4 bg-slate-900 rounded-md md:w-10 md:h-10" />
                <p className="ml-2 md:ml-5">{skill}</p>
              </div>
            ))}
          </div>


          {/* <div class="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div key={index} class="...">
                <img src={icons[index]} alt={skill} className="w-6 h-6 md:h-10 md:w-10 mr-0 bg-slate-900 rounded-md" />
                <div className="ml-5">{skill}</div>
              </div>
            ))}
          </div> */}

        </div>

        <div className='mt-3'>
          <h1 className='text-green-400 md:text-3xl text-2xl mt-10 underline underline-offset-8'>Experiences </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {experiences.map((experience) => (
              <Card
                key={experience.id}
                name={experience.name}
                image={experience.image}
                location={experience.location}
                about={experience.about}
                link={experience.link}
              />
            ))}
          </div>
        </div>

        <div className='mt-3'>
          <h1 className='text-green-400 md:text-3xl text-2xl mt-10 underline underline-offset-8'>Education </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {education.map((edu) => (
              <Card key={edu.id} name={edu.name} image={edu.image} location={edu.location} about={edu.about} link={edu.link} />
            ))}
          </div>
        </div>



        {/* <div className="mt-3">
          <h1 className='text-green-400 md:text-3xl text-2xl mt-10 underline underline-offset-8'>Projects </h1>
          <div>
            <Timeline projectname='Task Manager Application' projectdate='July 1,24' description='Task Manager application using react' projectlink='https://github.com/1Deepak007/TaskManager' />
            <Timeline projectname='Text Utils Application' projectdate='June 26,24' description='Text Utilities application using react' projectlink='https://github.com/1Deepak007/TextUtilities' />
            <Timeline projectname='React Ecommerce' projectdate='Aug 6,23' description='Ecommerce website using React, Strapie ,Strapie Payment Gateway.' projectlink='https://github.com/1Deepak007/ReactEcommerce' />
            <Timeline projectname='Modern Store' projectdate='Sep 8,23' description='Ecommerce website using Django, Django-Jazzmin, Razorpay Tawk.to Mysql' projectlink='https://github.com/1Deepak007/ModernStore' />
            <Timeline projectname='Medical Store' projectdate='Sep 8,23' description='MedicalStore website using Django, Django-Jazzmin, Disease Prediction Model(ML), Razorpay Tawk.to Mysql ' projectlink='https://github.com/1Deepak007/MedicalStore' />
          </div>
        </div> */}
        
        

      </div>
      
      {/* <Projects /> */}
    </>
  );
};

export default About;
