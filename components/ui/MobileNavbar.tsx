import Image from "next/image";
// import Link from "next/link";
import { Link } from "react-scroll";

interface MobileNavbarProps {
  visible: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ visible }) => {
  return (
    <nav
      className={`z-50 flex justify-between fixed bottom-0 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white mt-5 px-5 py-4 shadow-md w-full transition-all duration-300 ${
        !visible ? "transform translate-y-[100px]" : ""
      }`}
    >
      <ul className="flex justify-around w-full">
        <li>
          <Link to="home" smooth={true} duration={500}>
            <Image
              className="rounded-full p-0 m-0"
              src="/images/moon.png"
              alt="A"
              width={50}
              height={50}
            />
          </Link>
        </li>
        <li></li>
      </ul>
      <ul className="flex justify-around w-full items-center">
        <li>
          <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium text-center">
            <Link to="aboutme" smooth={true} duration={500}>
              Me
            </Link>
          </h5>
        </li>
        <li>
          <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
            <Link to="projects" smooth={true} duration={500} href="#projects">
              Projects
            </Link>
          </h5>
        </li>
        <li>
          <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
            <Link to="projects" smooth={true} duration={500}>
              Achievements
            </Link>
          </h5>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
