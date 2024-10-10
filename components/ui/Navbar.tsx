"use client";
import { useEffect, useState } from "react";
// import { Avatar } from "@radix-ui/themes";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar: React.FC = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const isMobile = window.innerWidth <= 640;

  return (
    <>
      {isMobile ? (
        <MobileNavbar visible={visible} />
      ) : (
        <DesktopNavbar visible={visible} />
      )}
    </>
  );
};

export default Navbar;
