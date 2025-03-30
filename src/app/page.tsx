import Image from "next/image";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Organizer } from "./components/organize";
import { Partiners } from "./components/partners";
import { Testimonials } from "./components/testimonials";
import { Pricing } from "./components/pricing";
import { ContactUs } from "./components/contact";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <Features />
      <Organizer />
      <Partiners />
      <Testimonials />
      <Pricing />
      <ContactUs />
      <Footer />
    </>
  )
}
