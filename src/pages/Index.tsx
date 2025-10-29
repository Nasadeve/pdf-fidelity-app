import { useState } from 'react';
import { WelcomeStep } from '@/components/steps/WelcomeStep';
import { OtpStep } from '@/components/steps/OtpStep';
import { IdentityStep } from '@/components/steps/IdentityStep';
import { VerifiedStep } from '@/components/steps/VerifiedStep';
import { SetPinStep } from '@/components/steps/SetPinStep';
import { AccountRequestStep } from '@/components/steps/AccountRequestStep';
import { AccountOpenedStep } from '@/components/steps/AccountOpenedStep';
import { ScoringStep } from '@/components/steps/ScoringStep';
import { ApprovedStep } from '@/components/steps/ApprovedStep';
import { SuccessStep } from '@/components/steps/SuccessStep';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    <WelcomeStep key="welcome" onNext={() => setCurrentStep(1)} />,
    <OtpStep key="otp" onNext={() => setCurrentStep(2)} onBack={() => setCurrentStep(0)} />,
    <IdentityStep key="identity" onNext={() => setCurrentStep(3)} onBack={() => setCurrentStep(1)} />,
    <VerifiedStep key="verified" onNext={() => setCurrentStep(4)} />,
    <SetPinStep key="setpin" onNext={() => setCurrentStep(5)} onBack={() => setCurrentStep(3)} />,
    <AccountRequestStep key="account" onNext={() => setCurrentStep(6)} />,
    <AccountOpenedStep key="opened" onNext={() => setCurrentStep(7)} />,
    <ScoringStep key="scoring" onNext={() => setCurrentStep(8)} />,
    <ApprovedStep key="approved" onNext={() => setCurrentStep(9)} />,
    <SuccessStep key="success" />,
  ];

  return <>{steps[currentStep]}</>;
};

export default Index;
