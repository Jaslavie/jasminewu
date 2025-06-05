import HomeContent from "@/components/home/HomeContent";

export default function Home() {
  return (
    <div className="ml-40 min-h-screen relative">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-[-80px] w-full h-full object-cover -z-10"
      >
        <source src="/animation_hero.mp4" type="video/mp4" />
      </video>

      <HomeContent />
    </div>
  );
}
