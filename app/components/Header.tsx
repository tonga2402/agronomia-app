"use client";
import Image from "next/image";
import Logo from "../UI/AgronomiaLogo.png";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full h-fit bg-[#374151] text-[#e5e7eb] px-14 py-14">
      <a
        className="flex gap-4 cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        <div>
          <Image src={Logo} alt={"Logo"} width={50} />
        </div>
        <h1 className="text-xl font-bold text-[#ffffff] my-auto">
          Agronomia App
        </h1>
      </a>
    </div>
  );
};

export default Header;
