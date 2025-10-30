import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, X } from 'lucide-react';
import { StepLayout } from '../StepLayout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import screenshotImage from '@/assets/screenshot-account-info.png';

interface AccountOpenedStepProps {
  onNext: () => void;
}

export const AccountOpenedStep = ({ onNext }: AccountOpenedStepProps) => {
  const { t } = useTranslation();
  const [showScreenshot, setShowScreenshot] = useState(false);

  return (
    <StepLayout>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col max-w-2xl mx-auto w-full">

          <h1 className="text-3xl font-bold mb-12 text-center text-foreground">
            {t('accountOpened.title')}
          </h1>

          <Button 
            variant="outline"
            className="w-full max-w-md mx-auto mb-8 border-[#A32C2C] text-[#A32C2C] hover:bg-[#A32C2C]/10"
            size="lg"
            onClick={() => setShowScreenshot(true)}
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

      <Dialog open={showScreenshot} onOpenChange={setShowScreenshot}>
        <DialogContent className="max-w-4xl w-full p-0 gap-0">
          <button
            onClick={() => setShowScreenshot(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-10 bg-background p-2"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <img 
            src={screenshotImage} 
            alt={t('accountOpened.downloadButton')}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </StepLayout>
  );
};
