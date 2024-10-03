import Image from "next/image";
import Logo from "../UI/AgronomiaLogo.png";

const Footer = () => {
  return (
    <div className="flex flex-col w-full h-fit mt-32 bg-[#374151] text-[#e5e7eb] px-14 py-14">
      <div className="flex flex-row">
        <div className="flex flex-col gap-2 justify-center  w-[35%]">
          <div className="flex items-center w-full gap-4">
            <Image src={Logo} alt={"Logo"} width={70} />
            <div className="text-4xl font-bold  ">Agronomia App</div>
          </div>
        </div>
        <div className="flex flex-row w-[65%] justify-end gap-16 text-nowrap">
          <div className="grid grid-cols-3 gap-24">
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#9ca3af] pb-3">
                Explore
              </div>{" "}
              <a href="#xxx" className="hover:underline">
                Features
              </a>{" "}
              <a href="#xxx" className="hover:underline">
                Docs
              </a>{" "}
              <a href="#xxx" className="hover:underline">
                Pricing
              </a>{" "}
              <a href="#xxx" className="hover:underline">
                Security
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#9ca3af] pb-3">
                Comany
              </div>{" "}
              <a href="#xxx" className="hover:underline">
                About Us
              </a>{" "}
              <a href="#xxx" className="hover:underline">
                Contact
              </a>{" "}
              <a href="#xxx" className="hover:underline">
                Support
              </a>{" "}
              <a href="#xxx" className="hover:underline">
                News
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-bold uppercase text-[#9ca3af] pb-3">
                Legal
              </div>{" "}
              <a href="#xxx" className="hover:underline">
                Imprint
              </a>{" "}
              <a href="#xxx" className="hover:underline">
                Privacy Policy
              </a>{" "}
              <a href="#xxx" className="hover:underline">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t border-gray-500 my-8"></div>
      <div className="text-center">
        © 2024 The Monkeys - All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
