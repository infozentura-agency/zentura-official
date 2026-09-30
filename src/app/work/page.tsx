
import { WorkGrid } from "@/components/zentura/blocks";
import { projects } from "@/content/site";



function Work() { return <div className="pb-24"><WorkGrid projects={projects} firstImageEager /></div>; }
export default function Page(props: any) {
  return <Work {...props} />;
}
