import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const benefits = [
  "Personal treatment. No external developers.",
  "Best product built with the best tools",
  "Everything is documented",
  "14 days bugs-support guarantee",
  "YOU ARE IN CONTROL",
  "Logs and analytics tools integrated, for free",
  "SEO optimization included in EVERY plan",
  "Consultant included in EVERY plan",
  "Over 7 years of proven track record",
];

export default function WhyMe() {
  return (
    <section id="why-me" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Me?</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <CardTitle className="text-lg">{benefit}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {getDetailedDescription(index)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 md:mt-0">
            <Image
              src="/profile.png"
              alt="Developer portrait"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="mt-6 bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">About Me</h3>
              <p className="text-gray-600">
                With over 7 years of experience, including work at the Defense
                Ministry and two startups, I've built over 11 products
                end-to-end in the last year alone. My passion is creating
                efficient, scalable solutions tailored to your unique needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getDetailedDescription(index: number) {
  const descriptions = [
    "I personally write every line of code, ensuring quality and consistency.",
    "Whether it's Vercel for speed or AWS for long-term solutions, you get the best for your needs.",
    "Clear documentation allows easy scaling and maintenance as your project grows.",
    "I stand by my work, offering support to ensure a smooth, bug-free experience.",
    "You have full control with admin accounts for all aspects of your software.",
    "Monitor your product's performance with integrated analytics at no extra cost.",
    "Every plan includes full SEO optimization to boost your online presence.",
    "Benefit from professional advice to guide your project in the right direction.",
    "From government projects to startups, my experience spans diverse sectors.",
  ];
  return descriptions[index];
}
