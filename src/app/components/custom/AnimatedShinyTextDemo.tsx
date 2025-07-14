'use client';

import { cn } from "@/app/lib/utils";
import { AnimatedShinyText } from "../primitives/magic-ui/AnimatedShinyText";
import { DiamondSvg } from "@/app/assets/svgs";

export function AnimatedShinyTextDemo() {
  return (
    <div className="z-10 flex mb-[28px] items-center justify-center">
      <div
        className={cn(
          "group text-xs text-white p-[10px] rounded-[7px] transition-all ease-in hover:cursor-pointer"
        )}
        style={{
          border: '1px solid transparent',
          borderImageSlice: 1,
          borderImageSource: `linear-gradient(
            to right,
            #EC00EC80 0%,
            #EC00EC80 40%,
            #0000FF80 60%,
            #0000FF80 100%
          )`,
        }}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 text-black transition ease-out hover:duration-300">
          <span className="flex items-center gap-2">
            <DiamondSvg />
            Welcome to the beta version!
          </span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
