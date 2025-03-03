import Header from "./sections/Header/page";
import Hero from "./sections/Hero/page";
import Mission from "./sections/Mission/page";
import LogoTicker from "./sections/LogoTicker/page";
import Testimonials from "./sections/Testimonials/page";
import Footer from "./sections/Footer/page";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header section - full width, minimal padding */}
      <div className="px-4 sm:px-6 lg:px-8">
        <Header />
      </div>

      {/* Content container with responsive spacing */}
      <div className="mx-auto max-w-7xl"> {/* Max width container for content */}
        <div className="flex flex-col space-y-12 sm:space-y-16 lg:space-y-20"> {/* Vertical spacing between sections */}
          
          {/* Hero section with different padding for better mobile experience */}
          <section className="px-4 pt-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
            <Hero />
          </section>

          {/* LogoTicker section - full width */}
          <section className="w-full">
            <LogoTicker />
          </section>

          {/* Mission section with consistent padding */}
          <section className="px-4 sm:px-6 lg:px-8">
            <Mission />
          </section>

          {/* Testimonials section with proper spacing */}
          <section className="px-4 sm:px-6 lg:px-8">
            <Testimonials />
          </section>
          {/**Footer section */}
          <section>
            <Footer/>
          </section>
        </div>
      </div>
    </main>
  );
}