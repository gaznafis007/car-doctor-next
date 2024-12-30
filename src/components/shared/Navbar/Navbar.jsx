import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
  const navItems = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "about",
      path: "/about",
    },
    {
      name: "services",
      path: "/services",
    },
    {
      name: "blog",
      path: "/blog",
    },
    {
      name: "contact",
      path: "/contact",
    },
  ];
  return (
    <nav className="flex flex-row justify-between  py-6 items-center">
      <Link href={'/'}>
        <Image alt="logo" src={"/assets/logo.svg"} height={100} width={80} />
      </Link>
      <ul className="flex flex-row items-center space-x-8 font-semibold">
        {navItems?.map((item) => (
          <li
            key={item?.name}
            className="text-slate-800 capitalize hover:text-blue-500 duration-300"
          >
            <Link href={item?.path}>{item?.name}</Link>
          </li>
        ))}
      </ul>
      <div className="flex flex-row items-center space-x-8 text-slate-800 font-semibold">
        <MdOutlineShoppingBag className="text-2xl hover:text-blue-500" />
        <IoIosSearch className="text-2xl hover:text-blue-500" />
        <button className="px-8 py-3 border border-blue-500 hover:border-0 hover:bg-blue-500 text-blue-500 hover:text-white rounded-md">
          Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
