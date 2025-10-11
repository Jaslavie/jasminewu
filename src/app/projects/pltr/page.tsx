import ProjectHeader from "@/components/work/ProjectHeader";
import ProjectImage from "@/components/work/ProjectImage";

export default function PLTRProject() {
  const headerData = {
    category: "Palantir Technologies",
    title:
      "Analysis framework to reveal hidden dependencies between intelligence nodes",
    description:
      "Designed V1 of analysis workflow for building and enriching relationships between intelligence data. Simulates how a disruption to a single node can cascade through the network and degrade the entire system — often orders of magnitude larger than local failures.",
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
