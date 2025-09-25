// import React from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Mail, Lock, Phone, Eye } from "lucide-react";
// import Logo from "@/assets/logo.png";

// const ContactSignup = () => {
//   return (
//     <div className="min-h-screen flex bg-white font-sans">
//       {/* Left Section */}
//       <div className="flex-1 border-r border-gray-300 flex flex-col justify-center items-center px-10 mb-6">
//         <div className="w-full max-w-md">
//           {/* Temple Image */}
//           <div className="overflow-hidden border mb-6 mt-6 rounded-t-[200px]">
//             <img
//               src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/9e5e7cbcbd2a60a2f4f86dbddb6040af.jpg"
//               alt="Temple"
//               className="w-full h-[600px] object-cover"
//             />
//           </div>

//           {/* About Sanchar6T */}
//           <p className="text-sm text-gray-700 mb-6 text-center leading-relaxed">
//             At <span className="font-semibold">Sanchar6T</span>, we are
//             committed to making your spiritual journeys comfortable and
//             memorable. With carefully curated packages, expert guidance, and a
//             dedication to excellence, we ensure that your pilgrimage is seamless
//             and fulfilling.
//           </p>

//           {/* Package List */}
//           <div className="mb-4">
//             <Label className="block text-sm font-medium text-gray-700 mb-1">
//               Package List
//             </Label>
//             <select className="w-full border border-gray-300 rounded-md p-2 text-gray-700">
//               <option>Pick Your Destination</option>
//               <option>Tirupati Darshan</option>
//               <option>Kalahasti Tour</option>
//               <option>Kanipakam Visit</option>
//             </select>
//           </div>

//           {/* Feedback */}
//           <div className="mb-4">
//             <Label className="block text-sm font-medium text-gray-700 mb-1">
//               Feedback
//             </Label>
//             <textarea
//               rows="4"
//               className="w-full border border-gray-300 rounded-md p-2 text-gray-700"
//             />
//           </div>

//           {/* Submit Button */}
//           <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full py-2">
//             Submit
//           </Button>
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex-1 flex flex-col justify-center px-10">
//         <div className="w-full max-w-md mx-auto">
//           {/* Logo */}
//           <div className="flex justify-center mb-6">
//             <img src={Logo} alt="Sanchar6T Logo" className="h-20 w-auto" />
//           </div>

//           {/* Name */}
//           <div className="mb-4">
//             <Input placeholder="Name" className="border-gray-300" />
//           </div>

//           {/* Email */}
//           <div className="relative mb-4">
//             <Mail className="absolute left-3 top-3 h-5 w-5 text-yellow-600" />
//             <Input
//               type="email"
//               placeholder="Enter Email Address"
//               className="pl-10 border-gray-300"
//             />
//           </div>

//           {/* Password */}
//           <div className="relative mb-4">
//             <Lock className="absolute left-3 top-3 h-5 w-5 text-yellow-600" />
//             <Input
//               type="password"
//               placeholder="Password"
//               className="pl-10 border-gray-300"
//             />
//             <Eye className="absolute right-3 top-3 h-5 w-5 text-gray-500" />
//           </div>

//           {/* Phone Number */}
//           <div className="relative mb-4">
//             <Phone className="absolute left-3 top-3 h-5 w-5 text-yellow-600" />
//             <Input
//               type="tel"
//               placeholder="Phone Number"
//               className="pl-10 border-gray-300"
//             />
//           </div>

//           {/* Checkbox */}
//           <div className="flex items-start mb-6">
//             <input type="checkbox" className="mt-1 mr-2" />
//             <p className="text-xs text-gray-600">
//               By providing your phone number, you agree to receive SMS updates
//               from Sanchar6T. Message/data rates may apply.
//             </p>
//           </div>

//           {/* Sign Up Button */}
//           <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full py-2">
//             Sign Up
//           </Button>

//           {/* Terms */}
//           <p className="text-xs text-gray-500 text-center mt-4">
//             By Signing Up, you agree to our{" "}
//             <a href="#" className="underline">
//               Terms
//             </a>{" "}
//             and{" "}
//             <a href="#" className="underline">
//               Privacy Policy
//             </a>.
//           </p>
//           <p className="text-xs text-gray-500 text-center mt-2">
//             Already have an account?{" "}
//             <a href="#" className="underline">
//               Sign in
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSignup;

