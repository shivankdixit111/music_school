import Image from "next/image";
import HomePage from "@/components/HomePage"
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Quote from "@/components/Quote";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
           <HomePage/>
           <FeaturedCourses/>
           <WhyChooseUs/>
           <Quote/>
           <UpcomingWebinars/>
           <Instructors/>
           <Footer/>
      </div>
  );
}
