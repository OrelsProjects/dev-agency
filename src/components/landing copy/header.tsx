import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold">DevAgency</span>
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#why-me">Why Me</Link>
          <Link href="#plans">Plans</Link>
          <Link href="#portfolio">Portfolio</Link>
          <Link href="#process">Process</Link>
          <Link href="#faqs">FAQs</Link>
        </nav>
        <div className="ml-auto">
          <Button asChild>
            <Link href="#plans">Contact</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

