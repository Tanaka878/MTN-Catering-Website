import Header from "./sections/Header/page";
import Hero from "./sections/Hero/page";
import Mission from "./sections/Mission/page";


export default function Home() {
  return (
    <div className="grid grid-rows-auto  min-h-screen p-5 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Hero />
      <Mission/>
     
    </div>
  );
}
