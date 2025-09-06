import React from 'react';
import { 
  FaRobot, 
  FaBolt, 
  FaBullseye, 
  FaPalette, 
  FaMobile, 
  FaSync,
  FaSearch,
  FaRocket,
  FaReact,
  FaHeart,
  FaCog
} from 'react-icons/fa';
import { SiVite, SiHuggingface } from 'react-icons/si';
import { MdAnalytics, MdApi } from 'react-icons/md';
import { BiCodeBlock } from 'react-icons/bi';

const HomePage = ({ onTryAI }) => {
  const features = [
    {
      icon: FaRobot,
      title: "AI-Powered Analysis",
      description: "Utilizes advanced machine learning models to detect fake news patterns with high accuracy"
    },
    {
      icon: FaBolt,
      title: "Real-Time Processing",
      description: "Get instant analysis results with lightning-fast processing speed"
    },
    {
      icon: FaBullseye,
      title: "Confidence Scoring",
      description: "Provides percentage-based confidence levels for transparent and reliable predictions"
    },
    {
      icon: FaPalette,
      title: "Modern UI/UX",
      description: "Clean, glassmorphic design with smooth animations for an exceptional user experience"
    },
    {
      icon: FaMobile,
      title: "Responsive Design",
      description: "Works seamlessly across all device sizes and screen resolutions"
    },
    {
      icon: FaSync,
      title: "Loading Animations",
      description: "Interactive Quantum loader provides visual feedback during AI processing"
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      width: "100%",
      background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #0f1419 70%, #1a2332 100%)",
      fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
      color: "#ffffff",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2rem 1rem",
      boxSizing: "border-box"
    }}>
      {/* Hero Section */}
      <div style={{
        textAlign: "center",
        marginBottom: "4rem",
        maxWidth: "900px"
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2rem",
          padding: "0.8rem 2rem",
          background: "rgba(0, 0, 0, 0.4)",
          borderRadius: "50px",
          border: "1px solid rgba(34, 197, 94, 0.3)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(34, 197, 94, 0.1)",
          animation: "fadeInUp 1s ease-out"
        }}>
          <FaSearch style={{ fontSize: "3rem", color: "#22c55e" }} />
          <h1 style={{
            fontSize: "3rem",
            margin: "0",
            background: "linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "700"
          }}>Fake News Detector</h1>
        </div>
        
        <p style={{
          fontSize: "1.3rem",
          color: "rgba(255, 255, 255, 0.8)",
          margin: "0 0 1rem 0",
          lineHeight: "1.6",
          animation: "fadeInUp 1s ease-out 0.2s both"
        }}>
          Harness the power of AI to verify the authenticity of news content in real-time
        </p>
        
        <p style={{
          fontSize: "1.1rem",
          color: "rgba(255, 255, 255, 0.6)",
          margin: "0 0 3rem 0",
          lineHeight: "1.6",
          animation: "fadeInUp 1s ease-out 0.4s both"
        }}>
          Modern React app with Hugging Face AI for precise fake news detection.
        </p>

        {/* CTA Button */}
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          width: "100%" 
        }}>
          <button
            onClick={onTryAI}
            style={{
              padding: "1.2rem 3rem",
              borderRadius: "50px",
              border: "1px solid rgba(34, 197, 94, 0.5)",
              background: "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.3) 50%, rgba(5, 150, 105, 0.4) 100%)",
              backdropFilter: "blur(15px)",
              color: "#22c55e",
              fontSize: "1.2rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 15px 35px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(34, 197, 94, 0.2)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              animation: "fadeInUp 1s ease-out 0.6s both",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.8rem",
              margin: "0 auto"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px) scale(1.05)";
              e.target.style.boxShadow = "0 20px 40px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(34, 197, 94, 0.3)";
              e.target.style.background = "linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(16, 185, 129, 0.4) 50%, rgba(5, 150, 105, 0.5) 100%)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0) scale(1)";
              e.target.style.boxShadow = "0 15px 35px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(34, 197, 94, 0.2)";
              e.target.style.background = "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.3) 50%, rgba(5, 150, 105, 0.4) 100%)";
            }}
          >
            <FaRocket style={{ fontSize: "1.3rem" }} />
            Try AI Detector
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        width: "100%",
        maxWidth: "1200px",
        marginBottom: "4rem"
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "2.5rem",
          marginBottom: "3rem",
          background: "linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "600",
          animation: "fadeInUp 1s ease-out 0.8s both"
        }}>
          Powerful Features
        </h2>
        
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
          padding: "0 1rem"
        }}>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "20px",
                  padding: "2rem",
                  border: "1px solid rgba(34, 197, 94, 0.2)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(34, 197, 94, 0.1)",
                  transition: "all 0.3s ease",
                  animation: `fadeInUp 1s ease-out ${1 + index * 0.1}s both`,
                  cursor: "pointer"
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "translateY(-5px)";
                  e.target.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(34, 197, 94, 0.2)";
                  e.target.style.borderColor = "rgba(34, 197, 94, 0.4)";
                  e.target.style.background = "rgba(0, 0, 0, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(34, 197, 94, 0.1)";
                  e.target.style.borderColor = "rgba(34, 197, 94, 0.2)";
                  e.target.style.background = "rgba(0, 0, 0, 0.6)";
                }}
              >
                <div style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: "1rem"
                }}>
                  <IconComponent style={{
                    fontSize: "3rem",
                    color: "#22c55e"
                  }} />
                </div>
              <h3 style={{
                fontSize: "1.3rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "rgba(255, 255, 255, 0.9)",
                textAlign: "center"
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontSize: "1rem",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: "1.6",
                textAlign: "center",
                margin: "0"
              }}>
                {feature.description}
              </p>
            </div>
            );
          })}
        </div>
      </div>

      {/* Technology Stack Section */}
      <div style={{
        width: "100%",
        maxWidth: "800px",
        marginBottom: "4rem",
        textAlign: "center"
      }}>
        <h2 style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          background: "linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: "600",
          animation: "fadeInUp 1s ease-out 1.8s both"
        }}>
          Built with Modern Technology
        </h2>
        
        <div style={{
          background: "rgba(0, 0, 0, 0.6)",
          borderRadius: "20px",
          padding: "2rem",
          border: "1px solid rgba(34, 197, 94, 0.2)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(34, 197, 94, 0.1)",
          animation: "fadeInUp 1s ease-out 2s both"
        }}>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            alignItems: "center"
          }}>
            {[
              { name: "React 18", icon: FaReact, color: "#61dafb" },
              { name: "Vite", icon: SiVite, color: "#646cff" },
              { name: "Gradio API", icon: MdApi, color: "#22c55e" },
              { name: "Hugging Face AI Model", icon: SiHuggingface, color: "#ff6b35" },
              { name: "CSS-in-JS", icon: BiCodeBlock, color: "#f59e0b" }
            ].map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.8rem 1.5rem",
                    background: "rgba(0, 0, 0, 0.4)",
                    borderRadius: "25px",
                    border: "1px solid rgba(34, 197, 94, 0.2)",
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "rgba(255, 255, 255, 0.9)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = "rgba(34, 197, 94, 0.2)";
                    e.target.style.borderColor = "rgba(34, 197, 94, 0.4)";
                    e.target.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = "rgba(0, 0, 0, 0.4)";
                    e.target.style.borderColor = "rgba(34, 197, 94, 0.2)";
                    e.target.style.transform = "translateY(0)";
                  }}
                >
                  <IconComponent style={{ fontSize: "1.2rem", color: tech.color }} />
                  {tech.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: "auto",
        paddingTop: "2rem",
        paddingBottom: "1rem",
        width: "100%",
        textAlign: "center"
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0.8rem 2rem",
          background: "rgba(0, 0, 0, 0.4)",
          borderRadius: "50px",
          border: "1px solid rgba(34, 197, 94, 0.2)",
          backdropFilter: "blur(15px)",
          fontSize: "1rem",
          color: "rgba(255, 255, 255, 0.8)",
          fontWeight: "500",
          animation: "fadeInUp 1s ease-out 2.2s both",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(34, 197, 94, 0.1)"
        }}>
          <span>Made with</span>
          <FaHeart style={{
            fontSize: "1.2rem",
            color: "#ef4444",
            animation: "heartBeat 1.5s ease-in-out infinite"
          }} />
          <span>by <strong style={{
            background: "linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "600"
          }}>Souhardya</strong></span>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes heartBeat {
          0%, 50%, 100% {
            transform: scale(1);
          }
          25%, 75% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default HomePage;
