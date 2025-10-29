import { ReactNode } from 'react';
import { LanguageSwitcher } from './LanguageSwitcher';

interface StepLayoutProps {
  children: ReactNode;
  showLanguage?: boolean;
}

export const StepLayout = ({ children, showLanguage = true }: StepLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {showLanguage && (
        <div className="fixed top-6 right-6 z-50">
          <LanguageSwitcher />
        </div>
      )}
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
};
