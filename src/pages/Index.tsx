import { ProfileCard } from '@/components/ProfileCard';
import { SocialLinks } from '@/components/SocialLinks';
import { BioLinks } from '@/components/BioLinks';
import atmosphericBg from '@/assets/atmospheric-background.jpg';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Atmospheric background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${atmosphericBg})` }}
      />
      
      {/* Atmospheric overlay */}
      <div className="absolute inset-0 bg-atmospheric-overlay" />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6 space-y-8">
        {/* Profile Card */}
        <ProfileCard
          name="rgr"
          title="a nerd"
          location="Alberta, Canada"
          username="raager"
          status="Watching"
          statusDetail="The Time - Its 01:04 AM for me right now"
          avatar="/lovable-uploads/71ad3671-3621-4c11-892c-2055c83fe1c8.png"
          viewCount={56}
        />
        
        {/* Social Links */}
        <SocialLinks />
        
        {/* Bio Links */}
        <BioLinks />
      </div>
    </div>
  );
};

export default Index;
