import { NavLink } from "react-router-dom";
import { generatorID } from "../utils/generators";

import routes from "../routes";

const generateLinks = (routes) => {
  const links = routes.map((route) => {
    if (!route.name && !route.children) return;

    if (route.children) return generateLinks(route.children);

    return (
      <NavLink
        end
        key={generatorID()}
        to={route.path}
        className={({ isActive }) =>
          `${
            isActive ? "text-teal-200" : "text-white"
          } transition-colors hover:text-teal-200`
        }
      >
        {route.name}
      </NavLink>
    );
  });

  return links.filter((link) => link);
};

function Navigation() {
  return <nav className="flex flex-col gap-2">{generateLinks(routes)}</nav>;
}

export default Navigation;
