import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, X } from 'lucide-react';
import { StepLayout } from '../StepLayout';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import logoImage from '@/assets/garant_logo.png';
import moneyCaseImage from '@/assets/money-case-3d.png';
import screenshotImage from '@/assets/screenshot-credit-agreement.png';

export const SuccessStep = () => {
  const { t } = useTranslation();
  const [showScreenshot, setShowScreenshot] = useState(false);

  return (
    <StepLayout>
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col justify-center max-w-md mx-auto w-full">
          <img src={logoImage} alt="Garant Bank" className="w-16 h-16 mb-8" />
          
          <h1 className="text-3xl font-bold mb-3 text-foreground">
            {t('success.title')}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t('success.subtitle')}
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">{t('success.creditAmount')}</span>
              <span className="font-semibold text-lg text-foreground">101 000 000 UZS</span>
            </div>
          </div>

          <div className="space-y-4">
            <Button 
              variant="outline"
              className="w-full border-[#A32C2C] text-[#A32C2C] hover:bg-[#A32C2C]/10"
              size="lg"
              onClick={() => setShowScreenshot(true)}
            >
              <FileText className="mr-2 h-5 w-5" />
              {t('success.contractButton')}
            </Button>

            <Button 
              className="w-full bg-[#A32C2C] hover:bg-[#8B2424] text-white"
              size="lg"
            >
              {t('success.returnButton')}
            </Button>
          </div>
        </div>

        <div className="hidden lg:block flex-1 flex items-center justify-center">
          <img 
            src={moneyCaseImage} 
            alt="Money case with coins" 
            className="max-w-full h-auto object-contain max-h-[600px]"
          />
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
            alt={t('success.contractButton')}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </StepLayout>
  );
};
