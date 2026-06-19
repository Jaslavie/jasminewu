"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import NavHint from "@/components/ui/NavHint";

interface ListHoverContextType {
  focusedIndex: number | null;
  setFocusedIndex: (index: number | null) => void;
  totalItems: number;
  items: { href: string }[];
}

const ListHoverContext = createContext<ListHoverContextType>({
  focusedIndex: null,
  setFocusedIndex: () => {},
  totalItems: 0,
  items: [],
});

export function useListHover() {
  return useContext(ListHoverContext);
}

export function ListNavHint({
  alsoObserving = false,
}: {
  alsoObserving?: boolean;
}) {
  const { focusedIndex } = useListHover();
  return <NavHint isObserving={alsoObserving || focusedIndex !== null} />;
}

interface ListBoxProps {
  children: ReactNode;
  className?: string;
  items: { href: string }[];
  selectionMode?: boolean;
  selectedIndex?: number | null;
  onSelect?: (index: number) => void;
  onNavigate?: (index: number) => void;
  onEscape?: () => void;
}

export function ListBox({
  children,
  className = "",
  items,
  selectionMode = false,
  selectedIndex = null,
  onSelect,
  onNavigate,
  onEscape,
}: ListBoxProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const router = useRouter();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        const next =
          focusedIndex === null
            ? 0
            : focusedIndex >= items.length - 1
              ? 0
              : focusedIndex + 1;
        setFocusedIndex(next);
        if (selectionMode && onNavigate) onNavigate(next);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        const next =
          focusedIndex === null
            ? items.length - 1
            : focusedIndex <= 0
              ? items.length - 1
              : focusedIndex - 1;
        setFocusedIndex(next);
        if (selectionMode && onNavigate) onNavigate(next);
      } else if (e.key === "Enter" && focusedIndex !== null) {
        e.preventDefault();
        if (selectionMode && onSelect) {
          onSelect(focusedIndex);
          return;
        }
        const item = items[focusedIndex];
        if (item) {
          if (item.href.startsWith("http")) {
            window.open(item.href, "_blank");
          } else {
            router.push(item.href);
          }
        }
      } else if (e.key === "Escape") {
        setFocusedIndex(null);
        onEscape?.();
      }
    },
    [
      focusedIndex,
      items,
      onEscape,
      onNavigate,
      onSelect,
      router,
      selectionMode,
    ],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <ListHoverContext.Provider
      value={{ focusedIndex, setFocusedIndex, totalItems: items.length, items }}
    >
      <div className={className}>{children}</div>
    </ListHoverContext.Provider>
  );
}

interface ListItemBoxProps {
  href: string;
  title: string;
  subtitle: string;
  index: number;
}

export function ListItemBox({
  href,
  title,
  subtitle,
  index,
}: ListItemBoxProps) {
  const { focusedIndex, setFocusedIndex } = useListHover();
  const isExternal = href.startsWith("http") || href.startsWith("https");

  const isFocused = focusedIndex === index;
  const isOtherFocused = focusedIndex !== null && focusedIndex !== index;

  const content = (
    <div
      className="flex flex-col gap-[1px]"
      style={{ fontFamily: "'EB Garamond', serif" }}
    >
      <span className="text-[16px] text-white">{title}</span>
      <span
        className="text-sm leading-tight"
        style={{
          color: isFocused
            ? "var(--color-text-body)"
            : "var(--color-text-subheading)",
        }}
      >
        {subtitle}
      </span>
    </div>
  );

  const linkElement = isExternal ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline hover:no-underline"
    >
      {content}
    </a>
  ) : (
    <Link href={href} className="block no-underline hover:no-underline">
      {content}
    </Link>
  );

  return (
    <div
      className="px-3 py-1 transition-all duration-200 cursor-pointer"
      style={{
        border: isFocused
          ? "1px solid rgba(255, 255, 255, 0.6)"
          : "1px solid transparent",
        opacity: isOtherFocused ? 0.6 : 1,
      }}
      onMouseEnter={() => setFocusedIndex(index)}
      onMouseLeave={() => setFocusedIndex(null)}
    >
      {linkElement}
    </div>
  );
}