// contact us page according to the canva design



import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User } from "lucide-react";
import Logo from "@/assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactSignup = () => {
  const [packages, setPackages] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [feedback, setFeedback] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/package-list");
        const data = await response.json();
        setPackages(data);
      } catch (err) {
        console.error("Error fetching packages:", err);
      }
    };
    fetchPackages();
  }, []);

  const handleSubmit = async () => {
    if (!name) {
      toast.error("Name is required");
      return;
    }
    if (!email) {
      toast.error("Email is required");
      return;
    }
    if (!phone) {
      toast.error("Phone number is required");
      return;
    }
    if (!feedback) {
      toast.error("Feedback is required");
      return;
    }
    if (!selectedPackage) {
      toast.error("Please select a package");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/submit-feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          contactNo: phone,
          emailId: email,
          userFeedback: feedback,
          packageId: selectedPackage,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setShowPopup(true);
        setName("");
        setEmail("");
        setPhone("");
        setFeedback("");
        setSelectedPackage("");
      } else {
        toast.error("Failed to submit feedback");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error, please try again later");
    }
  };

  return (
    <div className="min-h-screen flex bg-white font-sans relative">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-10 border-r border-gray-300">
        <div className="w-full max-w-md">
          <div className="overflow-hidden border mb-6 mt-6 rounded-t-[200px]">
            <img
              src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/9e5e7cbcbd2a60a2f4f86dbddb6040af.jpg"
              alt="Temple"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <p className="text-xl text-gray-700 mb-6 text-center leading-relaxed">
            At <span className="font-semibold">Sanchar6T</span>, we are committed
            to making your spiritual journeys comfortable and memorable. With
            carefully curated packages, expert guidance, and a dedication to
            excellence, we ensure that your pilgrimage is seamless and fulfilling.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col justify-center px-10">
        <div className="w-full max-w-md mx-auto">
          <div className="flex justify-center">
            <img src={Logo} alt="Sanchar6T Logo" className="h-60 w-auto" />
          </div>

          {/* Name */}
          <div className="relative mb-4">
            <User className="absolute left-3 top-3 h-6 w-6 text-yellow-600" />
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              className="pl-12 border-gray-300 text-lg"
            />
          </div>

          {/* Email */}
          <div className="relative mb-4">
            <Mail className="absolute left-3 top-3 h-6 w-6 text-yellow-600" />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter Email Address"
              className="pl-12 border-gray-300 text-lg"
            />
          </div>

          {/* Phone Number */}
          <div className="relative mb-4">
            <Phone className="absolute left-3 top-3 h-6 w-6 text-yellow-600" />
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Phone Number"
              className="pl-12 border-gray-300 text-lg"
            />
          </div>

          {/* Package List */}
          <div className="mb-4">
            <Label className="block text-xl font-medium text-gray-700 mb-1">
              Package List
            </Label>
            <select
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700 text-lg"
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
            >
              <option value="">Pick Your Destination</option>
              {packages.map((pkg) => (
                <option key={pkg.PackageID} value={pkg.PackageID}>
                  {pkg.PackageName}
                </option>
              ))}
            </select>
          </div>

          {/* Feedback */}
          <div className="mb-4">
            <Label className="block text-xl font-medium text-gray-700 mb-1">
              Feedback
            </Label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              rows="4"
              className="w-full border border-gray-300 rounded-md p-2 text-gray-700 text-lg"
            />
          </div>

          {/* Submit Button */}
          <Button
            onClick={handleSubmit}
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full py-2 text-lg"
          >
            Submit
          </Button>
        </div>
      </div>

      {/* Custom Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-sm w-full text-center">
            <h2 className="text-2xl font-bold mb-4 text-green-600">
              Thank You!
            </h2>
            <p className="mb-6 text-gray-700">
              Your feedback has been submitted successfully. We will get back to you soon.
            </p>
            <Button
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-full py-2 px-6"
              onClick={() => setShowPopup(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default ContactSignup;


