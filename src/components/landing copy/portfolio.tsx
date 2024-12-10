import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

const projects = [
  {
    title: "E-commerce Platform",
    description: "Built a scalable e-commerce solution with integrated payment systems.",
    image: "/placeholder.svg?height=200&width=300",
    result: "Increased sales by 30% within the first quarter."
  },
  {
    title: "Task Management App",
    description: "Developed a user-friendly task management application for remote teams.",
    image: "/placeholder.svg?height=200&width=300",
    result: "Improved team productivity by 25%."
  },
  {
    title: "Healthcare Portal",
    description: "Created a secure portal for patient-doctor communication and appointment scheduling.",
    image: "/placeholder.svg?height=200&width=300",
    result: "Reduced administrative workload by 40%."
  }
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Portfolio Showcase</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full object-cover h-48"
              />
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="font-semibold text-green-600">{project.result}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

