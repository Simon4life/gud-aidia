import Services from "./components/Services";
import Case from "./components/Case";
import Hero from "./components/Hero";
import About from "./components/about";
// import Contact from "./components/Contact";
import Donate from "./components/Donate";

export default function Home() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <Hero/>

      {/* About Section */}
      <About/>

      {/* Services Section */}
      <Services/>

      {/* Case Studies */}
      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {['Cybersecurity Proposal', 'Soccer Academy', 'Gift Sales Platform'].map((title, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition bg-white">
              <div className="h-48 bg-yellow-200"></div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Campaign Banner */}
      <section className="bg-yellow-100 py-16 text-center px-6">
        <h2 className="text-3xl font-bold mb-4">The Gʊd Aɪˈdiə Campaign</h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-6">
          Blending literacy and athletics to empower youth and create opportunities through reading and fundraising.
        </p>
        <div className="space-x-4">
          <a href="/campaign" className="bg-yellow-400 px-6 py-2 rounded-full text-black hover:bg-yellow-500 transition">Learn More</a>
          <a href="/donate" className="border border-yellow-500 px-6 py-2 rounded-full hover:bg-yellow-500 hover:text-white transition">Donate</a>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-white py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>
        <form className="max-w-xl mx-auto grid gap-4">
          <input type="text" placeholder="Your Name" className="border rounded-xl p-3" />
          <input type="email" placeholder="Your Email" className="border rounded-xl p-3" />
          <textarea placeholder="Your Message" rows={4} className="border rounded-xl p-3" />
          <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 transition text-black py-2 px-6 rounded-xl">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-8 px-4">
        <p>© 2025 The Gʊd Aɪˈdiə Company. All rights reserved.</p>
        <div className="mt-4 space-x-4 text-yellow-400">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="https://instagram.com">Instagram</a>
        </div>
      </footer>
    </main>

  );
}
