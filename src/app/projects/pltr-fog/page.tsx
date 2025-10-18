import ProjectHeader from "@/components/work/ProjectHeader";
import ProjectImage from "@/components/work/ProjectImage";

export default function Project() {
  const headerData = {
    category: "Palantir Technologies",
    title:
      "Simulating operational uncertainty in wargaming simulations.",
    description:
      "Designed V1 proposal for knowledge sharing system to expose knowledge gaps per team. Partnered with COCOM partners to design the first knowledge configuration system to visualize how information evolves during a conflict scneario and how teams respond.\n\n",
    logo: "./pltr/pltr.png",
    metadata: {
      role: ["Product Design Intern"],
      duration: "3 months (2025)",
      team: ["1 Designer", "3 Engineers", "4 BD Reps"],
      results: [
        "Deployed to active combat",
        "Used by 2,000 government officials",
      ],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <ProjectHeader {...headerData} />

      {/* Main Project Thumbnail */}
      {/* <ProjectImage
        src="/palantir-thumbnail.jpg" 
        alt="Palantir Technologies Project"
        caption=""
      /> */}
    </div>
  );
}
