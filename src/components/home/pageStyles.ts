// Shared page styling constants for consistent formatting across home, curations, and writing pages

export const pageContentStyle = {
  fontFamily: "'EB Garamond', serif",
  fontWeight: 400,
  fontSize: "16px",
  lineHeight: "1.25",
  color: "#9A9A9A",
} as const;

export const pageLayoutClasses = {
  screenSpace: "min-h-screen md:h-screen overflow-auto md:overflow-hidden flex flex-col",
  container: "min-h-screen flex flex-col",
  screenPadding: "px-6 md:px-[16vw] pt-[12vh] md:pt-[3vh] pb-8 md:pb-0 h-full",
  contentWrapper: "flex-1 flex justify-center py-[8vh]",
  innerWrapper: "flex flex-col md:flex-row gap-8 md:gap-6 items-start md:items-center md:h-[800px] py-8 md:py-[12vh] w-full",
  navWidth: "hidden md:block md:w-[100px] md:h-full",
  divider: "hidden md:block w-px bg-[rgba(255,255,255,0.15)] self-stretch",
  contentContainer: "flex-1 flex flex-col gap-3 overflow-y-auto w-full h-full flex-start",
} as const;