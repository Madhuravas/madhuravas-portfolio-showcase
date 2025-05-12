
import { Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    role: "Full Stack Developer",
    company: "MOSIP",
    period: "01/2024 – Present",
    location: "Bengaluru, Karnataka",
    description: [
      "Developing and maintaining web applications using the MERN stack",
      "Collaborating with cross-functional teams to define, design, and ship new features",
      "Working on identity management systems and ensuring they are secure and performant",
      "Implementing responsive design and ensuring cross-browser compatibility"
    ]
  },
  {
    role: "Frontend Developer",
    company: "Mountblue Technologies",
    period: "08/2022 – 12/2023",
    location: "Bengaluru, Karnataka",
    description: [
      "Developed responsive web applications using React and Angular",
      "Implemented state management solutions using Redux and Context API",
      "Collaborated with backend developers to integrate frontend with APIs",
      "Improved application performance through code optimization and best practices"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="text-center mb-12">
          <p className="subheading">My Journey</p>
          <h2 className="heading text-3xl md:text-4xl">Work Experience</h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-6 bg-secondary/30 border-border transition-all hover:bg-secondary/50 hover:border-purple-light/30 animate-fade-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                <h4 className="text-purple-light font-medium mb-3">{exp.company}</h4>
                
                <div className="flex gap-4 mb-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-auto">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
