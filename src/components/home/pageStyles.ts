// Shared page styling constants for consistent formatting across home, curations, and writing pages

export const pageContentStyle = {
  fontFamily: "'EB Garamond', serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "1.25",
  color: "var(--color-text-muted)",
} as const;

/** Date line under note/article titles */
export const pageSubtitleClass = "mt-1 text-[15px] text-white/75" as const;

/** Caption typography — shared with projects hover previews */
export const pageCaptionTypographyClass =
  "text-sm leading-tight text-[var(--color-text-body)]" as const;

/** Caption typography for in-note image captions */
export const noteCaptionTypographyClass =
  "text-sm leading-tight text-[var(--color-text-subheading)]" as const;

/** Caption under project preview media */
export const pageCaptionClass =
  `mt-3 ${pageCaptionTypographyClass}` as const;

/** In-note media */
export const noteFigureClass = "note-figure mt-3 block w-fit max-w-[280px]" as const;
export const noteImageClass = "block h-auto w-full" as const;
export const noteCaptionClass =
  `note-caption mt-1 text-left ${noteCaptionTypographyClass}` as const;

export const pageLayoutClasses = {
  screenSpace: "h-screen overflow-hidden overscroll-none flex flex-col",
  container: "min-h-screen flex flex-col",
  screenPadding: "px-4 sm:px-6 lg:px-[16vw] pt-[12vh] lg:pt-[3vh] pb-4 lg:pb-0 flex-1 overflow-hidden",
  contentWrapper: "flex-1 flex justify-center py-[8vh]",
  innerWrapper: "flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center py-4 lg:py-[14vh] w-full h-full",
  navWidth: "hidden h-full lg:block lg:w-[100px] lg:min-w-[100px] lg:max-w-[100px] lg:shrink-0 lg:self-start",
  divider: "hidden lg:block w-px bg-[rgba(255,255,255,0.15)] self-stretch",
  mainContent: "h-full min-h-0 flex-1 min-w-0",
  contentContainer: "flex-1 flex flex-col gap-3 w-full overflow-y-auto overscroll-none",
} as const;