import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import encode from '@/assets/encode.png';
import hhc from '@/assets/hhc.png';
import recipe from '@/assets/recipe.png';
import weather from '@/assets/weather.jpeg';
import whatsapp from '@/assets/whatsapp.png';
import tinyurl from '@/assets/tinyurl.png';

export const Portfolio = () => {
  const projects = [
  {
    title: "Dynamic E-Commerce Landing Page",
    description: "A fast, fully responsive landing page for an e-commerce brand built with a modern framework for high performance and lead conversion.",
    image: hhc,
    tags: ["Next.js", "React", "Tailwind CSS", "Mobile-First"],
    liveUrl: "https://hhcdropshipping.vercel.app/",
    githubUrl: "https://github.com/BPOTW/hhcdropshipping"
  },
  {
    title: "Recipe Finder App (Full-Stack)",
    description: "A complete recipe search and management platform. Features custom API integration and dynamic data handling (CRUD operations) for personalized user experience.",
    image: recipe,
    tags: ["React", "Express.js", "MongoDB", "REST API"],
    liveUrl: "https://recipe-finder-4245.vercel.app/",
    githubUrl: "https://github.com/BPOTW/Recipe-Finder"
  },
  {
    title: "WhatsApp Web Clone",
    description: "A real-time messaging application clone showcasing strong frontend state management and dynamic UI updates for a chat-based user experience.",
    image: whatsapp,
    tags: ["React", "Node.js", "Socket.io (Simulated)", "Frontend State"],
    liveUrl: "https://whats-app-web-app.netlify.app/",
    githubUrl: "https://github.com/BPOTW/whatsapp-clone"
  },
  {
    title: "Tiny URL Clone (URL Shortener)",
    description: "A highly efficient Full-Stack application that shortens long URLs and redirects users. Demonstrates database interaction and backend routing control.",
    image: tinyurl, // Assuming project4 image placeholder
    tags: ["Node.js", "Express.js", "MongoDB", "Backend Routing"],
    liveUrl: "https://tinyurl-clone-react.vercel.app/",
    githubUrl: "https://github.com/BPOTW/tinyurl_clone_react"
  },
  {
    title: "Advanced Text Encoder/Decoder",
    description: "A utility application for encoding and decoding text using custom algorithms. Focuses on JavaScript logic, state management, and clean user interface design.",
    image: encode, // Assuming project5 image placeholder
    tags: ["React", "JavaScript (ES6+)", "Custom Logic", "Utility App"],
    liveUrl: "https://cipher-converter.netlify.app/",
    githubUrl: "https://github.com/BPOTW/cipher-converter"
  },
  {
    title: "Real-Time Weather App",
    description: "A sleek application that fetches and displays weather data using a third-party API. Highlights asynchronous data handling and clean component structure.",
    image: weather, // Assuming project6 image placeholder
    tags: ["React", "External API", "Asynchronous JavaScript", "Data Fetching"],
    liveUrl: "https://weather-app-react-rho-murex.vercel.app/",
    githubUrl: "https://github.com/BPOTW/weather_app_react"
  }
];

  return (
    <section id="portfolio" className="py-24 bg-section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, featuring modern web applications, 
            mobile apps, and creative digital experiences.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass overflow-hidden hover-lift group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 bg-accent/30 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      className="hover-glow flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target='_blank'>
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="glass"
                      asChild
                    >
                      <a href={project.githubUrl} target='_blank'>
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};