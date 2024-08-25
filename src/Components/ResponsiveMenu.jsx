import React from "react";
import { AnimatePresence,motion } from "framer-motion";
const ResponsiveMenu = ({open}) => {
  return <div>
<AnimatePresence  mode="wait">
{open && (
  <div className="absolute  right-10 left-10 top-16 font-semibold  h-56 flex items-center justify-center text-lg py-16
  rounded-lg   backdrop-blur-xl 
">
<div>
  <ul className="flex flex-col gap-5  ">
    <li className="hover:text-orange-400">Home</li>
    <li className="hover:text-orange-400">About</li>
    <li className="hover:text-orange-400">Service</li>
    <li className="hover:text-orange-400">Contact</li>
    </ul>
</div>
  </div>
 ) }
</AnimatePresence>
  </div>;
};

export default ResponsiveMenu;
