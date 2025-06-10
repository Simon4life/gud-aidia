import Services from "./components/Services";
import Hero from "./components/Hero";
import About from "./components/about";
import CaseStudyScroller from "./components/Our-works";
import Campaign from "./components/Campaign";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <Hero header="Innovation. Growth. A Gʊd AI'diə." subheader="Empowering businesses and athletes through strategy and literacy." links={true}/>

      {/* About Section */}
      <About/>

      {/* Services Section */}
      <Services/>

      {/* Case Studies */}
      <CaseStudyScroller/>

      {/* Campaign Banner */}
      <Campaign/>

    </main>

  );
}
