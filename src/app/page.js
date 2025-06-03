"use client";

import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import Link from "next/link";
import Projects from "./projects/page";

export default function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <HeroSection />

      {/* About Brief */}
      <section className="py-16 bg-gray-100 text-center px-6">
        <h2 className="text-3xl font-semibold mb-4">
          Welcome to Gurkhas Construction
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We are a trusted name in construction, committed to quality, safety,
          and customer satisfaction. With decades of experience and a skilled
          team, we bring your visions to life.
        </p>
        <Link
          href="/about"
          className="inline-block mt-6 bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
        >
          Learn More About Us
        </Link>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <ServiceCard
            title="Residential Construction"
            description="We build beautiful and functional homes with the highest standards."
          />
          <ServiceCard
            title="Commercial Projects"
            description="Professional construction for offices, retail, and large-scale infrastructure."
          />
          <ServiceCard
            title="Renovation & Remodeling"
            description="Transform and modernize your space with our expert renovation services."
          />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-gray-50 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Recent Projects
        </h2>
        <Projects />
        <div className="text-center mt-8">
          <Link
            href="/projects"
            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 text-center bg-yellow-100">
        <h2 className="text-3xl font-semibold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          Contact us today to schedule a consultation or get a free quote. Our
          team is ready to help you bring your project to life.
        </p>
        <div className="mt-6">
          <Link
            href="/contact"
            className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Contact Form (Optional on Home) */}
      {/* <ContactForm /> */}
    </main>
  );
}
