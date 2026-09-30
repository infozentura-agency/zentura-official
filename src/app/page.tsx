
import { WorkGrid } from "@/components/zentura/blocks";
import { projects } from "@/content/site";



function Index() {
  return <div className="pb-24"><WorkGrid projects={projects} firstImageEager /></div>;
}
export default function Page(props: any) {
  return <Index {...props} />;
}
