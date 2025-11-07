import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
    const WEB3FORMS_ACCESS_KEY = 'abcf21fc-3b63-4552-8471-5027ed69565c'; // Replace with your Web3Forms access key
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "codedbyzain@gmail.com",
      link: "mailto:hello@portfolio.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92 320 8362 440",
      link: "tel:+923208362440"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Pakistan, Lahore",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gradient">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'd love to hear about your project 
            and discuss how we can create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8 h-full">
              <h3 className="text-2xl font-semibold mb-8 text-primary">Get in Touch</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    className="flex items-center p-4 rounded-lg bg-accent/20 hover-lift group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                  >
                    <div className="p-3 rounded-full bg-primary/20 text-primary group-hover:animate-bounce-slow">
                      <info.icon size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <motion.div 
                className="mt-8 p-6 rounded-lg gradient-card"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-2 text-primary">Available for:</h4>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Freelance Projects</li>
                  <li>• Full-time Opportunities</li>
                  <li>• Collaboration & Consulting</li>
                  <li>• Creative Partnerships</li>
                </ul>
              </motion.div>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h3>
              
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                if (!formData.name || !formData.email || !formData.subject || !formData.message) {
                  toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Please fill in all fields",
                  });
                  return;
                }

                setIsLoading(true);
                try {
                    const response = await fetch('https://api.web3forms.com/submit', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                      },
                      body: JSON.stringify({
                        access_key: WEB3FORMS_ACCESS_KEY,
                        name: formData.name,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message
                      })
                    });

                    const result = await response.json();
                    if (result.success) {
                      toast({
                        title: "Success",
                        description: "Your message has been sent successfully!",
                      });
                    
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                      });
                    } else {
                      throw new Error('Failed to send message');
                    }

                } catch (error) {
                  toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Failed to send message. Please try again.",
                  });
                } finally {
                  setIsLoading(false);
                }
              }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Input 
                    placeholder="Your Name" 
                    className="glass border-accent/30"
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Input 
                    type="email" 
                    placeholder="Your Email" 
                    className="glass border-accent/30"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Input 
                    placeholder="Subject" 
                    className="glass border-accent/30"
                    value={formData.subject}
                    onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6}
                    className="glass border-accent/30 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button 
                    type="submit" 
                    className="w-full hover-lift hover-glow"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};