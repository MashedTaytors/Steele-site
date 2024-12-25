
import "./../globals.css";
import ProjectsSidebar from "@/components/projects-sidebar";


export default async function ProjectsLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className="flex flex-row gap-16 py-8">
      <ProjectsSidebar />
      <div className="w-3/4">
        {children}
      </div>
    </div>
  );
}