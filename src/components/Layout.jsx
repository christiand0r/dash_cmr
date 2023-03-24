import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";

function Layout() {
  return (
    <div className="flex min-h-screen">
      <aside className="flex flex-col gap-5 fixed top-0 bottom-0 max-w-tiny p-4 w-full md:static bg-teal-700">
        <span className="block font-black text-center text-4xl text-white">
          CMR
        </span>
        <Navigation />
      </aside>

      <div className="flex-1 h-screen overflow-auto">
        <main className="px-6 py-4 h-full">
          <Outlet />
        </main>

        <footer className="flex items-center justify-end p-2">
          <small className="text-gray-500">
            Creado con React Router DOM - Vite - Tailwind - JSON Serve
          </small>
        </footer>
      </div>
    </div>
  );
}
export default Layout;
