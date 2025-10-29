import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepLayout } from '../StepLayout';

interface SetPinStepProps {
  onNext: () => void;
  onBack: () => void;
}

export const SetPinStep = ({ onNext, onBack }: SetPinStepProps) => {
  const { t } = useTranslation();
  const [createPin, setCreatePin] = useState(['', '', '', '']);
  const [confirmPin, setConfirmPin] = useState(['', '', '', '']);
  const createRefs = useRef<(HTMLInputElement | null)[]>([]);
  const confirmRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (
    index: number, 
    value: string, 
    pins: string[], 
    setPins: React.Dispatch<React.SetStateAction<string[]>>,
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>
  ) => {
    if (!/^\d*$/.test(value)) return;
    
    const newPins = [...pins];
    newPins[index] = value.slice(-1);
    setPins(newPins);

    if (value && index < 3) {
      refs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number, 
    e: React.KeyboardEvent, 
    pins: string[],
    refs: React.MutableRefObject<(HTMLInputElement | null)[]>
  ) => {
    if (e.key === 'Backspace' && !pins[index] && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };

  return (
    <StepLayout>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col max-w-md mx-auto w-full">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>{t('setPin.back')}</span>
          </button>

          <div className="flex justify-end mb-8">
            <div className="w-12 h-12 rounded-full bg-[#E89B9B] flex items-center justify-center text-white font-semibold text-lg">
              US
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-3 text-center text-foreground">
            {t('setPin.title')}
          </h1>
          <p className="text-muted-foreground mb-12 text-center">
            {t('setPin.subtitle')}
          </p>

          <div className="space-y-8">
            <div>
              <label className="block text-sm font-medium mb-4 text-center text-foreground">
                {t('setPin.createLabel')}
              </label>
              <div className="flex gap-3 justify-center">
                {createPin.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (createRefs.current[index] = el)}
                    type="password"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value, createPin, setCreatePin, createRefs)}
                    onKeyDown={(e) => handleKeyDown(index, e, createPin, createRefs)}
                    className="w-14 h-16 text-center text-2xl font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A32C2C] bg-background"
                  />
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4 text-center text-foreground">
                {t('setPin.confirmLabel')}
              </label>
              <div className="flex gap-3 justify-center">
                {confirmPin.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (confirmRefs.current[index] = el)}
                    type="password"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value, confirmPin, setConfirmPin, confirmRefs)}
                    onKeyDown={(e) => handleKeyDown(index, e, confirmPin, confirmRefs)}
                    className="w-14 h-16 text-center text-2xl font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A32C2C] bg-background"
                  />
                ))}
              </div>
            </div>

            <Button 
              onClick={onNext}
              className="w-full bg-[#A32C2C] hover:bg-[#8B2424] text-white mt-8"
              size="lg"
            >
              {t('setPin.continue')}
            </Button>
          </div>
        </div>
      </div>
    </StepLayout>
  );
};
