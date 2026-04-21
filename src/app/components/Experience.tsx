import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const timeline = [
  {
    type: 'Remote Job',
    icon: Briefcase,
    title: 'Freelance Data Analyst & Software Engineer',
    organization: 'Self-employed',
    period: '2023 - Present',
    description: 'SQL, Python, and data visualization (Power BI/Tableau) for large-scale data analysis, automation, and insight generation.',
    color: 'from-purple-500 to-blue-500',
  },
  {
    type: 'education',
    icon: GraduationCap,
    title: 'B.S. Computer Science',
    organization: 'Tech University',
    period: '2019 - 2023',
    description: 'Focus on AI/ML, Data Structures, Cyber Security and Software Engineering.',
    color: 'from-purple-500 to-blue-500',
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'IT assistant (OJT)',
    organization: 'Smart City Command and Control Center',
    period: ' January 2022 - August 2022',
    description:
      'Utilized Microsoft Excel to clean, organize, and prepare raw data for analysis',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    type: 'work',
    icon: Briefcase,
    title: 'Data Analysis Intern',
    organization: 'DataFlow Solutions',
    period: 'Summer 2024',
    description:
      'Analyzed customer behavior data and created visualization dashboards for stakeholders.',
    color: 'from-teal-500 to-green-500',
  },
  {
    type: 'achievement',
    icon: Award,
    title: 'Hackathon Winner',
    organization: 'University Code Sprint',
    period: '2021',
    description:
      'First place for building an IoT-based posture monitoring system using Arduino and Android. Led team of 5 developers.',
    color: 'from-orange-500 to-red-500',
  },
];

const skills = [
  { name: 'Data Analysis', level: 100 },
  { name: 'Full-Stack Development', level: 90 },
  { name: 'Machine Learning', level: 80 },
  { name: 'Database Design', level: 85 },
  { name: 'Algorithm Design', level: 85 },
  { name: 'UI/UX Design', level: 75 },
];

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Experience & Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-12 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-purple-300">
              Timeline
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="relative pl-12 group"
                >
                  {/* Line connector */}
                  {index < timeline.length - 1 && (
                    <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-purple-500/50 to-transparent" />
                  )}

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    className={`absolute left-0 top-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <item.icon className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-5 group-hover:bg-white/10 group-hover:border-purple-500/50 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-100">
                        {item.title}
                      </h4>
                      <span className="text-sm text-purple-400 whitespace-nowrap">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-gray-300 font-medium mb-2">
                      {item.organization}
                    </p>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Progress Bars */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-purple-300">
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-purple-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="h-3 bg-white/5 border border-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 rounded-full relative"
                    >
                      <div className="absolute inset-0 bg-white/20 animate-pulse" />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Skills Grid */}
            <div className="mt-12 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-semibold mb-4 text-gray-200">
                Additional Expertise
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Statistics and Probability',
                  'Data Structures',
                  'Automata and Formal Languages',
                  'Information Management',
                  'Discrete Structures',
                  'Git & GitHub',
                  'Cyber Security',
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    className="border border-white/10 rounded-lg px-4 py-2 text-center text-sm text-gray-300 hover:border-purple-500/50 transition-colors cursor-default"
                    style={{ 
                      background: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))'
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
