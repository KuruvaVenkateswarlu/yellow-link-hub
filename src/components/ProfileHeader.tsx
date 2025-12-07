import { profileInfo } from "@/data/products";

const ProfileHeader = () => {
  return (
    <div className="flex flex-col items-center text-center mb-8 opacity-0 animate-fade-up">
      <div className="relative mb-4">
        <div className="h-24 w-24 overflow-hidden rounded-full border-2 border-primary glow-primary">
          <img
            src={profileInfo.avatar}
            alt={profileInfo.name}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center">
          <svg className="h-4 w-4 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      
      <h1 className="text-2xl font-bold text-gradient-gold mb-1">
        {profileInfo.name}
      </h1>
      <p className="text-muted-foreground text-sm">
        {profileInfo.tagline}
      </p>
    </div>
  );
};

export default ProfileHeader;
