import PrimaryButton from "@components/Button/PrimaryButton";
import { Hero } from "@components/Hero/Hero";
import { ArrowRight2 } from "@components/Icons/ArrowRight2";
import Navbar from "@components/Navbar/index";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="mt-[150px] flex flex-col gap-[150px]">
        <Hero />
      </main>
    </>
  );
}
