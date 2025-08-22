import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface BioLink {
  title: string;
  description?: string;
  url: string;
  featured?: boolean;
}

export const BioLinks = () => {
  const links: BioLink[] = [
    {
      title: 'Portfolio Website',
      description: 'Check out my latest projects and work',
      url: '#',
      featured: true
    },
    {
      title: 'Latest Blog Post',
      description: 'My thoughts on modern web development',
      url: '#'
    },
    {
      title: 'Newsletter',
      description: 'Subscribe for weekly updates',
      url: '#'
    },
    {
      title: 'Buy Me a Coffee',
      description: 'Support my work',
      url: '#'
    }
  ];

  return (
    <div className="space-y-4 w-full max-w-md">
      {links.map((link, index) => (
        <Button
          key={index}
          variant={link.featured ? "default" : "secondary"}
          asChild
          className={`w-full h-auto p-4 justify-between group backdrop-blur-sm border border-glass-border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
            link.featured 
              ? 'bg-primary hover:bg-primary/90 shadow-lg shadow-profile-glow' 
              : 'bg-secondary/50 hover:bg-secondary/70'
          }`}
        >
          <a 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full"
          >
            <div className="text-left">
              <div className="font-semibold text-sm">{link.title}</div>
              {link.description && (
                <div className="text-xs opacity-80 mt-1">{link.description}</div>
              )}
            </div>
            <ExternalLink className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity" />
          </a>
        </Button>
      ))}
    </div>
  );
};