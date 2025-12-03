import React, { useState } from "react";
import { Logo } from "~/utils/images/logo1.image";
import { Link, useLocation } from "react-router";
import {
  FiMenu,
  FiX,
  FiUsers,
  FiBook,
  FiSettings,
  FiCalendar,
  FiBookOpen,
} from "react-icons/fi";
import { MdCreditCard } from "react-icons/md";
import { SlGraduation } from "react-icons/sl";
import { BiCategoryAlt } from "react-icons/bi";
import { TiDocumentText } from "react-icons/ti";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menus = [
    { name: "Dashboard", path: "/", icon: <BiCategoryAlt size={20} /> },
    { name: "My Schedule", path: "/schedule", icon: <FiCalendar size={20} /> },
    {
      name: "Student Management",
      path: "/students",
      icon: <SlGraduation size={20} />,
    },
    { name: "Tutor Management", path: "/tutors", icon: <FiUsers size={20} /> },
    { name: "Class Management", path: "/classes", icon: <FiBook size={20} /> },
    {
      name: "Text Book Management",
      path: "/books",
      icon: <FiBookOpen size={20} />,
    },
    {
      name: "Payment Management",
      path: "/payments",
      icon: <MdCreditCard size={20} />,
    },
    {
      name: "Forum Management",
      path: "/forum",
      icon: <TiDocumentText size={20} />,
    },
    {
      name: "Subscription Management",
      path: "/subscriptions",
      icon: <MdCreditCard size={20} />,
    },
    { name: "Promotion", path: "/promotion", icon: <FiBook size={20} /> },
    { name: "Site Setting", path: "/settings", icon: <FiSettings size={20} /> },
  ];

  return (
    <>
      <header className="lg:hidden fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-4 h-16">
        <img src={Logo} alt="logo" className="w-[150px]" />
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </header>
      <aside
        className={`
        fixed inset-y-0 left-0 z-40
        w-[314px] bg-white shadow-lg flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:static
        pt-20 lg:pt-6 px-4 py-6 overflow-y-auto
        border-r border-gray-200 rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px]
      `}
      >
        <div className="hidden lg:block mb-8 text-center">
          <img src={Logo} alt="logo" className="w-[170px] mx-auto" />
        </div>
        <nav className="flex flex-col gap-1">
          {menus.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-sm
                  ${
                    isActive
                      ? "bg-[#D7E9FF] text-[#144B8A] shadow-sm"
                      : "text-gray-600 hover:bg-blue-50 hover:text-[#144B8A]"
                  }
                `}
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
