import Landing from "@/components/sections/landing"
import Description from "@/components/sections/description"
import Questions from "@/components/sections/questions"
import Contact from "@/components/sections/contact"
import PageContainer from "@/components/layout/page-container"
import BackToTopButton from "@/components/back-to-top-button";

export default function Home() {
  return (
    <PageContainer background>
        <Landing />
        <div className="w-full h-[30vh]" />
        <Description />
        <div className="w-full h-[30vh]" />
        <Questions />
        <Contact />
        <BackToTopButton />
    </PageContainer>
  )
}
