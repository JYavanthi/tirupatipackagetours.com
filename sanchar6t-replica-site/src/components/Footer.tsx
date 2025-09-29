// import logoImg from "@/assets/logo.png";

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: "#ffea92", padding: "clamp(40px, 8vw, 60px) 0 20px", position: "relative" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
//         <div 
//           style={{ 
//             display: "grid", 
//             gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
//             gap: "clamp(30px, 6vw, 60px)", 
//             marginBottom: "clamp(25px, 5vw, 40px)" 
//           }}
//         >
//           {/* Left Column - Logo and Description */}
//           <div style={{ textAlign: "center" }}>
//             <img 
//               src={logoImg} 
//               alt="Sanchar6T" 
//               style={{ 
//                 height: "clamp(80px, 12vw, 120px)", 
//                 width: "auto",
//                 marginBottom: "20px",
//               }}
//             />
            
//             <p 
//               style={{ 
//                 fontSize: "clamp(14px, 2vw, 16px)",
//                 color: "#4d361b",
//                 lineHeight: "1.6",
//                 fontFamily: "Inter, sans-serif",
//                 textAlign: "justify"
//               }}
//             >
//               Sanchar6t, under the leadership of proprietor KN Nagesh, is a distinguished 
//               service provider in the realms of bus booking and tourism, renowned for its 
//               specialization in Tirupati Balaji and special darshan packages.
//             </p>
//           </div>

//           {/* Right Column - Contact Info (slightly down) */}
//           <div style={{ textAlign: "left", marginTop: "30px" }}>
//             <h3 
//               style={{ 
//                 fontSize: "clamp(20px, 3vw, 24px)",
//                 fontWeight: "600",
//                 color: "#4d361b",
//                 marginBottom: "20px",
//                 fontFamily: "Inter, sans-serif"
//               }}
//             >
//               Contact Info
//             </h3>
            
//             <div style={{ marginBottom: "15px", textAlign: "left", display: "inline-block" }}>
//   <style>
//     {`
//       .contact-list li {
//         color: #4d361b; /* bullet and text color */
//       }
//     `}
//   </style>
//   <ol 
//     className="contact-list"
//     style={{ 
//       paddingLeft: "20px", 
//       margin: 0, 
//       fontSize: "clamp(14px, 2vw, 16px)", 
//       listStylePosition: "inside", 
//       fontFamily: "Inter, sans-serif" 
//     }}
//   >
//     <li>+91 9731312275</li>
//     <li>+91 8197882511</li>
//   </ol>
// </div>


            
//             <div style={{ display: "inline-block", textAlign: "left", maxWidth: "100%" }}>
//               <p 
//                 style={{ 
//                   fontSize: "clamp(14px, 2vw, 16px)",
//                   color: "#4d361b",
//                   lineHeight: "1.6",
//                   fontFamily: "Inter, sans-serif",
//                   whiteSpace: "normal", // allows wrapping
//                   margin: 0
//                 }}
//               >
//                 #293, 17th cross, sampige road, malleshwaram, 2nd floor, Above Vodafone outlet, OPP to Vijaylakshmi Silk and Sarees.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Section */}
//         <div 
//           style={{ 
//             borderTop: "1px solid #9CA3AF",
//             paddingTop: "20px",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "center",
//             flexWrap: "wrap",
//             gap: "20px",
//             textAlign: "center"
//           }}
//         >
//           {/* Copyright */}
//           <p 
//             style={{ 
//               fontSize: "clamp(12px, 2vw, 14px)",
//               color: "#4d361b",
//               fontFamily: "Inter, sans-serif",
//               flex: "1",
//               minWidth: "250px"
//             }}
//           >
//             © Copyright Sanchar6T Tours and Travels - Designed By TechVaraha
//           </p>

//           {/* Footer Links */}
//           <div 
//             style={{ 
//               display: "flex", 
//               gap: "clamp(15px, 3vw, 20px)",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             <a 
//               href="#" 
//               style={{ 
//                 fontSize: "clamp(12px, 2vw, 14px)",
//                 color: "#4d361b",
//                 textDecoration: "none",
//                 fontFamily: "Inter, sans-serif",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               Home
//             </a>
//             <a 
//               href="#" 
//               style={{ 
//                 fontSize: "clamp(12px, 2vw, 14px)",
//                 color: "#4d361b",
//                 textDecoration: "none",
//                 fontFamily: "Inter, sans-serif",
//                 whiteSpace: "nowrap"
//               }}
//             >
//               Sarva Darshan
//             </a>
//             <a 
//               href="#" 
//               style={{ 
//                 fontSize: "clamp(12px, 2vw, 14px)",
//                 color: "#4d361b",
//                 textDecoration: "none",
//                 fontFamily: "Inter, sans-serif",
//                 whiteSpace: "nowrap"
//               }}
//             >
//               Make Payment
//             </a>
//             <a 
//               href="#" 
//               style={{ 
//                 fontSize: "clamp(12px, 2vw, 14px)",
//                 color: "#4d361b",
//                 textDecoration: "none",
//                 fontFamily: "Inter, sans-serif",
//                 whiteSpace: "nowrap"
//               }}
//             >
//               Contact Us
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Canva Image at Top-Right of Footer */}
//       <img
//         src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/35d5de4b01073214c3ffce81e8218d28.png"
//         alt="Decoration"
//         style={{
//           position: "absolute",   
//           top: "-50%",            
//           right: "0%", 
//           width: "354.115px",
//           height: "290.375px",
//           objectFit: "cover",
//           pointerEvents: "none",
//         }}
//       />
//     </footer>
//   );
// };

