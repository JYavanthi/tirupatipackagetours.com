// import templeIcon from "@/assets/temple-icon.jpg";

// const BestTravelAgency = () => {
//   return (
//     <section style={{ backgroundColor: "#ffffff", padding: "clamp(40px, 8vw, 80px) 0" }}>
//       <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
//         <div 
//           style={{ 
//             display: "grid", 
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
//             gap: "clamp(30px, 6vw, 60px)", 
//             alignItems: "center" 
//           }}
//         >
//           {/* Left side - Temple illustration */}
//           <div style={{ textAlign: "center", order: "2" }}>
//             <img 
//               // src={templeIcon} 
//               src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/e31a0788537379626695b1c5edd448e6.png"
//               alt="Temple" 
//               style={{ 
//                 width: "clamp(200px, 30vw, 300px)", 
//                 height: "clamp(200px, 30vw, 300px)", 
//                 objectFit: "cover",
//                 borderRadius: "8px"
//               }}
//             />
//           </div>

//           {/* Right side - Content */}
//           <div style={{ order: "1" }}>
//             <h2 
//               style={{ 
//                 fontSize: "clamp(32px, 6vw, 48px)",
//                 fontWeight: "700",
//                 color: "#B45309",
//                 marginBottom: "clamp(20px, 4vw, 30px)",
//                 fontFamily: "Inter, sans-serif",
//                 lineHeight: "1.2",
//                 textAlign: "center"
//               }}
//             >
//               India's Best Travel Agency
//             </h2>
            
//             <p 
//               style={{ 
//                 fontSize: "clamp(16px, 2.5vw, 18px)",
//                 color: "#6B4E3D",
//                 lineHeight: "1.6",
//                 marginBottom: "clamp(25px, 5vw, 40px)",
//                 fontFamily: "Inter, sans-serif",
//                 textAlign: "center"
//               }}
//             >
//               Our goal is to help guests experience the best vacation by visiting the most 
//               desirable destinations at an outstanding value across India
//             </p>

//             <div style={{ marginBottom: "clamp(25px, 5vw, 40px)" }}>
//               <p 
//                 style={{ 
//                   fontSize: "clamp(14px, 2vw, 16px)",
//                   color: "#6B4E3D",
//                   lineHeight: "1.6",
//                   marginBottom: "clamp(15px, 3vw, 20px)",
//                   fontFamily: "Inter, sans-serif",
//                   textAlign: "justify"
//                 }}
//               >
//                 Tirupati, the abode of Lord Venkateswara, welcomes millions of devotees to experience 
//                 unwavering faith, divine grace, and spiritual fulfillment atop the sacred Tirumala hills.
//               </p>
              
//               <p 
//                 style={{ 
//                   fontSize: "clamp(14px, 2vw, 16px)",
//                   color: "#6B4E3D",
//                   lineHeight: "1.6",
//                   fontFamily: "Inter, sans-serif",
//                   textAlign: "justify"
//                 }}
//               >
//                 Srikalahasti, renowned as the "Kailasa of the South," is a holy abode where Lord Shiva bestows 
//                 divine energy and peace. Known for its powerful Rahu–Ketu pooja, this pilgrimage inspires inner 
//                 strength, devotion, and spiritual cleansing.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default BestTravelAgency;

import templeIcon from "@/assets/temple-icon.jpg";

const BestTravelAgency = () => {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "clamp(40px, 8vw, 80px) 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr", // fixed equal spacing
            gap: "clamp(30px, 4vw, 40px)", // controlled balanced gap
            alignItems: "center",
          }}
        >
          {/* Left side - Content */}
          <div style={{ order: "1" }}>
            <h2
              style={{
                fontSize: "clamp(32px, 6vw, 48px)",
                fontWeight: "700",
                color: "#B45309",
                marginBottom: "clamp(20px, 4vw, 30px)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.2",
                textAlign: "center",
              }}
            >
              India's Best Travel Agency
            </h2>

            <p
              style={{
                fontSize: "clamp(16px, 2.5vw, 18px)",
                color: "#6B4E3D",
                lineHeight: "1.6",
                marginBottom: "clamp(25px, 5vw, 40px)",
                fontFamily: "Inter, sans-serif",
                textAlign: "center",
              }}
            >
              Our goal is to help guests experience the best vacation by visiting the most
              desirable destinations at an outstanding value across India
            </p>

            <div style={{ marginBottom: "clamp(25px, 5vw, 40px)" }}>
              <p
                style={{
                  fontSize: "clamp(14px, 2vw, 16px)",
                  color: "#6B4E3D",
                  lineHeight: "1.6",
                  marginBottom: "clamp(15px, 3vw, 20px)",
                  fontFamily: "Inter, sans-serif",
                  textAlign: "justify",
                }}
              >
                Tirupati, the abode of Lord Venkateswara, welcomes millions of devotees to experience
                unwavering faith, divine grace, and spiritual fulfillment atop the sacred Tirumala hills.
              </p>

              <p
                style={{
                  fontSize: "clamp(14px, 2vw, 16px)",
                  color: "#6B4E3D",
                  lineHeight: "1.6",
                  fontFamily: "Inter, sans-serif",
                  textAlign: "justify",
                }}
              >
                Srikalahasti, renowned as the "Kailasa of the South," is a holy abode where Lord Shiva bestows
                divine energy and peace. Known for its powerful Rahu–Ketu pooja, this pilgrimage inspires inner
                strength, devotion, and spiritual cleansing.
              </p>
            </div>
          </div>

          {/* Right side - Temple illustration */}
          <div style={{ textAlign: "center", order: "2" }}>
            <img
              // src={templeIcon}
              src="https://productcatalo.my.canva.site/sanchar6t/_assets/media/e31a0788537379626695b1c5edd448e6.png"
              alt="Temple"
              style={{
                width: "clamp(220px, 28vw, 300px)",
                height: "auto",
                objectFit: "cover",
                borderRadius: "12px",
                margin: "0 auto",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestTravelAgency;
