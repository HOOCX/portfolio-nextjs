import Link from "next/link";

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-white dark:bg-gray-900">
            <div className="max-w-3xl">
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-7xl dark:text-white">Hans Otaño</h1>
                <h2 className="mt-6 text-2xl font-semibold text-blue-700 sm:text-3xl dark:text-blue-400">Full-Stack Web Developer</h2>
                <p className="mt-5 text-lg leading-8 text-gray-700 dark:text-gray-300">With over 10 years of experience designing and building responsive web applications. Specialized in robust architectures, performance optimization, and integrating modern technologies to deliver exceptional user experiences.</p>
                <div className="flex flex-col items-center justify-center gap-4 mt-10 sm:flex-row sm:gap-x-6">

                <Link href="https://github.com/HOOCX" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto rounded-md bg-gray-900 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 transition-colors">View GitHub</Link>
                <Link href="https://www.linkedin.com/in/hansotano/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto rounded-md border border-gray-300 px-8 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100  dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 transition-colors">View LinkedIn</Link>
                </div>
            </div>
        </section>
    )
}