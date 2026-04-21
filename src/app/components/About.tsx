import { motion } from 'motion/react';
import { Code2, Database, Brain, Globe } from 'lucide-react';

const techStack = [
  { name: 'Python', icon: '🐍', color: 'from-yellow-400 to-blue-500' },
  { name: 'Java', icon: '♨️', color: 'from-blue-400 to-blue-600' },
  { name: 'SQL', icon: '🗄️', color: 'from-orange-400 to-red-500' },
  { name: 'JavaScript', icon: '⚡', color: 'from-yellow-300 to-yellow-500' },
  { name: 'Kotlin', icon: '📱', color: 'from-blue-400 to-blue-600' },
  { name: 'React', icon: '⚛️', color: 'from-cyan-400 to-blue-500' },
  { name: 'Power BI', icon: '📊', color: 'from-orange-400 to-orange-600' },
  { name: 'Tableau', icon: '📈', color: 'from-blue-400 to-blue-600' },
];

const skills = [

    {
    icon: Database,
    title: 'Data Analysis',
    description: 'Extracting insights from complex datasets using advanced analytics',
  },
  {
    icon: Code2,
    title: 'Software Engineering',
    description: 'Full-stack development with modern frameworks and tools',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building intelligent systems with ML algorithms and neural networks',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Creating responsive, user-friendly web applications',
  },
];

export function About() {
  return (
    <section id="about" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-12 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              I’m a Computer Science graduate focused on data analysis, with hands-on experience working with SQL, 
              Python, and Excel to clean, transform, and analyze large datasets. 
              I build data-driven solutions, including dashboards in Power BI and Tableau, to turn raw data into clear, actionable insights.
              
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a background in software engineering, I also develop data-centric applications and 
              automation tools that streamline data workflows and reporting. 
              I’m particularly interested in solving real-world problems through data, 
              combining analytical thinking with technical development to deliver efficient and impactful solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-300">Tech Stack</h3>
            <div className="grid grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex flex-col items-center justify-center p-3 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-colors cursor-pointer"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <span className="text-3xl mb-2">{tech.icon}</span>
                  <span className="text-xs text-gray-400 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all cursor-pointer group"
            >
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <skill.icon className="w-7 h-7 text-purple-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-200">{skill.title}</h3>
              <p className="text-gray-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
