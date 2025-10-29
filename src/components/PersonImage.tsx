import personImage from '@/assets/person.png';

export const PersonImage = () => {
  return (
    <div className="flex-1 flex items-center justify-center">
      <img 
        src={personImage} 
        alt="Garant Bank representative" 
        className="max-w-full h-auto object-contain max-h-[600px]"
      />
    </div>
  );
};
