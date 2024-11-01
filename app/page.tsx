import Services from "./components/Services";
import Case from "./components/Case";
import Hero from "./components/Hero";
// import Contact from "./components/Contact";
import Donate from "./components/Donate";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Services/>
      <Case/>
      <Donate/>
    </main>
  );
}
