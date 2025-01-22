import React from 'react';
import { FileText, CreditCard, UserCog, Mail } from 'lucide-react';

const steps = [
  {
    icon: <FileText size={32} className="text-white" />,
    title: "Fill up Application Form",
    number: "01"
  },
  {
    icon: <CreditCard size={32} className="text-white" />,
    title: "Make Online Payment",
    number: "02"
  },
  {
    icon: <UserCog size={32} className="text-white" />,
    title: "Executive will Process Application",
    number: "03"
  },
  {
    icon: <Mail size={32} className="text-white" />,
    title: "Get Confirm Mail",
    number: "04"
  }
];

const FooterProcess = () => {
  return (
    <section className="bg-orange-500 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto group-hover:bg-opacity-30 transition-all">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-orange-500 font-bold">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FooterProcess;