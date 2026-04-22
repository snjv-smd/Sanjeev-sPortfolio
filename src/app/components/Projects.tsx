import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ImageLightbox } from './ImageLightbox';
import { useState } from 'react';

const projects = [
  {
    title: 'Sales Analytics Dashboard',
    description:
      'Engineered an end-to-end data analytics pipeline by consolidating disparate data sources using Python (Pandas) and executing complex SQL queries for large-scale data aggregation. To translate this raw data into actionable business insights, I designed an interactive Power BI dashboard utilizing custom DAX measures, dynamic filtering, and an intuitive user interface to visualize key performance indicators and historical trends.',
    images: [
      '/Images/AnualRollingSales1.png',
      '/Images/AnualRollingSales2.png'
    ],
    tech: ['Python (Pandas)', 'SQL', 'Excel','Power BI'],
    gradient: 'from-purple-500 to-pink-500',
    github: 'https://github.com/snjv-smd/AnnualizedRollingSales.git',
    live: 'https://drive.google.com/drive/folders/1CNg4Un8W1xpayosO8OGUYC3IkY85JSx_',
  },
  {
    title: 'Analyzed 911 City Report Dashboard',
    description:
      'Cleaned and processed raw emergency dispatch records using Python and Pandas. I built a data pipeline to standardize inconsistent text entries, filter out incomplete records, and extract specific geographic zones from unstructured address strings. This transformed messy, real-world data into a structured dataset ready for dynamic visualization in Tableau.',
    images: [
      '/Images/911Report1.png',
      '/Images/911Report2.png',
      '/Images/911Report3.png',
    ],
    tech: ['Python (Pandas)', 'Excel', 'Tableau'],
    gradient: 'from-blue-500 to-cyan-500',
    github: 'https://github.com/snjv-smd/911reports.git',
    live: 'https://drive.google.com/drive/folders/1OldCTMAYEcDkqH2z5lZEvPMfCAimiAhj',
  },
  {
    title: 'Backpack Slouch Detection',
    description:
      'Backpack Slouch Detection is an IoT-enabled health intervention system that prevents Musculoskeletal Disorders by utilizing real-time sensor fusion to detect unsafe slouching angles and backpack loads exceeding 15% of the users body weight. We engineered a full-stack solution bridging Arduino hardware with a native Android app.',
    images: [
      '/Images/backpack.jpg'
    ],
    tech: ['Kotlin', 'Arduino'],
    gradient: 'from-teal-500 to-green-500',
    github: 'https://github.com/snjv-smd/BackpackSlouchDetection.git',
    live: '#', // This button will now be hidden
  },
  {
    title: 'Animal Shelter Application',
    description:
      'Developed a Java-based client-server application using the MVC pattern and RMI callbacks for real-time interaction , implementing full CRUD and search functionalities with JSON-based data storage and messaging via Jackson 3.1.0 , while ensuring system integrity through manual server state management and concurrency controls to prevent duplicate adoptions.',
    images: [
      '/Images/AnimalShelter.png',
      '/Images/AnimalCustomer.png',
    ],
    tech: ['Java', 'Json'],
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com/snjv-smd/AnimalShelterApplication.git',
    live: '#', // This button will now be hidden
  },
  {
    title: 'Deepfake Video Detector',
    description:
      'This project is a Deepfake Detection System built using Python. It allows users to upload a video through a simple GUI and automatically analyzes it for signs of manipulation using AI-powered facial recognition.',
    images: [
      '/Images/deepfake.webp',
      '/Images/DeepfakeVideoDetector.png',
    ],
    tech: ['Python'],
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com/snjv-smd/DeepFakeDetector.git',
    live: '#', // This button will now be hidden
  },
  {
    title: 'AI-Based Chess Game',
    description:
      'This project is an AI-based chess game built using Python and Pygame, where the player competes against a computer opponent using the minimax algorithm.',
    images: [
      '/Images/aichess1.webp',
      '/Images/AiChess.png',
    ],
    tech: ['Python'],
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com/snjv-smd/ai-chess-game.git',
    live: '#', // This button will now be hidden
  },
  {
    title: 'Assistant Chatbot',
    description:
      'This project is a Personal Assistant AI built in Python with a simple Tkinter GUI. It can listen to voice commands or accept typed input to perform tasks like playing YouTube videos or telling jokes.',
    images: [
      '/Images/assistantchatbot1.avif',
      '/Images/AssistantChatBot.png',
    ],
    tech: ['Python'],
    gradient: 'from-orange-500 to-red-500',
    github: 'https://github.com/snjv-smd/PersonalAssistantChatBot.git',
    live: '#', // This button will now be hidden
  },
];

export function Projects() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (projectIndex: number, imageIndex: number = 0) => {
    setSelectedProject(projectIndex);
    setCurrentImageIndex(imageIndex);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) =>
        prev === projects[selectedProject].images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const previousImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-4 rounded-full" />
          <p className="text-gray-400 text-lg mb-12">
            A showcase of my work in data analysis and software engineering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              {/* Image Container */}
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => openLightbox(index, 0)}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10" />
                <ImageWithFallback
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-full blur-2xl opacity-60 z-0`}
                />
                
                {project.images.length > 1 && (
                  <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full border border-white/30 text-white text-sm font-medium"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    +{project.images.length} photos
                  </div>
                )}

                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="px-6 py-3 rounded-full border border-white/30 text-white font-semibold backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(139, 92, 246, 0.3)' }}>
                    Click to view gallery
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-100 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-white/20 rounded-full text-purple-300"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-lg text-gray-300 hover:text-white transition-all"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </motion.a>

                  {/* UPDATED: Only shows if project.live is NOT '#' */}
                  {project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} rounded-lg text-white font-medium shadow-lg transition-all`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Google Drive</span>
                    </motion.a>
                  )}
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxOpen && selectedProject !== null && (
          <ImageLightbox
            images={projects[selectedProject].images}
            currentIndex={currentImageIndex}
            onClose={closeLightbox}
            onNext={nextImage}
            onPrevious={previousImage}
            projectTitle={projects[selectedProject].title}
          />
        )}
      </AnimatePresence>
    </section>
  );
}