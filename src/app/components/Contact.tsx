import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { useState } from 'react';

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/snjv-smd', color: 'hover:text-gray-300' },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'www.linkedin.com/in/sanjeev-bensal-393077397', // Update with your link
    color: 'hover:text-blue-400',
  },
  {
    icon: Mail,
    label: 'Online Jobs Philippines',
    href: 'https://v2.onlinejobs.ph/jobseekers/info/3346265',
    color: 'hover:text-blue-400',
  },
 

];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Using Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "45ba4cee-ed9a-449b-9e1b-40ba93f86b8c", // FIXME: Put your key here
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: `New Portfolio Message from ${formData.name}`,
      }),
    });

    const result = await response.json();
    
    if (result.success) {
      alert('Message sent successfully! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' }); // Reset form
    } else {
      alert('Something went wrong. Please try again or email me directly.');
    }
    
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative flex items-center">
      <div className="max-w-5xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mb-4 rounded-full mx-auto" />
          <p className="text-gray-400 text-lg">
            I'm always open to discussing new projects, opportunities, or just chatting about tech
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl"
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all disabled:opacity-50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-gray-200 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none disabled:opacity-50"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg text-white font-semibold shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:grayscale"
                >
                  <Send className={`w-5 h-5 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-between"
          >
            <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-purple-300">
                Let's Connect
              </h3>
              <p className="text-gray-300 mb-6">
                Whether you have a question, want to collaborate on a project, or just want to say
                hi, feel free to reach out!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>sanjeevbensal7215@gmail.com</span>
                  <span>📞 +63 9454527262</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 shadow-xl">
              <h3 className="text-xl font-semibold mb-6 text-gray-200">
                Find Me Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`flex flex-col items-center justify-center gap-3 p-4 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all ${social.color} group`}
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  >
                    <social.icon className="w-8 h-8 text-gray-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}