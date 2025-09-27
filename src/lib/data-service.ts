import { workData, WorkProject } from "../data/workData";
import { experiences, Experience } from "../data/experiences";

export async function getWorkProjects(): Promise<WorkProject[]> {
  return workData;
}

export async function getWorkExperiences(): Promise<Experience[]> {
  return experiences;
}

export async function getFeaturedProjects(): Promise<WorkProject[]> {
  return workData.filter((_, index) => index < 3); // First 3 as featured
}
