import { PageSEO } from "@/common/PageSEO";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/Home/HeroSection"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <PageSEO
        ogTitle={"Cape | Empowering private transactions"}
        ogDescription={
          "CAPE is a smart contract application developed by Espresso Systems."
        }
      />
      <HeroSection />
    </>
  );
}
