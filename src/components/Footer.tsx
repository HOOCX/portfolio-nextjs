export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="py-8 bg-white border-t border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center justify-between sm:flex-row">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 sm:mb-0">&copy; {currentYear} Hans Otano. All rights reserved.</p>
                <div className="flex items-center gap-4">
                    <a href="https://github.com/HOOCX" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                    GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/hansotano/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">
                    LinkedIn
                    </a>
                    <a href="mailto:hansoliver23@gmail.com" className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-100 rounded-full hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-200 dark:hover:bg-blue-800/50 transition-colors">
                    hansoliver23@gmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
}