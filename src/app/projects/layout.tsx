
import Header from "@/components/Header";
import "./../globals.css";
import ProjectsSidebar from "@/components/ProjectsSidebar";


export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {

  return (
    <main className="flex flex-col flex-grow w-content">
      <Header />
      <div className="flex flex-col gap-16 py-8 md:flex-row">
        <ProjectsSidebar />
        <div className="w-full md:w-3/4">
          {children}
        </div>
      </div>
    </ main>
  );
}