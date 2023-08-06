import Landing from "@/components/sections/landing"
import Description from "@/components/sections/description"
import Questions from "@/components/sections/questions"
import Contact from "@/components/sections/contact"
import PageContainer from "@/components/layout/page-container"
import BackToTopButton from "@/components/back-to-top-button";

const updatePageViews = async () => {
    const res = await (await fetch(`${process.env.VIEWS_API_URL}?key=solution1`, { cache: 'no-cache' })).json()
    console.log(`${res} total visits`)
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
