import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { StepLayout } from '../StepLayout';

interface AccountRequestStepProps {
  onNext: () => void;
}

export const AccountRequestStep = ({ onNext }: AccountRequestStepProps) => {
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

          <h1 className="text-3xl font-bold mb-3 text-center text-foreground">
            {t('accountRequest.title')}
          </h1>
          <p className="text-muted-foreground mb-12 text-center max-w-xl mx-auto">
            {t('accountRequest.subtitle')}
          </p>

          <div className="bg-card rounded-lg p-8 space-y-6 mb-8 border">
            <div className="flex justify-between items-center py-3">
              <span className="text-muted-foreground">{t('accountRequest.monthlyService')}</span>
              <span className="font-semibold text-foreground">{t('accountRequest.free')}</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-muted-foreground">{t('accountRequest.accountOpening')}</span>
              <span className="font-semibold text-foreground">{t('accountRequest.free')}</span>
            </div>
          </div>

          <Button 
            onClick={onNext}
            className="w-full max-w-md mx-auto bg-[#A32C2C] hover:bg-[#8B2424] text-white"
            size="lg"
          >
            {t('accountRequest.verifyButton')} →
          </Button>
        </div>
      </div>
    </StepLayout>
  );
};
