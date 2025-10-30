import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { StepLayout } from '../StepLayout';

interface AccountOpenedStepProps {
  onNext: () => void;
}

export const AccountOpenedStep = ({ onNext }: AccountOpenedStepProps) => {
  const { t } = useTranslation();

  return (
    <StepLayout>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col max-w-2xl mx-auto w-full">
<<<<<<< HEAD
          <div className="flex justify-end mb-8">
            <div className="w-12 h-12 rounded-full bg-[#E89B9B] flex items-center justify-center text-white font-semibold text-lg">
              US
            </div>
          </div>
=======
>>>>>>> 4bca845 (Initial commit yoki kerakli commit mersi)

          <h1 className="text-3xl font-bold mb-12 text-center text-foreground">
            {t('accountOpened.title')}
          </h1>

          <Button 
            variant="outline"
            className="w-full max-w-md mx-auto mb-8 border-[#A32C2C] text-[#A32C2C] hover:bg-[#A32C2C]/10"
            size="lg"
          >
            <FileText className="mr-2 h-5 w-5" />
            {t('accountOpened.downloadButton')}
          </Button>

          <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">{t('accountOpened.requestedAmount')}</span>
              <span className="font-semibold text-lg text-foreground">100 000 000 UZS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">{t('accountOpened.depositAmount')}</span>
              <span className="font-semibold text-lg text-foreground">1 000 000 UZS</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mb-8">
            {t('accountOpened.depositNote')}
          </p>

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
