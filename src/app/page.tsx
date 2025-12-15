import { Hero } from "@/components/sections/Hero"
import { TechStackSection } from "@/components/sections/TechStackSection"
import { CoursesSection } from "@/components/sections/CoursesSection"
import { MissionSection } from "@/components/sections/MissionSection"
import { BookPreview } from "@/components/sections/BookPreview"
import { Testimonials } from "@/components/sections/Testimonials"
import { FAQSection } from "@/components/sections/FAQSection"
import { CallToAction } from "@/components/sections/CallToAction"

export default function Home() {
  return (
    <>
      <Hero />
      <TechStackSection />
      <CoursesSection />
      <MissionSection />
      <BookPreview />
      <Testimonials />
      <FAQSection />
      <CallToAction />
    </>
  )
}
