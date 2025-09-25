
// import React from "react";

// const TirupatiPakage = () => {
//   return (
//     <div className="w-full font-sans text-gray-800">
//       {/* Hero Section */}
//       <section className="relative w-full h-[550px] flex items-center justify-start">
//         {/* Background Image */}
//         <img
//           src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/e22d8701f66d4f0f53145840b35f2a93.jpg"
//           alt="Tirupati"
//           className="absolute inset-0 w-full h-full object-cover"
//         />

//         {/* ✅ Fixed Image on Right Side (Shifted Left) */}
//         <img
//           src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/bf232ac6034f03c6428ea84a47dbf921.png"
//           alt="Right Side Decoration"
//           className="absolute h-[80%] object-contain z-20 pointer-events-none"
//           style={{ top: '110px', right: '80px', transform: 'translateY(0)' }}
//         />

//         {/* Overlay Content - Left Aligned */}
//         <div className="relative z-10 text-left px-6 md:px-16" style={{ maxWidth: '600px' }}>
//           <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-snug">
//             Discover Tirupati by Bus & Temple Trails – <br />
//             <span className="text-[#ffea92]">
//               2 Days 1 Night 
//             </span>
//             ( Free Dharshan )
//           </h2>
//           <button className="bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
//             Book Now &gt;
//           </button>
//         </div>
//       </section>

//       {/* Details Section */}
//       <section className="bg-white py-12 px-6 md:px-16">
//         <p className="mb-6 leading-relaxed">
//           We are pleased to present our Tirupati Dharma Darshan. Please ensure
//           that all participants carry their original Aadhar cards during travel.
//           <br />
//           Below is the travel itinerary for the{" "}
//           <strong>
//             Tirupati 1 Night / 1 Days Dharma Darshan (Free Darshan)
//           </strong>
//         </p>

//         {/* Itinerary */}
//         <div className="space-y-4">
//           <h3 className="font-bold text-lg">Day 01:</h3>
//           <p>
//             07:30 PM: Departure from Bangalore majestic bus stand to Tirupati via
//             A/C Sleeper Bus. Overnight journey.
//           </p>

//           <h3 className="font-bold text-lg">Day 02:</h3>
//           <ul className="list-disc list-inside space-y-2">
//             <li>Early morning arrival in Tirupati.</li>
//             <li>
//               Upon reaching Tirupati, check into the hotel for a brief freshening
//               up (45 to 60 minutes allotted, each room 2 members).
//             </li>
//             <li>Following your freshening up, breakfast will be served.</li>
//             <li>
//               After breakfast, depart for Tirumala via APSRTC Non A/C bus.
//             </li>
//             <li>1 hour time will be given for Tonsure (Head Shave/Mundan).</li>
//             <li>
//               Participate in Dharma Darshanam at Tirumala Sri Venkateshwara
//               Swamy Devasthanam (duration may vary from 2 to 3 hours or more,
//               depending on the crowd), Laddu Prasadam will be Provided.
//             </li>
//             <li>After the darshanam, return to the same hotel for lunch.</li>
//             <li>
//               Following lunch, (Padmavati ammarvaru darshana depending on time
//               line).
//             </li>
//             <li>Proceed back to Bangalore via A/C Sleeper Bus.</li>
//             <li>
//               Arrival in Bangalore on the same night. The tour concludes with the
//               blessings of Lord Venkateshwara.
//             </li>
//           </ul>
//         </div>

//         {/* Dress Code */}
//         <div className="mt-8">
//           <h3 className="font-bold">Dress code - Traditional wear Only</h3>
//           <p>Men - Kurta-Pajama & Dhoti</p>
//           <p>Women - Saree, Churidar with Pyjama and Dupatta</p>
//         </div>

//         {/* Button */}
//         <div className="mt-8">
//           <button className="bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
//             Book Now &gt;
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default TirupatiPakage;

import React from "react";
import { Link } from "react-router-dom";

const TirupatiPakage = () => {
  return (
    <div className="w-full font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-[550px] flex items-center justify-start">
        {/* Background Image */}
        <img
          src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/e22d8701f66d4f0f53145840b35f2a93.jpg"
          alt="Tirupati"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* ✅ Fixed Image on Right Side (Shifted Left) */}
        <img
          src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/bf232ac6034f03c6428ea84a47dbf921.png"
          alt="Right Side Decoration"
          className="absolute h-[80%] object-contain z-20 pointer-events-none"
          style={{ top: '110px', right: '120px', transform: 'translateY(0)' }}
        />

        {/* Overlay Content - Left Aligned */}
        <div
          className="relative z-10 text-left px-6 md:px-16"
          style={{ maxWidth: '700px' }} // increased width to reduce wrapping
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-snug">
            Discover Tirupati by Bus & Temple Trails – <br />
            <span className="text-[#ffea92]">
              2 Days 1 Night
            </span>
            ( Free Dharshan )
          </h2>
          <Link to="/contact-us">
          <button className="bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
            Book Now &gt;
          </button>
          </Link>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white py-12 px-6 md:px-16">
        <p className="mb-6 leading-relaxed">
          We are pleased to present our Tirupati Dharma Darshan. Please ensure
          that all participants carry their original Aadhar cards during travel.
          <br />
          Below is the travel itinerary for the{" "}
          <strong>
            Tirupati 1 Night / 1 Days Dharma Darshan (Free Darshan)
          </strong>
        </p>

        {/* Itinerary */}
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Day 01:</h3>
          <p>
            07:30 PM: Departure from Bangalore majestic bus stand to Tirupati via
            A/C Sleeper Bus. Overnight journey.
          </p>

          <h3 className="font-bold text-lg">Day 02:</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Early morning arrival in Tirupati.</li>
            <li>
              Upon reaching Tirupati, check into the hotel for a brief freshening
              up (45 to 60 minutes allotted, each room 2 members).
            </li>
            <li>Following your freshening up, breakfast will be served.</li>
            <li>
              After breakfast, depart for Tirumala via APSRTC Non A/C bus.
            </li>
            <li>1 hour time will be given for Tonsure (Head Shave/Mundan).</li>
            <li>
              Participate in Dharma Darshanam at Tirumala Sri Venkateshwara
              Swamy Devasthanam (duration may vary from 2 to 3 hours or more,
              depending on the crowd), Laddu Prasadam will be Provided.
            </li>
            <li>After the darshanam, return to the same hotel for lunch.</li>
            <li>
              Following lunch, (Padmavati ammarvaru darshana depending on time
              line).
            </li>
            <li>Proceed back to Bangalore via A/C Sleeper Bus.</li>
            <li>
              Arrival in Bangalore on the same night. The tour concludes with the
              blessings of Lord Venkateshwara.
            </li>
          </ul>
        </div>

        {/* Dress Code */}
        <div className="mt-8">
          <h3 className="font-bold">Dress code - Traditional wear Only</h3>
          <p>Men - Kurta-Pajama & Dhoti</p>
          <p>Women - Saree, Churidar with Pyjama and Dupatta</p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <Link to="/contact-us">
          <button className="bg-yellow-400 text-[#6B4E3D] font-bold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition">
            Book Now &gt;
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TirupatiPakage;
