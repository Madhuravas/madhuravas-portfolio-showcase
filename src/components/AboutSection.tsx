
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AboutSection = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="subheading">Get To Know</p>
          <h2 className="heading text-3xl md:text-4xl">About Me</h2>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-5/12 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-full aspect-square bg-gradient-purple rounded-2xl overflow-hidden p-1 rotate-3">
                <div className="w-full h-full rounded-xl overflow-hidden bg-gradient-dark">
                  <img 
                    src={`/lovable-uploads/82493ad4-cf0d-4ccb-a82c-c18fe58347ed.png`} 
                    alt="Madhuravas Reddy" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-7/12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg mb-6">
              I am a <span className="text-purple-light font-medium">MERN Stack Developer</span> with 2.9 years of experience in building fast and scalable web applications. I work with MongoDB, Express.js, React.js, and Node.js to create user-friendly frontends and powerful backends.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Card className="p-5 bg-secondary border-border">
                <h3 className="font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground text-sm">B.Com in Computer Applications</p>
                <p className="text-muted-foreground text-sm">Aditya Degree College</p>
              </Card>
              <Card className="p-5 bg-secondary border-border">
                <h3 className="font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground text-sm">Bengaluru, Karnataka</p>
                <p className="text-muted-foreground text-sm">India</p>
              </Card>
            </div>
            
            <Button className="bg-gradient-purple hover:opacity-90" asChild>
              <a href="#experience">My Experience</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
