import AboutIntro from "@/components/about/AboutIntro";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import GoalsSection from "@/components/about/GoalsSection";

export const metadata = {
  title: "About | Kamruzzaman Siam",
  description:
    "Learn more about Kamruzzaman Siam — background in Computer Science and Technology, web development journey, and engineering approach.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col">
      <AboutIntro />
      <JourneyTimeline />
      <GoalsSection />
    </main>
  );
}
