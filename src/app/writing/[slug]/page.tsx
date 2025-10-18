import { getWritingPostBySlug, getWritingPosts } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface WritingPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

interface WritingPost {
  slug: {
    current: string;
  };
}

export async function generateStaticParams() {
  const posts = await getWritingPosts();

  return posts.map((post: WritingPost) => ({
    slug: post.slug.current,
  }));
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ""}
          width={1000}
          height={1000}
          className="w-full h-auto"
        />
      );
    },
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="font-serif italic text-[32px] text-white mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-white font-semibold text-xl mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-white font-semibold text-lg mb-3">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-white font-semibold text-base mb-3">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote
        className="border-l-4 border-gray-600 pl-4 italic text-gray-300 text-lg my-6"
        style={{ lineHeight: "1.75rem" }}
      >
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => (
      <p
        className="text-gray-300 text-lg mb-4"
        style={{ lineHeight: "1.75rem" }}
      >
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul
        className="space-y-4 list-disc pl-6"
        style={{ lineHeight: "1.75rem" }}
      >
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol
        className="space-y-4 list-decimal pl-6"
        style={{ lineHeight: "1.75rem" }}
      >
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-gray-300 text-lg">{children}</li>
    ),
    number: ({ children }: any) => (
      <li className="text-gray-300 text-lg">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <span className="text-white font-semibold">{children}</span>
    ),
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-gray-400 hover:text-white underline underline-offset-4 decoration-dotted decoration-gray-600 hover:decoration-white transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
};

export default async function WritingPostPage({
  params,
}: WritingPostPageProps) {
  const { slug } = await params;
  const post = await getWritingPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen relative flex justify-center px-8 md:px-0">
      <div className="p-8 md:p-[6%] max-w-full md:max-w-4xl w-full md:w-[60vw]">
        {/* Back Navigation */}
        <Link
          href="/writing"
          className="text-gray-400 hover:text-white text-sm transition-colors mb-16 inline-block border-b border-dotted border-gray-600 pb-1"
        >
          ← back to writing
        </Link>

        {/* Title and Date */}
        <div className="mb-12">
          <h1 className="font-serif italic text-[32px] text-white mb-4">
            {post.title}
          </h1>
          <p className="text-gray-500 text-sm">{formatDate(post.date)}</p>
        </div>

        {/* Featured Image */}
        {post.featuredImage && (
          <div className="mb-8">
            <Image
              src={urlFor(post.featuredImage).url()}
              alt={post.featuredImage.alt || post.title}
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <PortableText
            value={post.content}
            components={portableTextComponents}
          />
        </div>
      </div>
    </div>
  );
}
