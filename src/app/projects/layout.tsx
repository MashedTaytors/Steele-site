
import Header from "@/components/Header";
import "./../globals.css";
import ProjectsSidebar from "@/components/ProjectsSidebar";

// TODO: make more responsive


export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {

  return (
    <main className="flex flex-col items-center overflow-hidden h-screen">
      <Header />
      <div className="flex flex-col items-center md:w-content md:flex-row md:justify-between">
        <ProjectsSidebar />
        <div className="w-content ml-0 mt-8 pt-6 pr-3 h pb-48 h-screen overflow-y-scroll md:pl-6 md:mt-8 md:w-2/3 lg:w-3/4 ">
          {children}
        </div>
      </div>
    </ main>
  );
}