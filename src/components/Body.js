
import About from "./About";
import Experience from "./Experience";

import Info from "./Info";

const Body = () => {
  return (
    <div className="flex flex-col">
      <Info />
      <About />
      <Experience />
    </div>
  );
};

export default Body;
