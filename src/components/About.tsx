import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export const About = () => {
  const skills = [
    "Frontend Development",
    "Backend Development",
    "Database Management",
    "RESTful APIs",
    "Responsive Designs",
    "React & Next.js",
  ];

  return (
    <section id="about" className="py-24 bg-section-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I am a dedicated developer specializing in building fast, modern web applications. My expertise lies in the full MERN stack (MongoDB, Express, React/Next.js, Node.js), ensuring every project is delivered with clean, high-performance, and mobile-responsive code. I am committed to turning ideas into reliable, future-proof digital solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground mb-6">
                I recently completed intensive training, transforming my passion into the specialized skill of a Full-Stack Developer. My focus is on building modern, high-performance web applications using the powerful MERN stack and Next.js. Driven by fresh knowledge and a commitment to clean code, I quickly turn concepts into reliable, mobile-responsive digital solutions, ready to tackle projects from dynamic landing pages to custom applications.
              </p>
              <p className="text-muted-foreground">
                I believe in the power of good design to solve complex problems and create 
                meaningful connections between users and technology.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8 hover-lift">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Skills & Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="bg-accent/20 rounded-lg p-3 text-center hover-lift"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="text-sm font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};