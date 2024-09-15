import React from "react";
import {
  ChevronLeft,
  ChevronDown,
  Code,
  Smartphone,
  Tablet,
  Monitor,
} from "lucide-react";
import { Frame, Element } from "@craftjs/core";
import { Container } from "./Container";
import DropCanvas from "./DropCanvas";
const Navbar = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex-wrap   flex flex-col">
        <header className="flex h-18 px-[2.1vw] items-center gap-[2vw]  border-b  border-gray-200 bg-white">
          <button className="mlg:flex  items-center hidden sm:hidden justify-center rounded-xl hover:bg-gray-100 p-[0.5vw] ">
            <ChevronLeft size={30} />
          </button>
          <button>
            <div className="sxl:flex  hidden items-center justify-center gap-[1vw] rounded-xl hover:bg-gray-100 p-[1vw]">
              <span>page: HomePage</span>
              <ChevronDown size={18} />
            </div>
          </button>
          <button>
            <div className="flex  items-center justify-center gap-[1vw] rounded-xl hover:bg-gray-200 bg-gray-100 p-[0.5vw]">
              <Code />
              <span>Code</span>
            </div>
          </button>
          <div className="h-full md:flex hidden w-px bg-gray-300"></div>
          <div className="md:flex hidden gap-x-[1.5vw]   items-center justify-center  ">
            <button>
              <Smartphone color="gray" />
            </button>

            <button className="">
              <Tablet color="gray" />
            </button>
            <button>
              <Monitor color="gray" />
            </button>
          </div>
          <div className="h-full md:flex hidden w-[1.5px] bg-gray-300"></div>
          <div className="lg:flex hidden items-center justify-center ">
            <span>
              <b>view</b> : 100%{" "}
            </span>
            <ChevronDown size={20} />
          </div>
          <div>
            <button className=" sm:flex hidden sm:items-center justify-center rounded-xl w-[20vw] bg-gray-100 p-[1vw]">
              <span>Collabration part </span>
            </button>
          </div>
        </header>
      </div>
      <DropCanvas />
    </div>
  );
};

export default Navbar;
