export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-background text-gray-400 text-xs border-t border-gray-800 z-20">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Left side - Currently info */}
        <div className="flex items-center space-x-2">
          <span>currently</span>
          <span>•</span>
          <span>listening to</span>
          <a
            href="https://open.spotify.com/track/4uLU6hMCjMI75M1A2tKUQC"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            nuits d'été
          </a>
          <span>•</span>
          <span>watching</span>
          <a
            href="https://www.hbo.com/the-last-of-us"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white transition-colors"
          >
            the last of us
          </a>
          <span>•</span>
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

        {/* Right side - Copyright */}
        <div>
          <span>© 2025 made by jaslavie</span>
        </div>
      </div>
    </footer>
  );
}
