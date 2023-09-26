import AboutMe from './components/about-me'
import Photo from './components/photo'
import Intro from './components/intro'
import Skills from './components/skills'
import MyExperience from './components/my-experience'
import ContactMe from './components/contact-me'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-[10rem] pl-36 pr-36 ">

      <Photo/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <MyExperience/>
      <ContactMe/>
      <Footer/>


    </main>
  )
}
