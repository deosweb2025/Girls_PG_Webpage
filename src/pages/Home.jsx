import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickHighlights from '../components/QuickHighlights';
import About from '../components/About';
import Facilities from '../components/Facilities';
import Gallery from '../components/Gallery';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-white text-[#1D1518] overflow-x-hidden">
      {/* Fixed Navigation Header with [Home, About, Facilities, Gallery, Contact] */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        {/* Home Section */}
        <Hero />
        <QuickHighlights />

        {/* About Section */}
        <About />

        {/* Facilities Section (Room Rates, Food & Dining, Amenities, Cost Estimator) */}
        <Facilities />

        {/* Gallery Section */}
        <Gallery />

        {/* Contact Section (Merged Location, Directions, Map, Inquiry & FAQ) */}
        <Contact />
      </main>

      {/* Persistent Floating Call & WhatsApp Action Buttons */}
      <FloatingCallButton />

      {/* Agency Footer with Mandatory Attribution */}
      <Footer />
    </div>
  );
};

export default Home;
