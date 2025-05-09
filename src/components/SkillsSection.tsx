
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "HTML", "CSS", "SCSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Angular", "Node.js", "Express.js", "Tailwind CSS", "Material UI", "Redux", "Mongoose"],
  },
  {
    title: "Databases",
    skills: ["MongoDB"],
  },
  {
    title: "Testing Tools",
    skills: ["Jest", "Cypress"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitLab", "Jira", "VS Code", "Postman", "Nginx", "AWS"],
  },
  {
    title: "Expertise",
    skills: ["Responsive Design", "State Management", "Frontend Testing", "JWT", "OAuth", "Database Optimization"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="subheading">What I Know</p>
          <h2 className="heading text-3xl md:text-4xl">My Skills</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="p-6 bg-secondary/40 border-border animate-fade-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 gradient-text">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge 
                    key={i} 
                    className="bg-background border border-border text-foreground hover:bg-purple-dark"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
