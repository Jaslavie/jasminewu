export default function Footer() {
  return (
    <footer className="relative md:fixed bottom-0 left-0 right-0 bg-background text-gray-400 text-xs border-t border-gray-800 z-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-6 py-4 space-y-3 md:space-y-0">
        {/* Left side - Currently info */}
        <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-start space-y-1 md:space-y-0 md:space-x-2 text-left">
          <span className="md:inline">currently</span>

          {/* Mobile: Column layout, Desktop: Inline */}
          <div className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-2">
            <div className="flex items-center space-x-1">
              <span className="hidden md:inline">•</span>
              <span>listening to</span>
              <a
                href="https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                nuits d'été
              </a>
            </div>

            <div className="flex items-center space-x-1">
              <span className="hidden md:inline">•</span>
              <span>watching</span>
              <a
                href="https://www.hbo.com/the-last-of-us"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                the last of us
              </a>
            </div>

            <div className="flex items-center space-x-1">
              <span className="hidden md:inline">•</span>
              <span>reading</span>
              <a
                href="https://www.goodreads.com/book/show/767171.The_Rise_and_Fall_of_the_Third_Reich"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white transition-colors"
              >
                rise and fall of the third reich
              </a>
            </div>
          </div>
        </div>

        {/* Right side - Copyright */}
        <div className="text-left md:text-right">
          <span>© 2025 made by jaslavie</span>
        </div>
      </div>
    </footer>
  );
}
