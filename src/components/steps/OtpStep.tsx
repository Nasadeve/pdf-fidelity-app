import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { StepLayout } from '../StepLayout';
import { PersonImage } from '../PersonImage';
import logoImage from '@/assets/garant_logo.png';

interface OtpStepProps {
  onNext: () => void;
  onBack: () => void;
}

export const OtpStep = ({ onNext, onBack }: OtpStepProps) => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(59);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return;
    
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1);
    setOtp(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newOtp.every(digit => digit !== '') && index === 5) {
      setTimeout(onNext, 500);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <StepLayout>
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col justify-center max-w-md mx-auto w-full">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>{t('otp.back')}</span>
          </button>

          <img src={logoImage} alt="Garant Bank" className="w-16 h-16 mb-8" />
          
          <h1 className="text-3xl font-bold mb-3 text-foreground">
            {t('otp.title')}
          </h1>
          <p className="text-muted-foreground mb-8">
            {t('otp.subtitle')} <br />
            <span className="font-medium text-foreground">+998 90 939-20-81</span>
          </p>

          <div className="space-y-6">
            <div className="flex gap-3 justify-center">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className="w-12 h-14 text-center text-xl font-semibold border rounded-md focus:outline-none focus:ring-2 focus:ring-[#A32C2C] bg-background"
                />
              ))}
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span className="text-sm">
                {String(Math.floor(timer / 60)).padStart(2, '0')}:
                {String(timer % 60).padStart(2, '0')}
              </span>
            </div>

            <button className="w-full text-center text-muted-foreground hover:text-foreground transition-colors">
              {t('otp.resend')}
            </button>
          </div>
        </div>

        <PersonImage />
      </div>
    </StepLayout>
  );
};
