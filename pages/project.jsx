import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CrowdFundingContext } from '../Context/CrowdFunding'; 

export default function project() {
  const { donations } = useContext(CrowdFundingContext);

  const projects = [
    {
      id: '1',
      title: 'Community Learning Hub',
      description: 'Empowering local youth with free access to cutting-edge technology, coding bootcamps, and vocational training to bridge the digital divide and foster economic growth in underserved communities.',
      longDescription: 'This initiative establishes state-of-the-art learning centers equipped with computers, internet access, and expert-led training programs. By focusing on digital literacy and skill development, we aim to empower the next generation to secure meaningful employment and contribute to their communities.',
      image: '/images/project1.jpg', // Placeholder image
      goal: 25000,
      raised: 9000,
    },
    {
      id: '2',
      title: 'Sustainable Energy Initiative',
      description: 'Installing solar panels in rural areas to provide clean, affordable energy, reducing carbon emissions and improving living conditions for families.',
      longDescription: 'Our sustainable energy project brings renewable energy solutions to remote communities, replacing unreliable and costly fossil fuels. This initiative not only improves access to electricity but also supports environmental sustainability and economic savings for households.',
      image: '/images/project2.jpg', // Placeholder image
      goal: 35000,
      raised: 14000,
    },
    {
      id: '3',
      title: 'Clean Water Access',
      description: 'Building wells and water purification systems in underserved regions to ensure safe drinking water, saving lives and improving community health.',
      longDescription: 'Access to clean water is a fundamental need. This project constructs wells and installs advanced purification systems to provide safe drinking water, reducing waterborne diseases and enhancing quality of life for thousands of families in rural areas.',
      image: '/images/project3.jpg', // Placeholder image
      goal: 18000,
      raised: 7200,
    },
    {
      id: '4',
      title: 'Healthcare Outreach Program',
      description: 'Providing mobile medical clinics to deliver essential healthcare services to remote communities, addressing critical health needs.',
      longDescription: 'Our healthcare outreach program deploys mobile clinics staffed with medical professionals to offer vaccinations, check-ups, and health education. This initiative ensures that even the most isolated communities receive the care they need to thrive.',
      image: '/images/project4.jpg', // Placeholder image
      goal: 22000,
      raised: 6500,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">Our Transformative Projects</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Crowdfunding, we are dedicated to creating meaningful change through innovative crowdfunding initiatives. Our projects address critical community needs, from education and healthcare to sustainability and clean water access. Explore our initiatives below and join us in building a brighter future.
          </p>
          <p className="text-xl font-semibold text-black mt-4">
            Total Donations: ${donations}
          </p>
          <Link
            href="/donations"
            className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition mt-6"
          >
            Support Our Mission
          </Link>
        </section>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Explore Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const progress = Math.min((project.raised / project.goal) * 100, 100);
              return (
                <Link
                  href="/donations"
                  key={project.id}
                  className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                        Donate Now
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-gray-600 mb-4">{project.longDescription}</p>
                    <div className="mb-4">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-black h-3 rounded-full"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        ${project.raised} raised of ${project.goal} goal ({progress.toFixed(1)}%)
                      </p>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
                      Support This Project
                    </button>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="bg-black text-white py-16 px-8 rounded-lg mb-16">
          <h2 className="text-4xl font-bold text-center mb-6">Our Mission and Vision</h2>
          <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed">
            At [Your Project Name], we harness the power of collective action to address pressing global challenges. Our mission is to empower communities through sustainable, community-driven projects that tackle issues like education, healthcare, clean water, and environmental sustainability. Our vision is a world where every individual has the opportunity to thrive, supported by equitable access to resources and opportunities. Join us in turning this vision into reality.
          </p>
          <Link
            href="/donations"
            className="inline-block mt-6 bg-white text-black py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
          >
            Join Our Cause
          </Link>
        </section>

        {/* Impact Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Our Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">Empowering Youth in Lagos</h3>
              <p className="text-gray-600">
                Our Community Learning Hub has provided over 300 students with access to coding bootcamps and vocational training, with 60% securing tech internships within a year. Your donations are fueling these opportunities and transforming lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">Solar Power in Rural Nigeria</h3>
              <p className="text-gray-600">
                The Sustainable Energy Initiative brought electricity to 200 households, enabling children to study after dark and reducing reliance on fossil fuels. Your support can extend this impact to more communities.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">Clean Water for Families</h3>
              <p className="text-gray-600">
                By installing water purification systems, we’ve provided safe drinking water to 400 families, reducing waterborne diseases by 45%. Every donation helps us reach more lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">Healthcare on Wheels</h3>
              <p className="text-gray-600">
                Our mobile medical clinics have delivered healthcare services to 150 remote communities, offering vaccinations and health education. Your contribution can keep these clinics rolling.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/donations"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Support More Stories
            </Link>
          </div>
        </section>

        {/* Why Support Us */}
        <section className="bg-white p-12 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Why Support Our Projects?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Transparency</h3>
              <p className="text-gray-600">
                We provide real-time updates on fund allocation, ensuring every dollar is used effectively and transparently.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Community-Driven</h3>
              <p className="text-gray-600">
                Our projects are shaped by community needs, ensuring relevance and maximum impact.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Sustainable Impact</h3>
              <p className="text-gray-600">
                We design initiatives for long-term success, creating lasting change for future generations.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/donations"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Get Involved
            </Link>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black">1,200+</h3>
            <p className="text-gray-700">Lives Impacted</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black">4</h3>
            <p className="text-gray-700">Active Projects</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-black">${donations}</h3>
            <p className="text-gray-700">Total Funds Raised</p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-black text-white py-16 px-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Supporters Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "Supporting the Clean Water Access project has been incredibly rewarding. Seeing the direct impact on families’ lives is why I continue to donate."
              </p>
              <p className="text-gray-100 font-semibold">— Aisha M., Supporter</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "The Community Learning Hub gave my son the skills to pursue a tech career. This project is changing futures."
              </p>
              <p className="text-gray-100 font-semibold">— Chinedu O., Parent</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/donations"
              className="inline-block bg-white text-black py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
            >
              Add Your Support
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white p-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-black mb-4">Be Part of the Change</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Your contribution can transform communities and create opportunities for those in need. Explore our projects, learn about our mission, and join us in building a brighter future.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/donations"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Donate Now
            </Link>
            <Link
              href="/members"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Meet Our Team
            </Link>
            <Link
              href="/whitepaper"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Read Our Whitepaper
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Thank you for supporting our mission!</p>
          <p className="text-sm mt-2">© 2025 Crowdfunding Project. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}