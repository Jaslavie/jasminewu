export default function Footer() {
  return (
    <footer className="relative bg-background text-gray-400 text-[16px] border-t border-gray-800 z-20 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 space-y-3 md:space-y-0">
        {/* Left side - Currently info */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-start space-y-1 md:space-y-0 md:space-x-2 text-left">
          {/* <span className="md:inline">currently</span> */}

          {/* Mobile: Column layout, Desktop: Inline */}
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
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

            {/* <div className="flex items-center space-x-1">
              <span className="hidden md:inline">•</span>
              <span>watching</span>
              <a
                href="https://www.hbo.com/the-last-of-us"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                The Last of Us
              </a>
            </div> */}
          </div>
        </div>

        {/* Right side - Copyright - hidden on mobile */}
        <div className="hidden md:block text-right">
          <span>© 2025 made by jasmine</span>
        </div>
      </div>
    </footer>
  );
}
