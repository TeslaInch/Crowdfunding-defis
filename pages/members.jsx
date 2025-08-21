import { useContext } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CrowdFundingContext } from '../Context/CrowdFunding';

export default function members() {
  const { donations } = useContext(CrowdFundingContext);

  const teamMembers = [
    {
      name: 'Aisha Okon',
      role: 'Founder & CEO',
      bio: 'Aisha is a visionary leader with over 10 years of experience in social impact initiatives. She founded [Your Project Name] to empower communities through innovative crowdfunding solutions.',
      image: '/images/team1.jpg', // Placeholder image
    },
    {
      name: 'Chinedu Eze',
      role: 'Chief Technology Officer',
      bio: 'Chinedu drives the technological backbone of our platform, ensuring seamless user experiences and robust systems for managing donations and projects.',
      image: '/images/team2.jpg', // Placeholder image
    },
    {
      name: 'Fatima Bello',
      role: 'Community Engagement Lead',
      bio: 'Fatima spearheads our efforts to connect with communities, ensuring our projects address real needs and foster meaningful impact.',
      image: '/images/team3.jpg', // Placeholder image
    },
    {
      name: 'Emeka Nwosu',
      role: 'Financial Director',
      bio: 'Emeka oversees fund allocation and transparency, ensuring every donation is used effectively to maximize impact across our initiatives.',
      image: '/images/team4.jpg', // Placeholder image
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Our Team - Crowdfunding Project</title>
        <meta name="description" content="Meet the dedicated team behind our crowdfunding mission to transform communities." />
      </Head>

      {/* Header is provided elsewhere */}
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">Our Dedicated Team</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            At Crowdfunding, our team is the heart of our mission to empower communities through crowdfunding. With expertise spanning technology, finance, and community engagement, we’re united in creating lasting change. Discover the passionate individuals driving our vision forward.
          </p>
          <p className="text-xl font-semibold text-black mt-4">
            Total Donations: ${donations}
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition mt-6"
          >
            Support Our Mission
          </Link>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition duration-300 flex items-center justify-center">
                    <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300">
                      Meet {member.name.split(' ')[0]}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Mission */}
        <section className="bg-black text-white py-16 px-8 rounded-lg mb-16">
          <h2 className="text-4xl font-bold text-center mb-6">Our Shared Vision</h2>
          <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed">
            Our team at Crowdfunding is driven by a collective passion to transform lives through crowdfunding. Whether it’s building learning hubs, providing clean water, or delivering healthcare, we’re committed to ensuring every donation makes a tangible impact. Join us in shaping a brighter future.
          </p>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block bg-white text-black py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 hover:text-white transition"
            >
              Support Our Values
            </Link>
          </div>
        </section>

        {/* Team Achievements */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-black mb-2">2,000+ Lives Touched</h3>
              <p className="text-gray-600">
                Our team has empowered thousands through education, healthcare, and sustainable initiatives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-black mb-2">6+ Projects Launched</h3>
              <p className="text-gray-600">
                From solar energy to clean water systems, we’ve driven impactful projects worldwide.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-black mb-2">${donations} Raised</h3>
              <p className="text-gray-600">
                With your support, we’ve raised funds to fuel our mission for change.
              </p>
            </div>
          </div>
        </section>

        {/* Team Values */}
        <section className="bg-gray-100 p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Innovation</h3>
              <p className="text-gray-600">
                We leverage technology and creative solutions to address community challenges effectively.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Integrity</h3>
              <p className="text-gray-600">
                Transparency and accountability guide our actions, ensuring trust in every donation.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Impact</h3>
              <p className="text-gray-600">
                Every project is designed to create meaningful, sustainable change for communities.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Support Our Values
            </Link>
          </div>
        </section>

        {/* Impact Stories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Our Team’s Impact Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">Empowering Youth</h3>
              <p className="text-gray-600">
                Led by Aisha and Chinedu, our team launched a coding bootcamp that empowered 300 students, with 60% securing tech internships.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-2">Clean Water Initiative</h3>
              <p className="text-gray-600">
                Fatima’s community outreach efforts helped provide clean water to 400 families, reducing waterborne diseases by 45%.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Support More Stories
            </Link>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-black text-white py-16 px-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Supporters Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "The team’s commitment to transparency and impact is unmatched. I’m proud to support their work."
              </p>
              <p className="text-gray-100 font-semibold">— Aisha M., Supporter</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <p className="text-gray-300 italic mb-4">
                "This team’s passion for change is inspiring. Their projects are making a real difference."
              </p>
              <p className="text-gray-100 font-semibold">— Chinedu O., Supporter</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block bg-white text-black py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
            >
              Join Our Supporters
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-white p-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-black mb-4">Be Part of Our Journey</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Our team is dedicated to transforming communities. Support our mission, explore our projects, or learn more about our vision in our whitepaper.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Donate Now
            </Link>
            <Link
              href="/project"
              className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition"
            >
              Explore Projects
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
      {/* Footer is provided elsewhere */}
    </div>
  );
}