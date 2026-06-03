const iconClass = "h-[14px] w-[14px]";

function ExpandIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
    </svg>
  );
}

function CollapseIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 4l-7 7M13 5v6h6M4 20l7-7M5 13h6v6" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      className={iconClass}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

const notePanelButtonClass =
  "flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center border border-[rgba(255,255,255,0.06)] bg-transparent p-0 text-[rgba(255,255,255,0.82)] transition-colors duration-200 hover:border-[rgba(255,255,255,0.18)] hover:text-[rgba(255,255,255,0.95)]";

interface NotePanelToolbarProps {
  isExpanded: boolean;
  onToggleExpand: () => void;
  onClose: () => void;
}

export default function NotePanelToolbar({
  isExpanded,
  onToggleExpand,
  onClose,
}: NotePanelToolbarProps) {
  return (
    <div className="pointer-events-auto flex">
      <button
        type="button"
        aria-label={isExpanded ? "Collapse note" : "Expand note"}
        onClick={onToggleExpand}
        className={notePanelButtonClass}
      >
        {isExpanded ? <CollapseIcon /> : <ExpandIcon />}
      </button>
      <button
        type="button"
        aria-label="Close note"
        onClick={onClose}
        className={notePanelButtonClass}
      >
        <CloseIcon />
      </button>
    </div>
  );
}
