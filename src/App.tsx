import { useStore } from "@/lib/store";
import { Intro, Title } from "@/components/intro";
import { useEffect } from "react";
import { useLenis } from "lenis/react";

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
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Intro />
        <main className="grow">
          {/*HERO*/}
          <section className="flex relative flex-col justify-center mb-8 h-screen sm:mb-40 space-around">
            <Title className="text-foreground" />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
