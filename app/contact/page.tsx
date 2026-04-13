import ContactPage from "@/components/pages/contact/ContactPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your project. We'll tell you honestly if we're the right team. Based in Dhaka, Bangladesh — working worldwide.",
  openGraph: {
    title: "Contact | Zentura",
    description: "Tell us about your project.",
    url: "https://zentura.studio/contact",
  },
};

export default function Page() {
  return <ContactPage />;
}
