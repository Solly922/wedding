import Image1 from "@/assets/images/1.jpg";
import Image2 from "@/assets/images/3.jpg";
import Image3 from "@/assets/images/4.jpg";
import { cn } from "@/lib/utils";

interface Props {
  introOut: boolean;
}

function HeroImages({ introOut }: Props) {
  return (
    <div className="flex fixed w-full h-full -z-50">
      <div className="absolute md:left-40 sm:bottom-1/4 sm:translate-y-1/4 -translate-y-[20%] bottom-[10%] left-8 h-[300px] sm:h-[400px] md:h-[500px] sm:left-10 overflow-hidden">
        <img
          src={Image2}
          alt="image-1"
          loading="eager"
          className={cn(
            "object-cover w-full h-full rounded-lg transform transition-transform duration-1500 ease-out-expo translate-y-full",
            introOut && "translate-y-0 delay-1000"
          )}
        />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] sm:h-[500px] md:h-[600px]">
        <img
          src={Image1}
          alt="image-1"
          loading="eager"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>

      <div className="-z-10 absolute md:right-40 sm:top-1/4 sm:-translate-y-1/4 -translate-y-[20%] top-[10%] right-8 h-[300px] sm:h-[400px] md:h-[500px] sm:right-10 overflow-hidden">
        <img
          src={Image3}
          alt="image-1"
          loading="eager"
          className={cn(
            "object-cover w-full h-full rounded-lg transform transition-transform duration-2000 ease-out-expo -translate-y-full",
            introOut && "translate-y-0 delay-750"
          )}
        />
      </div>
    </div>
  );
}

export default HeroImages;
