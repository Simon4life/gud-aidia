import React, { ReactNode } from 'react';
interface StepCardInterface {
    icon: ReactNode
    title: string
    description: string
    bgColor: string,
    step: string

}

const StepCard = ({ icon, step, title, description, bgColor }: StepCardInterface ) => (
  <div className="p-6 bg-white shadow-md flex flex-col items-center">
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-full ${bgColor} mb-4`}
    >
      {icon}
    </div>
    <span
      className="text-sm font-semibold px-3 py-1 mb-4"
    >
      {step}
    </span>
    <p className="text-gray-600">{description}</p>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: '📖', // Replace with your icon (e.g., SVG or a component)
      step: 'Step 01',
      title: 'Inspiring Reading',
      description:
        'Encourage individuals to explore diverse ideas and perspectives through engaging content.',
      bgColor: 'bg-purple-500',
    },
    {
      icon: '💰',
      step: 'Step 02',
      title: 'Strategic Fundraising',
      description:
        'Implement impactful strategies to generate and manage resources effectively.',
      bgColor: 'bg-yellow-500',
    },
    {
      icon: '🏃‍♂️', 
      step: 'Step 03',
      title: 'Holistic Development',
      description:
        'Foster growth across physical, mental, and emotional dimensions for lasting impact.',
      bgColor: 'bg-blue-500',
    },
  ];

  return (
    <div className="p-8 bg-gray-50">
      <h2 className="text-2xl text-center font-bold mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <StepCard
            key={index}
            icon={step.icon}
            step={step.step}
            title={step.title}
            description={step.description}
            bgColor={step.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
