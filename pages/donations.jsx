import { useContext, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { CrowdFundingContext } from '../Context/CrowdFunding';

export default function donations() {
  const { donations } = useContext(CrowdFundingContext);
  const [customAmount, setCustomAmount] = useState('');
  const [error, setError] = useState('');

  const presetAmounts = [25, 50, 100, 250, 500];

  const handleCustomDonation = (e) => {
    e.preventDefault();
    const amount = parseFloat(customAmount);
    if (isNaN(amount) || amount <= 0) {
      setError('Please enter a valid donation amount.');
      return;
    }
    setCustomAmount('');
    setError('');
    // Redirect to main page (/) for donation processing
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black mb-4">Support Our Vision</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Your generosity fuels transformative initiatives that empower communities through education, healthcare, clean water, and sustainable energy. Every contribution brings us closer to a world where everyone thrives. Make a difference today!
          </p>
          <p className="text-xl font-semibold text-black mt-4">
            Total Donations: ${donations}
          </p>
          <Link
            href="/"
            className="inline-block bg-black text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-800 transition mt-6"
          >
            Donate Now
          </Link>
        </section>

        {/* Donation Options */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-6">Choose Your Contribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Select a Donation Amount</h3>
              <div className="grid grid-cols-2 gap-4">
                {presetAmounts.map((amount) => (
                  <Link
                    key={amount}
                    href="/"
                    className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition font-semibold text-center"
                  >
                    ${amount}
                  </Link>
                ))}
              </div>
              <form onSubmit={handleCustomDonation} className="mt-6">
                <label htmlFor="customAmount" className="block text-gray-700 font-medium mb-2">
                  Or Enter a Custom Amount
                </label>
                <input
                  type="number"
                  id="customAmount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  min="1"
                  step="0.01"
                />
                {error && <p className="text-red-600 mt-2">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 rounded-md mt-4 hover:bg-gray-800 transition font-semibold"
                >
                  Proceed to Donate
                </button>
              </form>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-black mb-4">Why Your Support Matters</h3>
              <p className="text-gray-600 leading-relaxed">
                Your donation directly funds initiatives that transform lives. Here’s how your contribution helps:
              </p>
              <ul className="list-disc list-inside text-gray-600 mt-4 space-y-2">
                <li>Provides coding bootcamps for underprivileged youth.</li>
                <li>Installs solar panels for sustainable energy in rural areas.</li>
                <li>Builds wells for clean water access in underserved communities.</li>
                <li>Delivers mobile healthcare to remote regions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact Highlights */}
        <section className="bg-black text-white py-16 px-8 rounded-lg mb-16">
          <h2 className="text-4xl font-bold text-center mb-6">Your Impact in Action</h2>
          <p className="text-lg max-w-3xl mx-auto text-center leading-relaxed">
            Every donation creates tangible change, from empowering students to improving community health. Your support drives our mission to build a brighter future.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold">$5,000</h3>
              <p className="text-gray-300">Funds a coding bootcamp for 20 students.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">$10,000</h3>
              <p className="text-gray-300">Powers 50 households with solar energy.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">$2,500</h3>
              <p className="text-gray-300">Provides clean water for 100 families.</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-block bg-white text-black py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
            >
              Make a Difference
            </Link>
          </div>
        </section>

        {/* Donation Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">Donation Tiers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Supporter</h3>
              <p className="text-gray-600 mb-4">$25 - $99</p>
              <p className="text-gray-600">Receive a thank-you email and website recognition.</p>
              <Link
                href="/"
                className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition inline-block"
              >
                Donate
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Champion</h3>
              <p className="text-gray-600 mb-4">$100 - $499</p>
              <p className="text-gray-600">Get a digital certificate and project updates.</p>
              <Link
                href="/"
                className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition inline-block"
              >
                Donate
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-black mb-2">Visionary</h3>
              <p className="text-gray-600 mb-4">$500+</p>
              <p className="text-gray-600">Receive a personalized thank-you video and VIP updates.</p>
              <Link
                href="/"
                className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition inline-block"
              >
                Donate
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gray-100 p-12 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-black text-center mb-8">What Our Donors Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Supporting the Clean Water Access project has been incredibly fulfilling. Knowing my donation helps families access safe water motivates me to give more."
              </p>
              <p className="text-black font-semibold">— Aisha M., Donor</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "The Community Learning Hub gave my daughter the skills to pursue a tech career. I’m proud to support this cause."
              </p>
              <p className="text-black font-semibold">— Chinedu O., Donor</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-black text-white p-12 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            Your support transforms lives and empowers communities. Explore our projects, meet our team, or read our whitepaper to learn how you can contribute.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/"
              className="inline-block bg-white text-black py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
            >
              Donate Now
            </Link>
            <Link
              href="/project"
              className="inline-block bg-white text-black py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
            >
              Explore Projects
            </Link>
            <Link
              href="/members"
              className="inline-block bg-white text-black py-3 px-6 rounded-md text-lg font-semibold hover:bg-gray-200 transition"
            >
              Meet Our Team
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}