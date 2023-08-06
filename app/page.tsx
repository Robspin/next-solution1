import Landing from "@/components/sections/landing"
import Description from "@/components/sections/description"
import Questions from "@/components/sections/questions"
import Contact from "@/components/sections/contact"
import PageContainer from "@/components/layout/page-container"
import BackToTopButton from "@/components/back-to-top-button";
import fetch from 'nodemailer/lib/fetch'

const updatePageViews = async () => {
    await fetch(`${process.env.VIEWS_API_URL}?key=solution1`)
}

export default async function Home() {
    await updatePageViews()

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
