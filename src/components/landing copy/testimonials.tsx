import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "CEO, TechStart",
    content:
      "Working with this dev agency was a game-changer for our startup. The personal attention and expertise delivered exactly what we needed.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Sarah Lee",
    role: "Founder, HealthTech Solutions",
    content:
      "I was impressed by the depth of knowledge and the commitment to our project's success. The results speak for themselves.",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Mike Chen",
    role: "CTO, E-commerce Giants",
    content:
      "The level of detail in documentation and the seamless handover process made scaling our team incredibly smooth. Highly recommended!",
    image: "/placeholder.svg?height=100&width=100",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-lg">
                        {testimonial.name}
                      </CardTitle>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-700">{testimonial.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
