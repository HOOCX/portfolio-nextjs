const projects = [
    {
        id: 4,
        title: "Flowboard",
        description: "Flowboard is a modern task and project management application designed for teams, built with a Full-Stack architecture using Next.js. It offers a seamless experience through an interactive Kanban board, detailed table views, and seamless team member management. (Try login with user: guest@gmail.com, password: guest123 )",
        technologies: ["Next.js", "React", "Tailwind CSS", "Prisma ORM", "PostgreSQL", "NextAuth.js"],
        link: "https://flowboard-five-psi.vercel.app/"
    },
    {
        id: 3,
        title: "Daily Zen Dashboard",
        description: "Personal dashboard focused on productivity and well-being. Features a clean, modern user interface for managing daily tasks.",
        technologies: ["Next.js", "Tailwind CSS", "React", "TypeScript", "UI/UX", "Dashboard Design"],
        link: "https://daily-zen-one.vercel.app/"
    },
    {
        id: 1,
        title: "ARS Yunen",
        description: "Corporate healthcare platform. Design and development of the external website focused on optimizing user experience (UX) and improving SEO performance.",
        technologies: ["PHP", "JavaScript", "UX/UI", "SEO"],
        link: "https://www.arsyunen.com/"
    },
    {
        id: 2,
        title: "Oh! Magazine",
        description: "High-traffic digital magazine and lifestyle portal. Maintenance and development of dynamic layouts, and navigation optimization for both mobile and desktop users.",
        technologies: ["WordPress", "PHP", "HTML/CSS", "JavaScript"],
        link: "https://ohmagazinerd.com/"
    },
    {
        id: 5,
        title: "Currency Converter",
        description: "Financial tool built with JavaScript that converts currencies using a real-time exchange rate API.",
        technologies: ["JavaScript", "API Integration", "Fintech"],
        link: "https://github.com/HOOCX/api-rest-mongo-node-express-jwt"
    },
    {
        id: 6,
        title: "Listín Diario",
        description: "Maintained the national newspaper’s website, optimizing performance, navigation, and the content management system (CMS).",
        technologies: ["Wordpress", "C#", "Performance Tuning"],
        link: "https://listindiario.com/"
    }
];

export default function ProjectGrid() {
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white text-center">Projects</h2>
                <p className="mb-12 text-lg text-gray-700 dark:text-gray-300 text-center">A selection of projects showcasing my expertise in web development, design, and performance optimization.</p>
                <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col p-8 transition-shadow border border-gray-200 rounded-2xl dark:border-gray-600 hover:shadow-lg bg-gray-50 dark:bg-gray-800">
                            <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                            <p className="grow mb-6 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-200">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a href={project.link} target={project.link === "#" ? "_self" : "_blank"} rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                                View Project <span className="ml-1">&rarr;</span> </a>
                        </div>
                    ))}
                </div>
            </div>
            </section>
            );
        }