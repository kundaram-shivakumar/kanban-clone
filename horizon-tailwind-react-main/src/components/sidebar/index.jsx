import { useState } from "react";
import { HiX } from "react-icons/hi";
import Links from "./components/Links";

import routes from "routes.js";
import projects from "projects.js";

import New1 from "views/admin/new1";

import {
  MdHome,
} from "react-icons/md";

const Sidebar = ({ open, onClose }) => {
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [newProjectTitle, setNewProjectTitle] = useState("");
  const [createdProjects, setCreatedProjects] = useState([...projects]);

  const handleCreateProject = () => {
    setShowCreateProject(true);
  };

  const handleProjectTitleChange = (e) => {
    setNewProjectTitle(e.target.value);
  };

  const handleProjectCreation = () => {
    if (newProjectTitle) {
      const newProject = 
      {
        name: newProjectTitle,
        layout: "/admin",
        path: "new1",
        icon: <MdHome className="h-6 w-6" />,
        component: <New1 />,
        secondary: true,
      };
  
      setCreatedProjects((prevProjects) => [...prevProjects, newProject]);
      setShowCreateProject(false);
      setNewProjectTitle("");
    }
  };
  
  
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      <span
        className="absolute top-4 right-4 block cursor-pointer xl:hidden"
        onClick={onClose}
      >
        <HiX />
      </span>

      <div className={`mx-[30px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          Project<span className="font-medium"></span>
        </div>
      </div>
      <div className="mt-[40px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      
      {/* Nav item */}
      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      <div>
        {showCreateProject ? (
          // Render project creation form
          <div>
            <input
              type="text"
              placeholder="Project Title"
              value={newProjectTitle}
              onChange={handleProjectTitleChange}
            />
            <button onClick={handleProjectCreation}>Create Project</button>
          </div>
        ) : (
          // Render the "+" button to create a new project
          // <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />
          <span
            className="block mt-2 ml-1 cursor-pointer text-green-500"
            onClick={handleCreateProject}
          >
             <div className="h-px w-full bg-gray-200 dark:bg-white/20 " />
            My Projects       +
          </span>
        )}
        <Links routes={createdProjects} />
      </div>

      <div className="flex justify-center m-5">
        {/* <SidebarCard /> */}
      </div>
    </div>
  );
};

export default Sidebar;
