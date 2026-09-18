import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import QuickHighlights from '../components/QuickHighlights';
import About from '../components/About';
import RoomCategories from '../components/RoomCategories';
import Amenities from '../components/Amenities';
import MealPlan from '../components/MealPlan';
import Gallery from '../components/Gallery';
import CostEstimator from '../components/CostEstimator';
import Location from '../components/Location';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FloatingCallButton from '../components/FloatingCallButton';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#FAF7F4] text-[#1E1B18] overflow-x-hidden">
      {/* Fixed Navigation Header */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main>
        <Hero />
        <QuickHighlights />
        <About />
        <RoomCategories />
        <Amenities />
        <MealPlan />
        <Gallery />
        <CostEstimator />
        <Location />
        <FAQ />
        <Contact />
      </main>

      {/* Persistent Floating Call & WhatsApp Action Buttons */}
      <FloatingCallButton />

      {/* Bespoke Agency Footer with Required Attribution */}
      <Footer />
    </div>
  );
};

export default Home;

