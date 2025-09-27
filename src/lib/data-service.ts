import {
  getProjects,
  getFeaturedProjects as getSanityFeaturedProjects,
} from "../sanity/lib/queries";
import { workData, WorkProject } from "../data/workData";
import { experiences, Experience } from "../data/experiences";

// Convert Sanity project to work project for listing
function convertSanityProjectToWorkProject(sanityProject: any): WorkProject {
  return {
    number: String(sanityProject.order).padStart(2, "0"),
    title: sanityProject.title,
    description: sanityProject.description,
    link: `/projects/${sanityProject.slug.current}`,
  };
}

export async function getWorkProjects(): Promise<WorkProject[]> {
  try {
    // Try to fetch from Sanity first
    const sanityProjects = await getProjects();
    return sanityProjects.map(convertSanityProjectToWorkProject);
  } catch (error) {
    console.warn(
      "Failed to fetch projects from Sanity, using fallback data:",
      error
    );
    // Fall back to static data
    return workData;
  }
}

export async function getWorkExperiences(): Promise<Experience[]> {
  return experiences;
}

export async function getFeaturedProjects(): Promise<WorkProject[]> {
  try {
    const featuredProjects = await getSanityFeaturedProjects();
    return featuredProjects.map(convertSanityProjectToWorkProject);
  } catch (error) {
    console.warn(
      "Failed to fetch featured projects from Sanity, using fallback data:",
      error
    );
    // Fall back to static data
    return workData.filter((_, index) => index < 3); // First 3 as featured
  }
}
