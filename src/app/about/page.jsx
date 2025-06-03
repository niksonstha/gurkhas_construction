"use client";

const About = () => {
  return (
    <main className="pt-20 max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8 text-yellow-600 text-center">
        About Gurkhas Construction
      </h1>

      <section className="mb-12 text-gray-700 space-y-6 text-lg leading-relaxed">
        <p>
          Gurkhas Construction has been a trusted name in the building industry
          for over 20 years. We specialize in residential, commercial, and
          renovation projects with a strong commitment to quality, safety, and
          customer satisfaction.
        </p>
        <p>
          Our skilled team combines traditional craftsmanship with modern
          techniques to deliver exceptional results on time and within budget.
          We believe every project is unique, and we work closely with our
          clients to turn their visions into reality.
        </p>
      </section>

      <section className="bg-yellow-50 rounded-lg p-8 shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-yellow-600 text-center">
          Our Core Values
        </h2>
        <ul className="list-disc list-inside space-y-3 text-gray-800 max-w-3xl mx-auto">
          <li>
            <strong>Integrity:</strong> We operate transparently and ethically
            in all our projects.
          </li>
          <li>
            <strong>Quality:</strong> Excellence in every detail, ensuring
            durable and beautiful results.
          </li>
          <li>
            <strong>Safety:</strong> Prioritizing the well-being of our workers
            and clients on site.
          </li>
          <li>
            <strong>Customer Focus:</strong> Listening to and exceeding client
            expectations.
          </li>
          <li>
            <strong>Innovation:</strong> Embracing new technologies and
            sustainable practices.
          </li>
        </ul>
      </section>
    </main>
  );
};

export default About;
