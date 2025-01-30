import ProjectForm from "@/components/admin/ProjectForm";
import ProjectList from "@/components/admin/ProjectList";


const ProjectsPage = () => (
  <div>
    <h1>Projects</h1>
    <ProjectForm onProjectAdded={() => window.location.reload()} />
    <ProjectList />
  </div>
);

export default ProjectsPage;
