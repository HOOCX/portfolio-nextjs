const experiences = [
    {
        id: 1,
        role: "Software Developer",
        company: "Tribunal Superior Electoral (TSE)",
        period: "May 2023 - May 2024",
        description: [
            "• Development and maintenance of web systems using Vue.js and Node.js for government judicial platforms.",
            "• Performance optimization of SQL Server databases and automation of core processes.",
            "• Refactoring of user interfaces (UI) to improve user experience (UX) and accessibility.",
            "• Integration of third‑party APIs and enhancement of workflow accuracy and reliability."
        ]
    },
    {
        id: 2,
        role: "Web Developer",
        company: "Industrias San Miguel del Caribe (ISM)",
        period: "Mar 2021 - Abr 2023",
        description: [
            "• Development of dynamic web applications using PHP, MySQL, and JavaScript.",
            "• Collaboration on corporate WordPress and Magento projects for product and marketing systems.",
            "• Implementation of RESTful APIs and troubleshooting of performance and security issues.",
            "• Increased uptime and improved user satisfaction through proactive debugging and maintenance."
        ]
    },
    {
        id: 3,
        role: "Web Developer",
        company: "ARS Yunen",
        period: "Ene 2020 - Ene 2021",
        description: [
            "• Design and development of internal platforms and external websites.",
            "• Creation of email marketing tools and dynamic content pages using PHP and JavaScript.",
            "• Improvement of SEO performance and user experience (UX) through better design and content structure.",

        ]
    },
    {
        id: 4,
        role: "Web Developer / Web Designer",
        company: "Listín Diario",
        period: "Sep 2015 - Nov 2018",
        description: [
            "• Maintained the newspaper’s WordPress website, including wireframe design and navigation optimization.",
            "• Assisted in developing internal tools using HTML/CSS, JavaScript, and C#.",
            "• Conducted user testing and performance tuning for both mobile and desktop platforms."
        ]
    }
];

export default function ExperienceTimeline() {
    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white text-center">Experience Timeline</h2>
                <div className="relative border-l-2 border-blue-500 dark:border-blue-400 ml-3 md:ml-0">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="mb-10 ml-8 md:ml-10">
                            {/* Timeline dot */}
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            </span>

                            {/* Content Card */}
                            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600 hover:shadow-md transition-shadow">
                                <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                                    <span className="text-sm font-medium text-blue-600 dark:text-blue-400 mt-1 md:mt-0">{exp.period}</span>
                                </div>
                                <h4 className="text-md font-semibold text-gray-600 dark:text-gray-300 mb-4">{exp.company}</h4>
                                <ul className="space-y-2 text-gray-700 dark:text-gray-300 list-disc list-inside">
                                    {exp.description.map((item, index) => (
                                        <li key={index} className="text-sm leading-relaxed">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}