
import { useState } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import emailjs from 'emailjs-com';

const contactMethods = [
  {
    name: "Email",
    value: "madhuravas@example.com",
    icon: Mail,
    href: "mailto:madhuravas@example.com",
  },
  {
    name: "Phone",
    value: "+91 8341175001",
    icon: Phone,
    href: "tel:+918341175001",
  },
  {
    name: "LinkedIn",
    value: "madhuravas-reddy",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/madhuravas-reddy-8a4b0b230/",
  },
  {
    name: "GitHub",
    value: "Madhuravas",
    icon: Github,
    href: "https://github.com/Madhuravas",
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formData, import.meta.env.VITE_PUBLIC_KEY)
    .then(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <p className="subheading">Get In Touch</p>
          <h2 className="heading text-3xl md:text-4xl">Contact Me</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Let's Discuss Your Project</h3>
            <p className="text-muted-foreground mb-8">
              I'd love to hear about your project and how I can help. Feel free to reach out through any of the following contact methods or by using the form.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-4 flex items-center gap-4 bg-secondary/30 border-border hover:border-purple-light/30 transition-all"
                  >
                    <div className="p-2 bg-gradient-purple rounded-lg">
                      <Icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{method.name}</h4>
                      <a 
                        href={method.href} 
                        target="_blank"
                        className="text-sm text-muted-foreground hover:text-purple-light"
                      >
                        {method.value}
                      </a>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
          
          <Card className="p-6 bg-secondary/20 border-border animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background"
                  placeholder="john@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background min-h-32"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-purple hover:opacity-90" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
