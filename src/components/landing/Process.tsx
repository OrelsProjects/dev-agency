import React from 'react';
import { MessageSquare, Code2, Rocket, Shield } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Initial Consultation',
    description: 'We discuss your vision, requirements, and project scope in detail.',
  },
  {
    icon: Code2,
    title: 'Development',
    description: 'Your project is built with clean, efficient, and maintainable code.',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Your product goes live with thorough testing and optimization.',
  },
  {
    icon: Shield,
    title: 'Support',
    description: '14 days of dedicated support to ensure everything runs perfectly.',
  },
];

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">How We Work</h2>
          <p className="mt-4 text-xl text-gray-600">
            A streamlined process focused on efficiency and quality
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2" />

            <div className="grid gap-8 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="relative">
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center z-10 relative">
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute top-0 -inset-x-2 -inset-y-2 bg-blue-100 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="mt-6 text-xl font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-center text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-md">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to start your project?
            </h3>
            <p className="mt-4 text-gray-600">
              Let's work together to bring your vision to life
            </p>
            <div className="mt-8">
              <a
                href="#plans"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;