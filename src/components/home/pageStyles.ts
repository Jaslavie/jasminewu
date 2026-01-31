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
  screenPadding: "px-[16vw] pt-[3vh] h-full",
  contentWrapper: "flex-1 flex justify-center py-[8vh]",
  innerWrapper: "flex flex-row gap-6 items-center h-[800px] py-[12vh] w-full",
  navWidth: "w-[100px] h-full",
  divider: "w-px bg-[rgba(255,255,255,0.15)] self-stretch",
  contentContainer: "flex-1 flex flex-col gap-3 overflow-y-auto w-full h-full flex-start",
} as const;