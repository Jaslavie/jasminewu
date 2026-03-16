export default function Footer() {
  return (
    <footer className="relative bg-background text-[var(--color-text-subheading)] text-[16px] border-t border-[var(--color-card-border)] z-20 mt-auto">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center px-6 py-4 space-y-3 lg:space-y-0">
        {/* Left side - Currently info */}
        <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:justify-start space-y-1 lg:space-y-0 lg:space-x-2 text-left">
          {/* Mobile: Column layout, Desktop: Inline */}
          <div className="flex flex-col lg:flex-row lg:items-center space-y-1 lg:space-y-0 lg:space-x-2">
            <div className="flex flex-wrap items-center gap-x-1">
              <span>listening to</span>
              <a
                href="https://open.spotify.com/album/2ANVost0y2y52ema1E9xAZ"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                Thriller, Album
              </a>
              <span>& reading</span>
              <a
                href="https://www.amazon.com/Heretics-Heroes-Renaissance-Artists-Reformation/dp/0385495587"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                Heretics and Heroes
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Copyright - hidden on mobile */}
        <div className="hidden lg:block text-right">
          <span>© 2026 made by jasmine</span>
        </div>
      </div>
    </footer>
  );
}
