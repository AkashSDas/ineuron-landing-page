import { ArrowRight2 } from "@components/Icons/ArrowRight2";

export const Hero = () => (
  <section className="flex flex-col gap-[2rem] justify-center items-center">
    <h1 className="text-center text-[90px] leading-[98px] text-dark-violet">
      Premium quality and <br /> affordable price
    </h1>

    <p className="text-grey text-[23px] text-center w-[45%]">
      Learn modern technologies at Premium Quality from Industry Experts at
      Affordable Price
    </p>

    <button className="h-[50px] flex items-center justify-center gap-[12px] text-white bg-violet px-[2rem] rounded-full hover:brightness-90">
      Get Started <ArrowRight2 className="stroke-white" />
    </button>
  </section>
);
