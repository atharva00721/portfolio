// import { Avatar } from "@radix-ui/themes";

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
          <a href="#home">
            <img
              className="rounded-full w-[50px] h-[50px] p-0 m-0"
              src="/images/moon.png"
              alt="A"
            />
          </a>
        </li>
        <li>
          {/* <h4 className="text-pink-500 uppercase tracking-wide font-bold pl-2 my-auto">
            Moon
          </h4> */}
        </li>
      </ul>
      <ul className="flex justify-around w-full items-center">
        {/*<li>
           <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-small">
            Home
          </h5> 
        </li>*/}
        <li>
          <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium text-center">
            <a href="#aboutme">Me</a>
          </h5>
        </li>
        <li>
          <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
            <a href="#projects">Portfolio</a>
          </h5>
        </li>
        <li>
          <h5 className="px-5 cursor-pointer transition-colors duration-300 hover:text-yellow-300 font-medium">
            <a href="#contact">Contact</a>
          </h5>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
