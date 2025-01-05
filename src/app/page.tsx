import Header from "./sections/Header/page";
import Hero from "./sections/Hero/page";
import HeroImage from "./sections/HeroImage/page";

export default function Home() {
  return (
    <div className="grid grid-rows-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <HeroImage />
    </div>
  );
}
