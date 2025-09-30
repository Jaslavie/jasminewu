import { getProjectBySlug, getProjects } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import ProjectHeader from "@/components/work/ProjectHeader";
import ProjectImage from "@/components/work/ProjectImage";
import Divider from "@/components/global/Divider";
import { notFound } from "next/navigation";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface Project {
  slug: {
    current: string;
  };
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project: Project) => ({
    slug: project.slug.current,
  }));
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <ProjectImage
          src={urlFor(value).url()}
          alt={value.alt || ""}
          caption={value.caption || ""}
          maxHeight={value.maxHeight}
        />
      );
    },
    video: ({ value }: any) => {
      return (
        <ProjectImage
          src={urlFor(value).url()}
          alt={value.alt || ""}
          caption={value.caption || ""}
          maxHeight={value.maxHeight}
        />
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-white italic text-[42px] mt-[2vh]">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-white italic text-[42px] mt-[2vh]">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-white italic text-[42px] mt-[2vh]">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-white italic text-[42px] mt-[2vh]">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-white">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => <p>{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mt-2 space-y-1">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-2 space-y-1">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li>
        <span> {children}</span>
      </li>
    ),
    number: ({ children }: any) => (
      <li>
        <span> {children}</span>
      </li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <span className="text-white font-semibold">{children}</span>
    ),
    em: ({ children }: any) => <em>{children}</em>,
  },
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const headerData = {
    category: project.category,
    title: project.title,
    description: project.description,
    logo: project.logo?.asset?.url,
    metadata: project.metadata,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <ProjectHeader {...headerData} />

      {/* Project Thumbnail */}
      {project.thumbnailImage && (
        <ProjectImage
          src={urlFor(project.thumbnailImage).url()}
          alt={`${project.title} Thumbnail`}
          caption=""
        />
      )}

      {/* Rich Content */}
      <div className="px-8vw">
        <PortableText
          value={project.content}
          components={portableTextComponents}
        />
      </div>
    </div>
  );
}
