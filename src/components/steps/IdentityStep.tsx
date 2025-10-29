import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronLeft, User, Calendar as CalendarIcon, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StepLayout } from '../StepLayout';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

interface IdentityStepProps {
  onNext: () => void;
  onBack: () => void;
}

export const IdentityStep = ({ onNext, onBack }: IdentityStepProps) => {
  const { t } = useTranslation();
  const [documentNumber, setDocumentNumber] = useState('');
  const [date, setDate] = useState<Date>();

  return (
    <StepLayout>
      <div className="flex justify-center items-center min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col max-w-md mx-auto w-full">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span>{t('identity.back')}</span>
          </button>

          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full border-4 border-[#A32C2C] flex items-center justify-center bg-[#A32C2C]/10">
              <User className="w-16 h-16 text-[#A32C2C]" />
              <div className="absolute -top-2 -left-2 w-8 h-8 border-4 border-gray-400 rounded-sm"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-4 border-gray-400 rounded-sm"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-4 border-gray-400 rounded-sm"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-4 border-gray-400 rounded-sm"></div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold mb-3 text-center text-foreground">
            {t('identity.title')}
          </h1>
          <p className="text-muted-foreground mb-8 text-center">
            {t('identity.subtitle')}
          </p>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground flex items-center gap-2">
                {t('identity.documentLabel')}
                <Info className="h-4 w-4 text-muted-foreground" />
              </label>
              <Input
                type="text"
                placeholder={t('identity.documentPlaceholder')}
                value={documentNumber}
                onChange={(e) => setDocumentNumber(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">
                {t('identity.dobLabel')}
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, 'PPP') : <span className="text-muted-foreground">{t('identity.dobPlaceholder')}</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <Button 
              onClick={onNext}
              className="w-full bg-[#A32C2C] hover:bg-[#8B2424] text-white"
              size="lg"
            >
              {t('identity.verifyButton')} →
            </Button>
          </div>
        </div>
      </div>
    </StepLayout>
  );
};
