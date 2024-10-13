import { Avatar } from "@radix-ui/themes";
import { Link } from 'react-scroll';


interface DesktopNavbarProps {
  visible: boolean;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ visible }) => {
  return (
    <nav
      className={`z-40 flex justify-between fixed top-0 left-1/2 transform -translate-x-1/2 glassmorphism2 text-white mt-5 rounded-2xl px-5 py-4 shadow-md w-5/6 transition-all duration-300 ${
        !visible ? "transform -translate-y-[100px]" : ""
      }`}
    >
      <div className="flex flex-row">
        <a href="#home" className="w-[35px] h-[35px]">
          <Avatar
            className="rounded-full w-[35px] h-[35px] p-0 m-0"
            size="8"
            src="/images/moon.png"
            fallback="A"
          />
        </a>
        <a href="#home" className="my-auto">
          <h4 className=" uppercase tracking-wide font-bold pl-2 my-auto hidden md:block">
            Atharva
          </h4>
        </a>
      </div>
      <div className="p-1">
        <ul className="flex justify-around">
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              <Link to="home" smooth={true} duration={500}>Home</Link>
            </h5>
          </li>
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              <Link to="aboutme" smooth={true} duration={500}>About Me</Link>
            </h5>
          </li>
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              <Link to="projects" smooth={true} duration={500} >Projects</Link>
            </h5>
          </li>
          <li>
            <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
              <Link to="projects" smooth={true} duration={500} >Achievements</Link>
            </h5>
          </li>
          <li></li>
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
