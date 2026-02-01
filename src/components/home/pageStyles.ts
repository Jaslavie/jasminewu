// Shared page styling constants for consistent formatting across home, curations, and writing pages

export const pageContentStyle = {
  fontFamily: "'EB Garamond', serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "1.25",
  color: "#9A9A9A",
} as const;

export const pageLayoutClasses = {
  screenSpace: "h-screen overflow-hidden flex flex-col",
  container: "min-h-screen flex flex-col",
  screenPadding: "px-4 sm:px-6 lg:px-[16vw] pt-[12vh] lg:pt-[3vh] pb-4 lg:pb-0 flex-1 overflow-hidden",
  contentWrapper: "flex-1 flex justify-center py-[8vh]",
  innerWrapper: "flex flex-col lg:flex-row gap-4 lg:gap-6 items-start lg:items-center py-4 lg:py-[14vh] w-full h-full",
  navWidth: "hidden lg:block lg:w-[100px] h-full lg:self-start",
  divider: "hidden lg:block w-px bg-[rgba(255,255,255,0.15)] self-stretch",
  contentContainer: "flex-1 flex flex-col gap-3 w-full overflow-y-auto",
} as const;