"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import ActionButton from "@/components/ui/ActionButton";

type ProjectAction = {
  href: string;
  label: string;
  external?: boolean;
};

interface LightProjectPageProps {
  title: ReactNode;
  meta: ReactNode;
  imageSrc: string;
  imageAlt: string;
  actions?: ProjectAction[];
  children: ReactNode;
  backHref?: string;
  backLabel?: string;
}

export default function LightProjectPage({
  title,
  meta,
  imageSrc,
  imageAlt,
  actions = [],
  children,
  backHref = "/projects",
  backLabel = "Back",
}: LightProjectPageProps) {
  return (
    <main className="theme-light h-screen overflow-y-auto overscroll-none bg-[#f8f7f4] text-black">
      <div className="px-4 pt-4 sm:px-6 md:px-8">
        <ActionButton href={backHref} arrow="left">
          {backLabel}
        </ActionButton>
      </div>

      <div className="mx-auto flex w-full max-w-[560px] flex-col px-4 pb-24 pt-10 sm:px-6 md:px-0 md:pt-10">
        <div className="mb-10 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={1600}
            height={952}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <article className="w-full">
          <h1
            className="text-[30px] italic lowercase leading-none text-black md:text-[36px]"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            {title}
          </h1>
          <p
            className="mt-1 text-[15px] text-black/75"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            {meta}
          </p>

          {actions.length > 0 ? (
            <div className="mt-3 flex flex-wrap gap-1">
              {actions.map((action) => (
                <ActionButton
                  key={`${action.href}-${action.label}`}
                  href={action.href}
                  external={action.external}
                  arrow="right"
                >
                  {action.label}
                </ActionButton>
              ))}
            </div>
          ) : null}

          <div
            className="mt-12 space-y-5 text-[15px] leading-[1.55] text-black"
            style={{ fontFamily: "'EB Garamond', serif" }}
          >
            {children}
          </div>
        </article>
      </div>
    </main>
  );
}
