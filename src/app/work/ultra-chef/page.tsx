
import { EditorialDetail } from "@/components/zentura/EditorialDetail";
import { projects } from "@/content/site";

const project = projects[2];

function Study() { if (!project) return null; return <EditorialDetail project={project} intro="A product shaped around the pace of a working kitchen" body="This project record is awaiting a confirmed brief, scope, and outcomes. The supporting image is editorial and is not presented as the shipped product." />; }
export default function Page(props: any) {
  return <Study {...props} />;
}
