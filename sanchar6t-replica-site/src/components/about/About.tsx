import React from "react";
import { MapPin, Bus, Utensils, Church, Heart } from "lucide-react";
import Temple1 from "@/assets/temple1.jpg";
import Temple2 from "@/assets/temple2.jpg";
import Temple3 from "@/assets/temple3.jpg";
import Temple4 from "@/assets/temple4.jpg";
import Temple5 from "@/assets/temple5.jpg";

const AboutPage = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-black">
        <img
          src={Temple1}
          alt="Tirupati Temple"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl">
            Your Journey. Our Promise.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 text-center">
        <h2 className="text-3xl font-bold text-[#226cb2] mb-6">
          At Sanchar6T, We Believe in More Than Travel
        </h2>
        <p className="leading-relaxed text-lg max-w-4xl mx-auto text-gray-700 mb-6">
          At <span className="font-semibold">Sanchar6T</span>, we believe travel
          is more than just moving from one place to another — it's about
          creating seamless experiences and lasting memories. Specializing in
          Tirupati Balaji pilgrimages and custom travel solutions, we make your
          journey effortless, comfortable, and truly divine.
        </p>
        <p className="leading-relaxed text-lg max-w-4xl mx-auto text-gray-700">
          With years of expertise and a deep understanding of devotional travel,
          we curate all-inclusive Tirupati packages featuring:
        </p>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
          <Bus className="mx-auto h-10 w-10 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-lg">Hassle-free Travel</h3>
          <p className="text-gray-600">
            Luxury AC buses & private cabs for a smooth journey.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
          <Church className="mx-auto h-10 w-10 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-lg">VIP Darshan</h3>
          <p className="text-gray-600">
            Arrangements for a smooth Tirupati temple experience.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
          <Utensils className="mx-auto h-10 w-10 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-lg">Comfortable Stays</h3>
          <p className="text-gray-600">
            Authentic vegetarian meals & quality accommodations.
          </p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-lg transition">
          <Heart className="mx-auto h-10 w-10 text-yellow-600 mb-4" />
          <h3 className="font-semibold text-lg">Personalized Care</h3>
          <p className="text-gray-600">
            Assistance at every step for a worry-free pilgrimage.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-gray-50 py-12 px-6 md:px-12">
  <div className="max-w-6xl mx-auto grid md:grid-cols-1 gap-10 items-center">
    <div>
      <h2 className="text-2xl font-bold text-[#226cb2] mb-4">
        Our Founder’s Vision
      </h2>
      <p className="leading-relaxed text-gray-700 mb-4">
        Led by our founder <span className="font-semibold">KN Nagesh</span>,
        Sanchar6T is trusted by thousands of happy travelers who choose us
        for our reliability, transparency, and heartfelt service.
      </p>
      <p className="leading-relaxed text-gray-700">
        Whether you're embarking on a spiritual pilgrimage or planning a
        group journey, we ensure every detail is handled with care, so you
        can focus on what truly matters —{" "}
        <strong>your experience</strong>.
      </p>
    </div>
  </div>
</section>


      {/* Closing Section */}
      <section className="max-w-6xl mx-auto py-12 px-6 md:px-12 text-center">
        <h2 className="text-2xl font-bold text-[#226cb2] mb-4">
          Your Journey, Our Promise
        </h2>
        <p className="max-w-3xl mx-auto leading-relaxed text-gray-700">
          With Sanchar6T, every pilgrimage becomes a memory to cherish forever.
          We’re here to take care of the travel, while you focus on the divine
          blessings of Tirupati Balaji.
        </p>
        <img
          src={Temple2}
          alt="Journey"
          className="mx-auto mt-6 rounded-xl shadow-lg"
        />
      </section>
    </div>
  );
};

export default AboutPage;
