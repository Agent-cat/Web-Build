import React from "react";
import img from "../assets/download.jpeg";
import { NavLink} from "react-router-dom";
import { Settings } from "lucide-react";
import { SidebarNavlinks } from "../Constants/Constants";
const Sidebar = () => {
  return (
    <aside className="min-w-18 h-screen flex flex-col justify-between  border-r items-center border-gray-200 bg-white ">
      <div className=" flex font-bold h-18 w-full items-center justify-center border-b border-gray-200">
        <h1>Logo</h1>
      </div>
      <nav className="flex flex-1 flex-col gap-y-4 py-10">
        {SidebarNavlinks.map((item, index) => {
          return (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "rounded-xl  items-center flex   justify-center p-2 text-gray-400 hover:bg-gray-50 "
                    : "rounded-xl  items-center flex justify-center p-2 text-blue-600  hover:bg-gray-50"
                }`
              }
              to={item.to}
            >
              {item.Icon}
            </NavLink>
          );
        })}
      </nav>
      <div className=" flex flex-col items-center gap-y-4 py-10">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "rounded-xl  items-center flex   justify-center p-2 text-gray-400 hover:bg-gray-50 "
                : "rounded-xl  items-center flex justify-center p-2 text-blue-600  hover:bg-gray-50"
            }`
          }
          to="/settings"
        >
          <Settings />
        </NavLink>
        <img className="rounded-full size-12 " src={img} alt="one" />
      </div>
    </aside>
  );
};

export default Sidebar;
