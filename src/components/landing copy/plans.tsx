import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

const plans = [
  {
    name: "I have a design",
    description: "Perfect for projects with existing designs",
    price: "Custom pricing",
    features: [
      "End-to-end development",
      "Consultancy for your idea",
      "Documentation",
      "Logs and analytics integration",
      "Admin account management training",
      "14 days bugs-support guarantee"
    ],
    info: "Up to 6 pages",
    delivery: "1-4 days"
  },
  {
    name: "I have an idea",
    description: "Ideal for turning your concept into reality",
    price: "Custom pricing",
    features: [
      "Everything in 'I have a design' plan",
      "Full, responsive Figma design"
    ],
    info: "Up to 10 pages",
    delivery: "3-10 days"
  },
  {
    name: "I need something bigger",
    description: "For ambitious projects that will change the world",
    price: "Let's discuss",
    features: [
      "Customized solution",
      "Scalable architecture",
      "Extended support and maintenance"
    ],
    info: "Tailored to your needs",
    delivery: "To be determined"
  }
]

export default function Plans() {
  return (
    <section id="plans" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 text-sm text-gray-600">
                  <p>{plan.info}</p>
                  <p>Delivery: {plan.delivery}</p>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

