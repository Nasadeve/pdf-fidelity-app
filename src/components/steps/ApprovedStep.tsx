import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, X } from 'lucide-react';
import { StepLayout } from '../StepLayout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import successImage from '@/assets/success-image.png';
import screenshotImage from '@/assets/screenshot-terms.png';

interface ApprovedStepProps {
  onNext: () => void;
}

export const ApprovedStep = ({ onNext }: ApprovedStepProps) => {
  const { t } = useTranslation();
  const [showScreenshot, setShowScreenshot] = useState(false);

  return (
    <StepLayout>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col max-w-2xl mx-auto w-full px-4 text-center">
          <img
            src={successImage}
            alt="Success"
            className="w-24 h-24 md:w-36 md:h-36 mb-6 md:mb-8 object-cover rounded-full mx-auto"
          />

          <h1 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-foreground">
            {t('approved.title')}
          </h1>

          <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-muted-foreground">{t('approved.approvedAmount')}</span>
              <span className="font-semibold text-base md:text-lg text-foreground">101 000 000 UZS</span>
            </div>
            <div className="flex justify-between items-center text-sm md:text-base">
              <span className="text-muted-foreground">{t('approved.depositAmount')}</span>
              <span className="font-semibold text-base md:text-lg text-foreground">1 000 000 UZS</span>
            </div>
          </div>

          <p className="text-xs md:text-sm text-muted-foreground mb-6 md:mb-8">
            {t('approved.depositNote')}
          </p>

          <div className="space-y-3 md:space-y-4">
            <Button
              variant="outline"
              className="w-full border-[#A32C2C] text-[#A32C2C] hover:bg-[#A32C2C]/10"
              size="lg"
              onClick={() => setShowScreenshot(true)}
            >
              <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              {t('approved.termsButton')}
            </Button>

            <Button
              onClick={onNext}
              className="w-full bg-[#A32C2C] hover:bg-[#8B2424] text-white"
              size="lg"
            >
              {t('approved.getMoneyButton')}
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">
            <span dangerouslySetInnerHTML={{
              __html: t('approved.privacyNotice').replace(
                '{{link}}',
                `<a href="#" class="text-[#A32C2C] underline">${t('approved.privacyLink')}</a>`
              )
            }} />
          </p>
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
            alt={t('approved.termsButton')}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </StepLayout>
  );
};
