import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StepLayout } from '../StepLayout';
import { Progress } from '@/components/ui/progress';
import logoImage from '@/assets/garant_logo.png';

interface ScoringStepProps {
  onNext: () => void;
}

export const ScoringStep = ({ onNext }: ScoringStepProps) => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onNext, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onNext]);

  return (
    <StepLayout>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col max-w-2xl mx-auto w-full text-center">

          <div className="flex justify-center mb-12">
            <img src={logoImage} alt="Garant Bank" className="w-20 h-20" />
          </div>

          <h1 className="text-3xl font-bold mb-4 text-foreground">
            {t('scoring.title')}
          </h1>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            {t('scoring.subtitle')}
          </p>

          <div className="max-w-md mx-auto w-full space-y-4">
            <Progress value={progress} className="h-3" />
            <p className="text-2xl font-semibold text-foreground">
              {progress}%
            </p>
          </div>
        </div>
      </div>
    </StepLayout>
  );
};
