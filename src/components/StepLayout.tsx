import { ReactNode } from 'react';

interface StepLayoutProps {
  children: ReactNode;
}

export const StepLayout = ({ children }: StepLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
};
