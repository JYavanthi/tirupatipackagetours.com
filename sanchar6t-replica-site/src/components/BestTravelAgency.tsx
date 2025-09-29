import templeIcon from "@/assets/temple-icon.jpg";

const BestTravelAgency = () => {
  return (
    <section style={{ backgroundColor: "#ffffff", padding: "clamp(40px, 8vw, 80px) 0" }}>
      <div>
<p
              style={{
                fontSize: "clamp(28px, 3vw, 31px)",
                color: "#6B4E3D",
                lineHeight: "1.6",
                marginBottom: "clamp(25px, 5vw, 40px)",
                fontFamily: "Inter, sans-serif",
                textAlign: "center",
                marginLeft: "78px"
              }}
            >
             Welcome to Sanchar6T - Your Trusted Partner For Tirupati Pilgrimage Package Tour
            </p>
      </div>
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
                fontSize: "clamp(32px, 6vw, 38px)",
                fontWeight: "700",
                color: "#B45309",
                marginBottom: "clamp(20px, 4vw, 30px)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.2",
                // textAlign: "center",
              }}
            >
              India's Best Travel Agency
            </h2>

           
            <div style={{ marginBottom: "clamp(25px, 5vw, 40px)" }}>
              <p
                style={{
                  fontSize: "clamp(25px, 2.5vw, 24px)",
                  color: "#6B4E3D",
                  lineHeight: "1.6",
                  marginBottom: "clamp(15px, 3vw, 20px)",
                  fontFamily: "Inter, sans-serif",
                  // textAlign: "justify",
                }}
              >
               Experience divine blessings with India's most reliable <strong>Bangalore to Tirupati bus package</strong> service. <strong>Sanchar6T</strong> specialises in comfortable, affordable spiritual journeys that transform your pilgrimage into an unforgettable sacred experience.
              </p>

              <p
                style={{
                  fontSize: "clamp(25px, 2.5vw, 24px)",
                  color: "#6B4E3D",
                  lineHeight: "1.6",
                  fontFamily: "Inter, sans-serif",
                  textAlign: "justify",
                }}
              >
               <strong>Srikalahasti</strong>, renowned as the "<strong>Kailasa of the South</strong>," is a holy abode where Lord Shiva bestows
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
                width: "clamp(270px, 36vw, 420px)",
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
