import AD_LOGO from "../assets/AD_LOGO.png";

const Experience = () => {
  return (
    <div className="bg-[#fafafa] h-lvh text-center" id="Experience">
      <h1 className="text-xl font-bold tracking-[3px] my-12 py-12">
        Education & Experience.
      </h1>
      <div className="w-6/12 m-auto mt-16 text-center">
        <div className="border ml-[340px] border-black h-16 w-[2px] bg-black"></div>
        <div className="flex h-[70px] w-[350px] border border-transparent ml-[300px]">
          <div className="rounded-full h-[50px] my-2 w-[50px] ml-[15px]">
            <img className="py-1" src={AD_LOGO}></img>
          </div>
          <div className="mx-3 ">
            <h1 className="text-xl text-start font-medium">Amnet Digital</h1>
            <p className="text-start text-base font-normal">
              Software Engineer
            </p>
            <p className="text-start text-sm font-light">June 2023 - Present</p>
          </div>
        </div>
        <div className="border ml-[340px] border-black h-10 w-[2px] bg-black"></div>
        <div className="flex justify-between h-[70px] w-[350px] border border-transparent ml-[30px]">
          <div className="w-9/12">
            <h1 className="text-xl text-end font-medium">JNTUH CEM</h1>
            <p className="text-end text-base font-normal">
              Bachelor of Technology
            </p>
            <p className="text-end text-sm font-light"> Aug 2018 - Jul 2022</p>
          </div>
          <div className="rounded-full h-[50px] my-1 w-[50px] mr-[15px]">
            <img
              className="py-1"
              src="https://jntuhcem.ac.in/images_new/jntuhlogo1.png"
            ></img>
          </div>
        </div>
        <div className="border ml-[340px] border-black h-10 w-[2px] bg-black"></div>
        <div className="flex h-[70px] w-[350px] border border-transparent ml-[300px]">
          <div className="rounded-full border border-transparent h-[50px] my-2 w-[50px] ml-[15px]">
            <img
              className="py-[7px] rounded-full h-[50px]"
              src="https://www.pngkit.com/png/detail/248-2487068_a-few-words-about-sri-chaitanya-sri-chaitanya.png"
            ></img>
          </div>
          <div className="mx-3 w-9/12">
            <h1 className="text-xl text-start font-medium">
              Sri Chaitanya Junior College
            </h1>
            <p className="text-start text-base font-normal">Intermediate M.P.C</p>
            <p className="text-start text-sm font-light">June 2016 - May 2018</p>
          </div>
        </div>
        <div className="border ml-[340px] border-black h-16 w-[2px] bg-black"></div>
      </div>
    </div>
  );
};

export default Experience;
