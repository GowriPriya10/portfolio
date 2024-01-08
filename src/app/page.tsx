import About from "@/components/about";
import Achievements from "@/components/achievements";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HireMe from "@/components/hireMe";
import LandingPage from "@/components/landingPage";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {

  return (
    <>
      <Header />
      <main>
        <HireMe />
        <LandingPage />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
      </main>
      <Footer />
    </>
  )
}
