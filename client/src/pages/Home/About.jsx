import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const About = () => {

  return (
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
        </div>
      </div>
    </div>
  );
}

export default About;



{/* <lottie-player src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json" 
            background="transparent" speed="1" 
            style={{"width": "300px","height": "300px"}}
            loop autoplay
            >
          </lottie-player> */}
