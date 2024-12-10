import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">DevAgency</h3>
            <p className="text-gray-400">Building your digital future, one line of code at a time.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#why-me">Why Me</Link></li>
              <li><Link href="#plans">Plans</Link></li>
              <li><Link href="#portfolio">Portfolio</Link></li>
              <li><Link href="#process">Process</Link></li>
              <li><Link href="#faqs">FAQs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">Email: hello@devagency.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="#plans">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DevAgency. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
            {' | '}
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

