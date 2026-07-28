import { NavLink, Outlet } from "react-router-dom";
import {
  Type,
  MousePointerClick,
  RectangleHorizontal,
  TextIcon,
} from "lucide-react";

const menus = [
  {
    name: "Button",
    icon: <MousePointerClick size={18} />,
    path: "/button",
  },
  {
    name: "Text",
    icon: <Type size={18} />,
    path: "/text",
  },
  {
    name: "Input",
    icon: <RectangleHorizontal size={18} />,
    path: "/input",
  },
  {
    name: "Text Area",
    icon: <TextIcon size={18} />,
    path: "/text-area",
  },
];

const AppLayout = () => {
  return (
    <div className="flex h-screen bg-bg-light">
      <aside className="w-64 border-r border-border-default bg-white">
        <div className="border-b border-border-default p-6">
          <h1 className="text-xl font-bold">UI Library</h1>

          <p className="text-sm text-text-muted">Component Showcase</p>
        </div>

        <nav className="flex flex-col gap-1 p-3">
          {menus.map((menu) => (
            <NavLink
              key={menu.path}
              to={menu.path}
              className={({ isActive }) =>
                [
                  "flex items-center gap-3 rounded-lg px-4 py-3 transition-all",
                  isActive
                    ? "bg-primary-light text-primary-base font-semibold"
                    : "hover:bg-bg-hover text-text-body",
                ].join(" ")
              }
            >
              {menu.icon}
              {menu.name}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="flex-1 overflow-auto bg-bg-light">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
