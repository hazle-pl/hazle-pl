import Layout from "@/components/admin/Layout";
import ProjectEarningsChart from "@/components/admin/ProjectEarningsChart";
import ProjectForm from "@/components/admin/ProjectForm";
import ProjectList from "@/components/admin/ProjectList";
import TotalEarnings from "@/components/admin/TotalEarnings";
import Grid from "@/components/Grid";

const ProjectsPage = () => (
  <Layout>
    <Grid xs='2' md="8" xl="8">
      <TotalEarnings/>
      <ProjectEarningsChart/>
    </Grid>
    <ProjectForm onProjectAdded={() => window.location.reload()} />
    <ProjectList />
  </Layout>
);

export default ProjectsPage;
