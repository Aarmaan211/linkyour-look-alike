import { BackgroundManager } from '@/components/BackgroundManager';
import { Navigation } from '@/components/Navigation';

const About = () => {
  return (
    <BackgroundManager>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        {/* About Content */}
        <div className="backdrop-blur-sm bg-glass border border-glass-border rounded-3xl p-8 shadow-2xl max-w-2xl">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-foreground mb-4">About Me</h1>
            
            <div className="text-left space-y-4 text-muted-foreground">
              <p>
                Hey there! I'm a passionate developer and tech enthusiast from Alberta, Canada. 
                I love exploring new technologies, building cool projects, and sharing knowledge with the community.
              </p>
              
              <p>
                When I'm not coding, you can find me diving deep into the latest tech trends, 
                contributing to open source projects, or just nerding out about the latest developments 
                in web development and software engineering.
              </p>
              
              <p>
                I believe in the power of technology to solve real-world problems and create 
                meaningful connections between people. That's what drives me to keep learning 
                and building every day.
              </p>
            </div>
            
            <div className="pt-4">
              <h2 className="text-xl font-semibold text-foreground mb-3">Skills & Interests</h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {['React', 'TypeScript', 'Node.js', 'Python', 'Docker', 'AWS', 'Web3', 'AI/ML'].map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 bg-secondary/50 border border-glass-border rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <Navigation />
      </div>
    </BackgroundManager>
  );
};

export default About;