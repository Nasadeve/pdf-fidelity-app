import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { StepLayout } from '../StepLayout';
import { PersonImage } from '../PersonImage';
import logoImage from '@/assets/garant_logo.png';

interface WelcomeStepProps {
  onNext: () => void;
}

export const WelcomeStep = ({ onNext }: WelcomeStepProps) => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState('');
  const [remember, setRemember] = useState(false);

  return (
    <StepLayout>
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col justify-center max-w-md mx-auto w-full">
          <img src={logoImage} alt="Garant Bank" className="w-16 h-16 mb-8" />
          
          <h1 className="text-3xl font-bold mb-3 text-foreground">
            {t('welcome.title')}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t('welcome.subtitle')}
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                {t('welcome.phoneLabel')}
              </label>
              <div className="flex gap-2">
                <div className="bg-muted px-4 py-2 rounded-md flex items-center justify-center min-w-[80px] border border-input">
                  <span className="font-medium">+998</span>
                </div>
                <Input
                  type="tel"
                  placeholder="00 000 00 00"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={remember}
                onCheckedChange={(checked) => setRemember(checked as boolean)}
              />
              <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                {t('welcome.rememberMe')}
              </label>
            </div>

            <Button 
              onClick={onNext}
              className="w-full bg-[#A32C2C] hover:bg-[#8B2424] text-white"
              size="lg"
            >
              {t('welcome.continue')}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              {t('welcome.privacyNotice', { 
                link: `<span class="text-[#A32C2C] underline">${t('welcome.privacyLink')}</span>` 
              }).split('{{link}}').map((part, i) => 
                i === 0 ? part : <span key={i} className="text-[#A32C2C] underline">{t('welcome.privacyLink')}</span>
              )}
            </p>
          </div>
        </div>

        <div className="hidden lg:block">
          <PersonImage />
        </div>
      </div>
    </StepLayout>
  );
};
