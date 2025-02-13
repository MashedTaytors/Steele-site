
import Header from "@/components/Header";
import "./../globals.css";
import ProjectsSidebar from "@/components/ProjectsSidebar";

// TODO: make more responsive


export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {

  return (
    <main className="w-content">
      <Header />
      <div>
        <ProjectsSidebar />
        <div className="fixed w-content ml-0 top-56 pt-8 pr-3 h-screen overflow-y-scroll md:ml-72 md:top-16 md:w-[584px] lg:w-[800px] lg:ml-[376px]">

          {children}
        </div>
      </div>
    </ main>
  );
}