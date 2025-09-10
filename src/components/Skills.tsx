import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Code2, Palette, Zap, Globe, Smartphone, Database } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      color: "text-blue-500"
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: ["UI/UX Design", "Figma", "Adobe Creative Suite", "Prototyping"],
      color: "text-purple-500"
    },
    {
      title: "3D & Animation",
      icon: Zap,
      skills: ["Three.js", "Framer Motion", "WebGL", "CSS Animations"],
      color: "text-primary"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: ["HTML5", "CSS3", "JavaScript", "Web APIs"],
      color: "text-orange-500"
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: ["React Native", "PWAs", "Responsive Design", "Cross-platform"],
      color: "text-green-500"
    },
    {
      title: "Backend & Tools",
      icon: Database,
      skills: ["Node.js", "API Design", "Git", "CI/CD"],
      color: "text-red-500"
    }
  ];

  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass p-6 h-full hover-lift hover-glow group">
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-accent/20 ${category.color} group-hover:animate-bounce-slow`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="ml-3 text-xl font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      className="bg-secondary/30 rounded-md p-2 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        delay: index * 0.1 + skillIndex * 0.05, 
                        duration: 0.4 
                      }}
                      viewport={{ once: true }}
                      whileHover={{ x: 5 }}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};