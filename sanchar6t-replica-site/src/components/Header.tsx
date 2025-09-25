// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom"; 
// import logoImg from "@/assets/logo.png";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const menuItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: "Tirupathi Packages", path: "/tirupati-package" }, 
//     { name: "Contact", path: "/contact" },
//     { name: "Login/ Sign In", path: "/login" },
//   ];

//   return (
//     <header
//       style={{
//         backgroundColor: "#ffffff",
//         borderBottom: "1px solid #e0e0e0",
//         height: "105px", // fixed height for desktop
//         position: "sticky",
//         top: "0",
//         zIndex: "100",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "0 20px",
//           height: "100%",
//           flexWrap: "wrap",
//           gap: "20px",
//         }}
//       >
//         {/* Logo */}
//         <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
//           <Link to="/" style={{ display: "flex", alignItems: "center", height: "100%" }}>
//             <img
//               src={logoImg}
//               alt="Sanchar6T"
//               style={{
//                 height: "140%", // logo height relative to header
//                 width: "auto",
//                 objectFit: "contain",
//               }}
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav
//           className="hidden md:flex"
//           style={{
//             alignItems: "center",
//             gap: "40px",
//             flexWrap: "wrap",
//             justifyContent: "center",
//           }}
//         >
//           {menuItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               style={{
//                 color: "#6B4E3D",
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 textDecoration: "none",
//                 fontFamily: "Inter, sans-serif",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Hamburger Icon (Mobile) */}
//         <button
//           className="md:hidden"
//           onClick={() => setMenuOpen(!menuOpen)}
//           style={{ background: "none", border: "none", cursor: "pointer" }}
//         >
//           {menuOpen ? (
//             <X size={28} color="#6B4E3D" />
//           ) : (
//             <Menu size={28} color="#6B4E3D" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div
//           className="md:hidden"
//           style={{
//             backgroundColor: "#ffffff",
//             borderTop: "1px solid #e0e0e0",
//             padding: "10px 20px",
//             display: "flex",
//             flexDirection: "column",
//             gap: "16px",
//           }}
//         >
//           {menuItems.map((item) => (
//             <Link
//               key={item.name}
//               to={item.path}
//               style={{
//                 color: "#6B4E3D",
//                 fontSize: "18px",
//                 fontWeight: "600",
//                 textDecoration: "none",
//                 fontFamily: "Inter, sans-serif",
//               }}
//               onClick={() => setMenuOpen(false)} // closes menu after click
//             >
//               {item.name}
//             </Link>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;


import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; 
import logoImg from "@/assets/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about-us" },
    { name: "Tirupathi Packages", path: "/tirupati-package" }, 
    { name: "Contact", path: "/contact-us" },   // 🔹 updated path
   
  ];

  return (
    <header
      style={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e0e0e0",
        height: "105px", // fixed height for desktop
        position: "sticky",
        top: "0",
        zIndex: "100",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          height: "100%",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
          <Link to="/" style={{ display: "flex", alignItems: "center", height: "100%" }}>
            <img
              src={logoImg}
              alt="Sanchar6T"
              style={{
                height: "140%", // logo height relative to header
                width: "auto",
                objectFit: "contain",
              }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex"
          style={{
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                color: "#6B4E3D",
                fontSize: "18px",
                fontWeight: "600",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          {menuOpen ? (
            <X size={28} color="#6B4E3D" />
          ) : (
            <Menu size={28} color="#6B4E3D" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            backgroundColor: "#ffffff",
            borderTop: "1px solid #e0e0e0",
            padding: "10px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              style={{
                color: "#6B4E3D",
                fontSize: "18px",
                fontWeight: "600",
                textDecoration: "none",
                fontFamily: "Inter, sans-serif",
              }}
              onClick={() => setMenuOpen(false)} // closes menu after click
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
