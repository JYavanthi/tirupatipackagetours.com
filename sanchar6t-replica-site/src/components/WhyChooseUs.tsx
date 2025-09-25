import hotelsImg from "@/assets/hotels.png";
import serviceImg from "@/assets/class-service.png";
import priceImg from "@/assets/rupee.png";

const WhyChooseUs = () => {
  return (
    <section
      style={{
        backgroundColor: "#ffffff",
        padding: "clamp(40px, 8vw, 80px) 0",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "clamp(40px, 8vw, 60px)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 5vw, 42px)",
              fontWeight: "700",
              color: "#B45309",
              marginBottom: "20px",
              fontFamily: "Inter, sans-serif",
            }}
          >
            WHY CHOOSE US?
          </h2>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "clamp(25px, 5vw, 40px)",
          }}
        >
          {/* Feature 1 */}
          <div style={{ textAlign: "center" }}>
            <img
              src={hotelsImg}
              alt="Hand-Picked Hotels"
              style={{
                width: "clamp(80px, 12vw, 100px)", 
                height: "clamp(80px, 12vw, 100px)",
                objectFit: "contain",
                margin: "0 auto 20px", // centers image above text
                display: "block",
              }}
            />
            <h3
              style={{
                fontSize: "clamp(18px, 2.5vw, 20px)",
                fontWeight: "600",
                color: "#6B4E3D",
                marginBottom: "10px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Hand-Picked Hotels
            </h3>
          </div>

          {/* Feature 2 */}
          <div style={{ textAlign: "center" }}>
            <img
              src={serviceImg}
              alt="World Class Service"
              style={{
                width: "clamp(80px, 12vw, 100px)", 
                height: "clamp(80px, 12vw, 100px)",
                objectFit: "contain",
                margin: "0 auto 20px",
                display: "block",
              }}
            />
            <h3
              style={{
                fontSize: "clamp(18px, 2.5vw, 20px)",
                fontWeight: "600",
                color: "#6B4E3D",
                marginBottom: "10px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              World Class Service
            </h3>
          </div>

          {/* Feature 3 */}
          <div style={{ textAlign: "center" }}>
            <img
              src={priceImg}
              alt="Best Price Guarantee"
              style={{
                 width: "clamp(80px, 12vw, 100px)", 
                height: "clamp(80px, 12vw, 100px)",
                objectFit: "contain",
                margin: "0 auto 20px",
                display: "block",
              }}
            />
            <h3
              style={{
                fontSize: "clamp(18px, 2.5vw, 20px)",
                fontWeight: "600",
                color: "#6B4E3D",
                marginBottom: "10px",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Best Price Guarantee
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;


