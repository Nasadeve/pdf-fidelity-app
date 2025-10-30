import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { StepLayout } from '../StepLayout';

interface VerifiedStepProps {
  onNext: () => void;
}

export const VerifiedStep = ({ onNext }: VerifiedStepProps) => {
  const { t } = useTranslation();

  const userData = [
    { label: t('verified.director'), value: 'As**** Sh**** D****' },
    { label: t('verified.organization'), value: 'ООО «Альфа СистемС»' },
    { label: t('verified.inn'), value: '308451279' },
    { label: t('verified.oked'), value: '62010' },
    { label: t('verified.address'), value: 'г. Ташкент, ул. Нукусская, 45' },
  ];

  return (
    <StepLayout>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col max-w-2xl mx-auto w-full">

          <h1 className="text-3xl font-bold mb-12 text-center text-foreground">
            {t('verified.title')}
          </h1>

          <div className="bg-card rounded-lg p-8 space-y-6 mb-8 border">
            {userData.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">{item.label}</span>
                <span className="font-medium text-foreground text-right">{item.value}</span>
              </div>
            ))}
          </div>

          <Button 
            onClick={onNext}
            className="w-full max-w-md mx-auto bg-[#A32C2C] hover:bg-[#8B2424] text-white"
            size="lg"
          >
            {t('verified.continue')}
          </Button>
        </div>
      </div>
    </StepLayout>
  );
};
