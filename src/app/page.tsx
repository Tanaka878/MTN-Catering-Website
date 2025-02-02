import Header from "./sections/Header/page";
import Hero from "./sections/Hero/page";
import Mission from "./sections/Mission/page";
import LogoTicker from "./sections/LogoTicker/page";


export default function Home() {
  return (
    <div className="grid grid-rows-auto  min-h-screen p-5 pb-20 gap-3 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <LogoTicker/>
      
      <Mission/>
     
    </div>
  );
}
