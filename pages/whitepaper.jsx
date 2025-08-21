import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// import { CrowdFundingContext } from '../components/CrowdFundingProvider'; // Adjust path as needed
import { CrowdFundingContext } from '../Context/CrowdFunding';
export default function whitepaper() {
  const { donations } = useContext(CrowdFundingContext);

  const whitepaperSections = [
    {
      title: 'Introduction',
      description: 'An overview of our project’s vision, mission, and the critical problem we aim to solve through innovative crowdfunding solutions.',
    },
    {
      title: 'Problem Statement',
      description: 'A detailed exploration of the societal and economic challenges our project addresses, highlighting why urgent action is needed.',
    },
    {
      title: 'Solution',
      description: 'Our unique approach to solving these challenges, combining community engagement, technology, and sustainable practices.',
    },
    {
      title: 'Technology and Implementation',
      description: 'The technical framework, tools, and roadmap that will bring our vision to life, ensuring scalability and impact.',
    },
    {
      title: 'Impact and Vision',
      description: 'Our long-term goals to transform communities and the measurable impact we expect to achieve with your support.',
    },
    {
      title: 'Funding Model',
      description: 'How we plan to allocate funds, maintain transparency, and ensure every donation maximizes impact.',
    },
    {
      title: 'Community Engagement',
      description: 'Strategies to involve stakeholders, partners, and supporters in our mission for collaborative success.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Whitepaper - Crowdfunding Project</title>
        <meta name="description" content="Dive into our comprehensive whitepaper to understand our vision, strategy, and impact for the crowdfunding project." />
      </Head>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">Our Whitepaper</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover the blueprint of our crowdfunding project, detailing our vision, strategy, and commitment to creating lasting change. Our whitepaper provides an in-depth look at how we plan to address critical challenges and empower communities through collective action.
          </p>
          <p className="text-xl font-semibold text-black mt-4">
            Total Donations: ${donations}
          </p>
        </section>

        {/* About the Whitepaper */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">About Our Whitepaper</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our whitepaper is a comprehensive document that outlines the core principles, strategies, and technical details of our crowdfunding initiative. It serves as a roadmap for stakeholders, detailing the problems we aim to solve, our innovative solutions, and the transformative impact we envision. Whether you’re an investor, supporter, or curious reader, this document offers a deep dive into our mission to create a brighter future.
          </p>
          <Link
            href="/documents/whitepaper.pdf" // Placeholder PDF path
            className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            download
          >
            Download Whitepaper
          </Link>
        </section>

        {/* Table of Contents */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-black mb-6">Table of Contents</h2>
          <ul className="space-y-6">
            {whitepaperSections.map((section, index) => (
              <li key={index} className="border-l-4 border-black pl-4">
                <h3 className="text-xl font-semibold text-black">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Vision Statement */}
        <section className="bg-black text-white py-16 px-8 rounded-lg mb-12">
          <h2 className="text-4xl font-bold text-center mb-6">Our Vision</h2>
          <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed">
            At Crowdfunding, we envision a world where every individual has the opportunity to thrive. Our crowdfunding platform is built on the belief that collective action can drive systemic change. By addressing critical issues like education, sustainability, and access to resources, we aim to empower communities and create a lasting legacy of impact.
          </p>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Key Features of Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">Transparency</h3>
              <p className="text-gray-600">
                We provide clear, real-time updates on how funds are used, ensuring trust and accountability.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">Community-Driven</h3>
              <p className="text-gray-600">
                Our projects are shaped by community input, ensuring solutions meet real needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">Scalability</h3>
              <p className="text-gray-600">
                Our technology and strategies are designed to scale, amplifying impact globally.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black">500+</h3>
            <p className="text-gray-700">Lives Impacted</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black">10+</h3>
            <p className="text-gray-700">Projects Launched</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black">${donations}</h3>
            <p className="text-gray-700">Total Funds Raised</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white p-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-black mb-4">Join Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Our whitepaper is just the beginning. Explore our team, support our projects, or dive into our detailed plans to see how you can make a difference.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/members"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Meet Our Team
            </Link>
            <Link
              href="/donations"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Make a Donation
            </Link>
            <Link
              href="/project"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Explore Projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}