import React from 'react';

const Hero = () => (
  <section className="bg-neutral-900 text-white">
    <div className="max-w-screen-xl px-4 py-16 mx-auto grid gap-8 lg:grid-cols-12">
      {/* Content */}
      <div className="lg:col-span-7 flex flex-col justify-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Manage Your Library<br className="hidden sm:inline" /> Effortlessly
        </h1>
        <p className="text-lg md:text-xl mb-8 font-light text-gray-300">
          Streamline book lending, track members, and analyze trends—all with an intuitive dashboard designed for modern libraries.
        </p>
        <div>
          <a
            href="#get-started"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 focus:ring-4 focus:ring-cyan-300 text-white font-medium rounded-lg px-6 py-3 mr-4 transition"
          >
            Get Started
          </a>
          <a
            href="#demo"
            className="inline-block border border-gray-100 dark:border-gray-400 dark:text-white text-gray-900 hover:bg-neutral-800 hover:text-cyan-400 rounded-lg px-6 py-3 font-medium transition"
          >
            View Demo
          </a>
        </div>
      </div>
      {/* Image/Illustration */}
      <div className="lg:col-span-5 hidden lg:flex items-center justify-center">
        <img
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
          alt="Library Dashboard Illustration"
          className="w-full max-w-xs rounded-xl shadow-xl"
        />
      </div>
    </div>
  </section>
);

export default Hero;
