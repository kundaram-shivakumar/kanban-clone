import React from "react";

// Admin Imports
//import MainDashboard from "views/admin/default";
import New1 from "views/admin/new1";
import Profile from "views/admin/profile";
import DataTables from "views/admin/tables";

import MobileApp from "views/admin/mobileApp";
import WebsiteRedesign from "views/admin/websiteRedesign";
import DesignSystem from "views/admin/designSystem";
import WireFrames from "views/admin/wireFrames";


const projects = [
  
  {
    name: "Mobile App",
    layout: "/admin",
    path: "Home",
    component: <MobileApp />,
    secondary: true,
  },
  {
    name: "Website Redesign",
    layout: "/admin",
    path: "websiteRedesign",
    component: <WebsiteRedesign />,
  },
  {
    name: "Design System",
    layout: "/admin",
    path: "designSystem",
    component: <DesignSystem />,
    secondary: true,
  },
  {
    name: "Wireframes",
    layout: "/admin",
    path: "wireFrames",
    component: <WireFrames />,
    secondary: true,
  },
  <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
];
export default projects;
