import React from 'react';

const testimonials = [
  {
    content: "Working with this developer was an absolute pleasure. The attention to detail and personal involvement in every aspect of the project made all the difference.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1887",
  },
  {
    content: "The level of professionalism and technical expertise is outstanding. Our project was delivered on time and exceeded our expectations.",
    author: "Michael Chen",
    role: "CTO, InnovateCo",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=1470",
  },
  {
    content: "The documentation and support provided were exceptional. It made onboarding new team members a breeze.",
    author: "Emily Rodriguez",
    role: "Product Manager, SaaS Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1470",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900">Client Testimonials</h2>
          <p className="mt-4 text-xl text-gray-600">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-background p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="absolute top-0 right-0 -mt-3 -mr-3">
                <svg
                  className="h-12 w-12 text-green-500 opacity-20"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="relative">
                <p className="text-lg text-gray-600 italic">
                  "{testimonial.content}"
                </p>
                <div className="mt-8 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={testimonial.image}
                    alt={testimonial.author}
                  />
                  <div className="ml-4">
                    <div className="text-base font-medium text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;