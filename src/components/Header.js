import SRAVAN from "../assets/SRAVAN.jpg";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className="fixed bg-[#fff] w-full shadow-2xl">
      <div className="h-[74px] static px-11 flex justify-between flex-wrap content-center">
        <div className="flex py-5">
          <div className="rounded full py-4">
            <img className="rounded-full h-12 w-12" src={SRAVAN} alt="SRAVAN" />
          </div>
          <p className=" mx-4 font-bold tracking-[1px] text-base py-[28px]">
            SRAVAN SANAM
          </p>
        </div>
        <div className="font-bold tracking-[1px] text-xs py-[26px]">
          <ul className="flex">
            <li className="mx-2 py-[26px] cursor-pointer">
              <Link to="Info" spy={true} smooth={true}>HOME</Link>
            </li>
            <li className="mx-2 py-[26px] cursor-pointer">
              <Link to="About" spy={true} smooth={true}>ABOUT</Link>
            </li>
            <li className="mx-2 py-[26px] cursor-pointer">
              <Link to="Experience" spy={true} smooth={true}>EXPERIENCE</Link>
            </li>
            <li className="mx-2 py-[26px] ">RESUME</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
