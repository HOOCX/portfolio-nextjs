const skillCategories = [
  {
    title: 'Frontend',
    skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js'],
    color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
  },
  {
    title: 'Backend & Databases',
    skills: ['Node.js', 'MySQL', 'PHP', 'Python', 'MongoDB', 'Firebase', 'SQL Server'],
    color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-200'
  },
  {
    title: 'Cms & Tools',
    skills: ['WordPress', 'Magento', 'Git', 'REST APIs', 'Figma', 'UI/UX Design'],
    color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-200'
  },
  {
    title: 'Current Focus',
    skills: ['React', 'Next.js', 'LLM Engineering', 'AWS'],
    color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
  }
];

export default function TechStack() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white text-center">Tech Stack</h2>
        <p className="mb-12 text-lg text-gray-700 dark:text-gray-300 text-center">A comprehensive overview of the technologies and tools I utilize in my web development projects.</p>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div key={index} className={`p-6 border border-gray-200 rounded-2xl shadow-sm dark:bg-gray-900 dark:border-gray-600 ${category.color}`}>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className={`px-3 py-1.5 text-sm font-medium rounded-md ${category.color}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}