// export default Footer;

// the above code is working but a temple logo is at top 

import logoImg from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#ffea92",
        padding: "clamp(40px, 8vw, 60px) 0 20px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        {/* Three Equal Sections */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(30px, 6vw, 60px)",
            marginBottom: "clamp(25px, 5vw, 40px)",
            alignItems: "start", // Align all sections at top
          }}
        >
          {/* Left Section - Logo + Text */}
          <div style={{ textAlign: "center" }}>
            <img
              src={logoImg}
              alt="Sanchar6T"
              style={{
                height: "clamp(80px, 12vw, 140px)",
                width: "auto",
                marginBottom: "20px",
              }}
            />
            <p
              style={{
                fontSize: "clamp(14px, 2vw, 20px)",
                color: "#4d361b",
                lineHeight: "1.6",
                fontFamily: "Inter, sans-serif",
                textAlign: "justify",
              }}
            >
              Sanchar6t, under the leadership of proprietor KN Nagesh, is a
              distinguished service provider in the realms of bus booking and
              tourism, renowned for its specialization in Tirupati Balaji and
              special darshan packages.
            </p>
          </div>

          {/* Middle Section - Contact Info */}
          <div style={{ textAlign: "left" ,marginTop:"106px"}}>
            <h3
              style={{
                fontSize: "clamp(20px, 3vw, 24px)",
                fontWeight: "600",
                color: "#4d361b",
                marginBottom: "20px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Contact Info
            </h3>

            <div
              style={{
                marginBottom: "15px",
                textAlign: "left",
                display: "inline-block",
              }}
            >
              <style>
                {`
                  .contact-list li {
                    color: #4d361b;
                  }
                `}
              </style>
              <ol
                className="contact-list"
                style={{
                 
                  margin: 0,
                  fontSize: "clamp(14px, 2vw, 20px)",
                  listStylePosition: "inside",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                <li>+91 9731312275</li>
                <li>+91 8197882511</li>
              </ol>
            </div>

            <div
              style={{
                display: "inline-block",
                textAlign: "left",
                maxWidth: "100%",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(14px, 2vw, 20px)",
                  color: "#4d361b",
                  lineHeight: "1.6",
                  fontFamily: "Inter, sans-serif",
                  whiteSpace: "normal",
                  margin: 0,
                }}
              >
                2767, Advaitha, 3rd Floor, D Block, near BBMP Ward Office, Defence Layout, Sahakar Nagar, Bengaluru, Karnataka 560092.
              </p>
            </div>
          </div>

          {/* Right Section - Temple Image */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <img
              src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/35d5de4b01073214c3ffce81e8218d28.png"
              alt="Decoration"
              style={{
                width: "354.115px",
                height: "290.375px",
                
                objectFit: "cover",
                pointerEvents: "none",
              }}
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div
          style={{
            borderTop: "1px solid #9CA3AF",
            paddingTop: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "clamp(12px, 2vw, 20px)",
              color: "#4d361b",
              fontFamily: "Inter, sans-serif",
              flex: "1",
              minWidth: "250px",
            }}
          >
            © Copyright Sanchar6T Tours and Travels - Powered By TechVaraha
          </p>

          <div
            style={{
              display: "flex",
              gap: "clamp(15px, 3vw, 20px)",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >

            <a
              href="#"
              style={{
                fontSize: "clamp(12px, 2vw, 20px)",
                color: "#4d361b",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Home
            </a>
            <Link to="/privacy-policy">
            <a
              href="#"
              style={{
                fontSize: "clamp(12px, 2vw, 20px)",
                color: "#4d361b",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Privacy Policy
            </a>
            </Link>
            <Link to="/tc">
            <a
              href="#"
              style={{
                fontSize: "clamp(12px, 2vw, 20px)",
                color: "#4d361b",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Terms and Conditions
            </a>
            </Link>
            <Link to="/contact-us">
            <a
              href="#"
              style={{
                fontSize: "clamp(12px, 2vw, 20px)",
                color: "#4d361b",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Contact Us
            </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

