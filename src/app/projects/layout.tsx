
import Header from "@/components/Header";
import "./../globals.css";
import ProjectsSidebar from "@/components/ProjectsSidebar";

// TODO: make more responsive


export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {

  return (
    <main className="flex flex-col w-content justify-center overflow-hidden">
      <Header />
      <div className="flex flex-col w-full md:flex-row md:justify-between">
        <ProjectsSidebar />
        <div className="w-full ml-0 mt-8 pt-6 pr-3 h-screen overflow-y-scroll md:pl-6 md:mt-8 md:w-2/3 lg:w-3/4 ">
          {children}
        </div>
      </div>
    </ main>
  );
}