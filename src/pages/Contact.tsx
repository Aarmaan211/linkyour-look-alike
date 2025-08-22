import { BackgroundManager } from '@/components/BackgroundManager';
import { Navigation } from '@/components/Navigation';
import { Mail, MessageCircle, Github, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'Discord',
      value: 'raager#1234',
      href: '#'
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: '@raager',
      href: 'https://github.com'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'Twitter',
      value: '@raager',
      href: 'https://twitter.com'
    }
  ];

  return (
    <BackgroundManager>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        {/* Contact Content */}
        <div className="backdrop-blur-sm bg-glass border border-glass-border rounded-3xl p-8 shadow-2xl max-w-md w-full">
          <div className="text-center space-y-6">
            <h1 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h1>
            
            <p className="text-muted-foreground">
              Feel free to reach out through any of these channels. 
              I'd love to hear from you!
            </p>
            
            <div className="space-y-4 pt-4">
              {contactMethods.map((method, index) => (
                <Button
                  key={index}
                  variant="secondary"
                  asChild
                  className="w-full h-auto p-4 justify-start bg-secondary/50 hover:bg-secondary/70 backdrop-blur-sm border border-glass-border transition-all duration-300 hover:scale-[1.02]"
                >
                  <a 
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="text-accent">
                      {method.icon}
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-foreground">{method.label}</div>
                      <div className="text-sm text-muted-foreground">{method.value}</div>
                    </div>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        <Navigation />
      </div>
    </BackgroundManager>
  );
};

export default Contact;