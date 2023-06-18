import React from "react";

import {
  MdHome,
  MdPerson,
  MdOutlineMasks,
  MdMessage,
  MdSettings,
} from "react-icons/md";

const routes = [
  {
    name: "Home",
    layout: "/admin",
    path: "Home",
    icon: <MdHome className="h-6 w-6" />,
    component: <mobileApp />,
    secondary: true,
  },
  {
    name: "Message",
    layout: "/admin",
    path: "Message",
    icon: <MdMessage className="h-6 w-6" />,
    component: <default />,
    secondary: true,
  },
  {
    name: "Tasks",
    layout: "/admin",
    path: "task",
    icon: <MdOutlineMasks className="h-6 w-6" />,
    component: <default />,
  },
  {
    name: "Members",
    layout: "/admin",
    path: "profile",
    icon: <MdPerson className="h-6 w-6" />,
    component: <default />,
  },
  {
    name: "Settings",
    layout: "/admin",
    path: "settings",
    icon: <MdSettings className="h-6 w-6" />,
    component: <default />,
  },
  <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
];
export default routes;
