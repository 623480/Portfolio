import { Link } from "react-scroll";

const Info = () => {
  return (
    <div className="bg-slate-100 h-lvh" id="Info">
      <div className="m-auto w-8/12 pt-44 text-center my-10">
        <h1 className="text-5xl tracking-[3px] my-10 uppercase font-bold text-[#111]">
          HELLO, SRAVAN SANAM here!
        </h1>
        <p className="mt-10 text-xl text-center">
          Passionate about Crafting Exceptional User-Centered Frontend Web
          Applications, and Adaptable to Evolving Technologies
        </p>
        <Link className="my-10"to="About" spy={true} smooth={true}>
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 my-10 border-b-4 border-blue-700 hover:border-blue-500 rounded-xl">
            About Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
