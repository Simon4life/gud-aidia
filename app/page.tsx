import Services from "./components/Services";
import Case from "./components/Case";
import Hero from "./components/Hero";
import About from "./components/about";
// import Contact from "./components/Contact";
import Donate from "./components/Donate";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <About/>
      <Case/>
      <Donate/>
    </main>
  );
}
