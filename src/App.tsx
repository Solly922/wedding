import { useStore } from "@/lib/store";
import { Intro, Title } from "@/components/intro";
import { useEffect } from "react";
import { useLenis } from "lenis/react";
import HeroImages from "./components/hero-images";
import CeremonySection from "./components/ceremony-section";

function App() {
  const introOut = useStore(({ introOut }) => introOut);
  const lenis = useLenis();
  lenis?.stop();

  useEffect(() => {
    if (!lenis) return;
    if (introOut) {
      lenis.start();
    } else {
      lenis.stop();
    }
  }, [introOut]);

  return (
    <>
      <div className="flex flex-col min-h-screen text-foreground">
        <Intro />
        {/*HERO*/}
        <section className="flex relative flex-col justify-center mb-8 h-screen sm:mb-40 space-around">
          <Title className="fixed text-secondary -z-10" />

          <HeroImages introOut={introOut} />

          <div className="fixed right-10 bottom-20 text-right sm:right-8 -z-[50]">
            <h2 className="text-2xl sm:text-3xl">Save the date</h2>
            <h3 className="text-xl sm:text-2xl">04.10.2025</h3>
          </div>
        </section>
        <main className="flex flex-col items-center py-10 w-full grow bg-background">
          <CeremonySection />
        </main>
      </div>
    </>
  );
}

export default App;
