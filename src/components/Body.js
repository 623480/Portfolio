import About from "./About";
import Experience from "./Experience";
import Header from "./Header";
import Info from "./Info";

const Body = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Info />
      <About />
      <Experience />
    </div>
  );
};

export default Body;
