import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
<<<<<<< HEAD
import { FileText, Check } from 'lucide-react';
import { StepLayout } from '../StepLayout';
=======
import { FileText, CheckCircle } from 'lucide-react';
import { StepLayout } from '../StepLayout';
import successImage from '@/assets/success-image.png';
>>>>>>> 4bca845 (Initial commit yoki kerakli commit mersi)

interface ApprovedStepProps {
  onNext: () => void;
}

export const ApprovedStep = ({ onNext }: ApprovedStepProps) => {
  const { t } = useTranslation();

  return (
    <StepLayout>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
<<<<<<< HEAD
        <div className="flex flex-col max-w-2xl mx-auto w-full">
          <div className="flex justify-end mb-8">
            <div className="w-12 h-12 rounded-full bg-[#E89B9B] flex items-center justify-center text-white font-semibold text-lg">
              US
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#A32C2C] to-[#E89B9B] flex items-center justify-center shadow-lg">
              <Check className="w-12 h-12 text-white" strokeWidth={3} />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-12 text-center text-foreground">
            {t('approved.title')}
          </h1>

          <div className="space-y-6 mb-8">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">{t('approved.approvedAmount')}</span>
              <span className="font-semibold text-lg text-foreground">101 000 000 UZS</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">{t('approved.depositAmount')}</span>
              <span className="font-semibold text-lg text-foreground">1 000 000 UZS</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-8">
            {t('approved.depositNote')}
          </p>

          <div className="space-y-4">
            <Button 
              variant="outline"
              className="w-full max-w-md mx-auto border-[#A32C2C] text-[#A32C2C] hover:bg-[#A32C2C]/10"
              size="lg"
            >
              <FileText className="mr-2 h-5 w-5" />
              {t('approved.termsButton')}
            </Button>

            <Button 
              onClick={onNext}
              className="w-full max-w-md mx-auto bg-[#A32C2C] hover:bg-[#8B2424] text-white"
=======
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
            >
              <FileText className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              {t('approved.termsButton')}
            </Button>

            <Button
              onClick={onNext}
              className="w-full bg-[#A32C2C] hover:bg-[#8B2424] text-white"
>>>>>>> 4bca845 (Initial commit yoki kerakli commit mersi)
              size="lg"
            >
              {t('approved.getMoneyButton')}
            </Button>
          </div>

          <p className="text-xs text-center text-muted-foreground mt-6">
<<<<<<< HEAD
            {t('approved.privacyNotice', { 
              link: `<span class="text-[#A32C2C] underline">${t('approved.privacyLink')}</span>` 
            }).split('{{link}}').map((part, i) => 
              i === 0 ? part : <span key={i} className="text-[#A32C2C] underline">{t('approved.privacyLink')}</span>
            )}
=======
            <span dangerouslySetInnerHTML={{
              __html: t('approved.privacyNotice').replace(
                '{{link}}',
                `<a href="#" class="text-[#A32C2C] underline">${t('approved.privacyLink')}</a>`
              )
            }} />
>>>>>>> 4bca845 (Initial commit yoki kerakli commit mersi)
          </p>
        </div>
      </div>
    </StepLayout>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 4bca845 (Initial commit yoki kerakli commit mersi)
