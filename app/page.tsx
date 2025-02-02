import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">
              Your Trusted Platform for Rent Management
            </h1>
            <p className="text-gray-400 mb-8">
              We provide a comprehensive rent management solution that helps
              property owners and tenants streamline their rental processes
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" className="border-white text-black ">
                Learn More
              </Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Empowering Tenants and Landlords with Ease
          </h2>
          <p className="text-gray-600 mb-12 max-w-2xl">
            Our platform streamlines the rental experience for both tenants and
            landlords, making property management and rent payments simple and
            efficient.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="font-semibold mb-2">For Tenants</h3>
              <p className="text-gray-600">
                Streamline your rental payments and experience
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Learn More
              </Button>
            </div>
            <div>
              <h3 className="font-semibold mb-2">For Landlords</h3>
              <p className="text-gray-600">
                Manage your properties and tenants with ease
              </p>
              <Button variant="outline" size="sm" className="mt-4">
                Learn More
              </Button>
            </div>
          </div>

          <div className="text-center mb-20">
            <h2 className="text-2xl font-bold mb-4">
              Top Features for Tenants and Landlords
            </h2>
            <p className="text-gray-600">
              Experience seamless access with our smart logic. Your safety is
              our priority
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Track payments"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold mb-2">
                Track Your Rent Payments Effortlessly
              </h3>
              <p className="text-gray-600">
                Stay on top of your payment history with ease
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Report issues"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold mb-2">
                Report Issues Quickly and Efficiently
              </h3>
              <p className="text-gray-600">
                Get issues resolved faster with our streamlined system
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="Get started"
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-semibold mb-2">
                Get Started with Our Platform Today
              </h3>
              <p className="text-gray-600">
                Join us and simplify your rent experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">
            Customer Testimonials
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &quot;This platform has transformed my rental experience!&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Tenant</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                &quot;I really appreciate the ease of use!&quot;
              </p>
              <div className="flex items-center">
                <Image
                  src="/placeholder.svg"
                  alt="User"
                  width={40}
                  height={40}
                  className="rounded-full mr-3"
                />
                <div>
                  <p className="font-semibold">Michael Brown</p>
                  <p className="text-sm text-gray-500">Landlord</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((member) => (
              <div key={member} className="text-center">
                <Image
                  src="/placeholder.svg"
                  alt={`Team member ${member}`}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold">Team Member</h3>
                <p className="text-sm text-gray-600 mb-2">Position</p>
                <div className="flex justify-center space-x-2">
                  <Link href="#" className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Twitter</span>
                    {/* Twitter icon would go here */}
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-600">
                    <span className="sr-only">LinkedIn</span>
                    {/* LinkedIn icon would go here */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <h3 className="font-bold mb-2">We&apos;re hiring!</h3>
            <p className="text-gray-600 mb-4">
              Come join our team and make an impact
            </p>
            <Button variant="outline">View Openings</Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-12 text-center">FAQs</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I register?</AccordionTrigger>
              <AccordionContent>
                To register, simply click on the &quot;Sign Up&quot; button.
                Follow the on-screen instructions to create your account.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is Digital Signature?</AccordionTrigger>
              <AccordionContent>
                A digital signature is an electronic authentication method that
                allows you to sign documents securely online.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>How can I report issues?</AccordionTrigger>
              <AccordionContent>
                You can report issues through our platform by navigating to the
                &quot;Report Issue&quot; section in your dashboard.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="text-center mt-12">
            <h3 className="font-bold mb-2">Still have questions?</h3>
            <Button>Contact Support</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Company
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Facebook
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter</p>
              <Button variant="outline">Subscribe</Button>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
