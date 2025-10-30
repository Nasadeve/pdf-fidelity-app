import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { StepLayout } from '../StepLayout';
import successImage from '@/assets/success-image.png';

interface ApprovedStepProps {
  onNext: () => void;
}

export const ApprovedStep = ({ onNext }: ApprovedStepProps) => {
  const { t } = useTranslation();

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
    </StepLayout>
  );
};
