/* eslint-disable */
import { useMediaQuery } from "@darkroom.engineering/hamo";
import cn from "clsx";
import { useStore } from "@/lib/store";
import { CSSProperties, useEffect, useState } from "react";

export const Intro = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const [isLoaded, setIsLoaded] = useState(false);
  const [scroll, setScroll] = useState(false);
  // const introOut = useStore(({ introOut }) => introOut);
  const setIntroOut = useStore(({ setIntroOut }) => setIntroOut);
  const lenis = useStore(({ lenis }) => lenis);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (isMobile) {
      lenis?.start();
      document.documentElement.classList.toggle("intro", false);
      return;
    }

    if (!scroll) {
      document.documentElement.classList.toggle("intro", true);
    }

    if (!lenis) return;
    if (scroll) {
      lenis.start();
      document.documentElement.classList.toggle("intro", false);
    } else {
      setTimeout(() => {
        lenis.stop();
      }, 0);

      document.documentElement.classList.toggle("intro", true);
    }
  }, [scroll, lenis, isMobile]);

  return (
    <div
      className={cn(
        "h-screen w-full bg-accent fixed top-0 left-0 z-[1000] overflow-hidden ",
        isLoaded &&
        "transform -translate-y-full transition-transform duration-1500 ease-out-expo delay-1500"
      )}
      onTransitionEnd={(e) => {
        (e.target as any).classList.forEach((value: any) => {
          if (value.includes("translate")) {
            setScroll(true);
          }
          if (value.includes("opacity")) {
            setIntroOut(true);
          }
        });
      }}
    >
      <div
        className={cn(
          "font-amsterdamFourSlant sm:text-5xl text-3xl text-accent-foreground transition p-8 h-full flex justify-center gap-10 items-center",
          isLoaded &&
          "transform translate-y-[100vh] transition duration-1500 ease-out-expo delay-1500"
        )}
      >
        <Solomon isLoaded={isLoaded} />
        <And isLoaded={isLoaded} />
        <Audree isLoaded={isLoaded} />
      </div>
    </div>
  );
};

export const Title = ({ className }: { className: string }) => {
  // const introOut = useStore(({ introOut }) => introOut);

  return (
    <div
      className={cn(
        "font-amsterdamFourSlant h-full w-full sm:text-4xl text-2xl md:text-5xl text-accent flex justify-center gap-10 items-center",
        className
      )}
    >
      <Solomon isLoaded />
      <And isLoaded />
      {/* edit audree if it looks weird*/}
      <Audree isLoaded />
    </div>
  );
};

const Solomon = ({
  isLoaded,
  className,
}: {
  isLoaded: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "opacity-0 blur-lg transition-all duration-1000",
        isLoaded && "opacity-100 blur-none",
        className
      )}
    >
      <h1
        className={cn(
          "transform -translate-x-[100%] -translate-y-[125%]",
          isLoaded &&
          "transition-transform duration-1500 ease-out-expo delay-75 translate-x-[0%]"
        )}
        style={{ "--index": 1 } as CSSProperties}
      >
        Solomon
      </h1>
    </div>
  );
};

const And = ({
  isLoaded,
  className,
}: {
  isLoaded: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "opacity-0 blur-lg transition-all duration-1000",
        isLoaded && "opacity-100 blur-none",
        className
      )}
    >
      <h1
        className={cn(
          "text-xl transform transition-transform",
          isLoaded &&
          "transition-transform duration-1500 ease-out-expo delay-150 translate-y-0"
        )}
        style={{ "--index": 2 } as CSSProperties}
      >
        &
      </h1>
    </div>
  );
};

const Audree = ({
  isLoaded,
  className,
}: {
  isLoaded: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "opacity-0 blur-lg transition-all duration-1000",
        isLoaded && "opacity-100 blur-none",
        className
      )}
    >
      <h1
        className={cn(
          "transition-transform transform translate-y-[125%] translate-x-full",
          isLoaded &&
          "transition-transform duration-1500 ease-out-expo delay-75 !translate-x-0"
        )}
        style={{ "--index": 3 } as CSSProperties}
      >
        Audree
      </h1>
    </div>
  );
};
