import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, FileSearch, Palette, Code, Rocket } from 'lucide-react'

const steps = [
  { icon: FileSearch, title: "Consultation", description: "We discuss your needs and goals" },
  { icon: Palette, title: "Design", description: "Creating the perfect look for your project" },
  { icon: Code, title: "Development", description: "Bringing your vision to life with code" },
  { icon: Rocket, title: "Launch", description: "Your project goes live with full support" }
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">The Process</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-row items-center">
              <Card className="w-full">
                <CardHeader className="flex flex-col items-center">
                  <step.icon className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p>{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <ArrowRight className="h-8 w-8 text-gray-400 ml-8 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold">14-day bug support guarantee included with every project</p>
        </div>
      </div>
    </section>
  )
}

