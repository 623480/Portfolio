

const About = () => {
  return (
    <div className="h-lvh bg-orange-100 text-center">
      <h1 className="text-xl font-bold tracking-[3px] my-10 py-10">ABOUT ME</h1>
      <div className="flex w-10/12 m-auto mb-1">
        <div className="w-6/12 text-start m-auto">
          <h1 className="text-start text-2xl font-bold tracking-[2px] my-4">
            Overview !
          </h1>
          <p className="text-start text-lg font-normal pb-5">
            Hello my name is Sravan Sanam, I am a frontend developer at AMNET
            DIGITAL Company, specializing in React.js, Tailwind CSS, and Redux
            Toolkit with over 1 year of experience.
          </p>
          <p className="text-start text-lg font-normal pb-5">
            I excel in transforming UX designs and wireframes into visually
            appealing and functional web applications that prioritize user
            experience and accessibility. Collaborating closely with UX
            designers, business analysts and product managers to understand
            client and user requirements, translating them into actionable
            technical specifications. My approach combines a passion for clean,
            maintainable code with a commitment to staying updated on the latest
            frontend technologies.
          </p>
        </div>
        <div className="w-6/12 m-auto mt-1">
          <h1 className="text-start text-2xl font-bold tracking-[2px] my-4 pl-40">
            Skills
          </h1>
          <div className="flex flex-wrap pl-40">
            <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">
              HTML
            </div>
            <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">
              CSS
            </div>
            <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">
              JavaScript
            </div>
            <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">
              React JS
            </div>
            <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">
              Tailwind CSS
            </div>
            <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">
              ReduxToolKit
            </div>
            <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">
              Java
            </div>
            <div className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mx-2 my-2">
              M S Sql Server
            </div>
          </div>
          <div className="inline-flex my-10 mr-40 text-start py-3 pr-5 bg-blue-500 hover:bg-blue-700 rounded-full">
            <button className="text-white pl-4 pr-1 font-bold rounded-full">
              Resume
            </button>
            <svg
              className="animate-bounce w-6 h-6 text-white cursor-pointer  hover:animate-none"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
