import { ProfileCard } from '@/components/ProfileCard';
import { SocialLinks } from '@/components/SocialLinks';
import { Navigation } from '@/components/Navigation';
import { BackgroundManager } from '@/components/BackgroundManager';

const Index = () => {
  return (
    <BackgroundManager>
      <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
        {/* Profile Card */}
        <ProfileCard
          username="raager"
          status="Watching"
          statusDetail="The Time - Its 01:04 AM for me right now"
          title="a nerd"
          location="Alberta, Canada"
          avatar="/lovable-uploads/71ad3671-3621-4c11-892c-2055c83fe1c8.png"
          viewCount={56}
        />
        
        {/* Social Links */}
        <SocialLinks />
        
        {/* Navigation */}
        <Navigation />
      </div>
    </BackgroundManager>
  );
};

export default Index;
