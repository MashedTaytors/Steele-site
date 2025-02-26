
import Header from "@/components/Header";
import "./../globals.css";
import ProjectsSidebar from "@/components/ProjectsSidebar";

// TODO: make more responsive


export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {

  return (
    <main className="flex flex-col items-center min-h-[calc(100vh-4rem)]">
      <Header />
      <div className="flex flex-col items-start w-content md:flex-row md:justify-between">
        <ProjectsSidebar />
        <div className="mt-12 pr-3 pb-48 md:pt-8 md:pl-6 md:mt-16 md:w-2/3 lg:w-3/4">
          {children}
        </div>
      </div>
    </ main>
  );
}