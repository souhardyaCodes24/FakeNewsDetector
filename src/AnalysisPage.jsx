import { useState } from "react";
import { Client } from "@gradio/client";
import { Quantum } from 'ldrs/react';
import 'ldrs/react/Quantum.css';
import { 
  FaSearch, 
  FaArrowLeft, 
  FaChartBar, 
  FaBullseye, 
  FaCheckCircle, 
  FaTimesCircle,
  FaHeart,
  FaLightbulb
} from 'react-icons/fa';

const AnalysisPage = ({ onBackToHome }) => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const checkNews = async () => {
    setLoading(true);
    setResult(null); // Clear previous results
    
    try {
      const client = await Client.connect("SoAIdya/FakeNews"); 
      const output = await client.predict("/predict", { text: inputText });

      console.log(output.data); // raw output
      // result is a string like: "false (0.25)"
      const raw = output.data[0];
      // split into label and score
      const match = raw.match(/(true|false)\s*\(([\d.]+)\)/i);

      if (match) {
        setResult({
          label: match[1].toUpperCase(),
          score: parseFloat(match[2]),
        });
      } else {
        setResult({ label: raw, score: null });
      }
    } catch (err) {
      console.error(err);
      setResult({ label: "Error calling API", score: null });
    } finally {
      setLoading(false);
    }
  };

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
      {/* Header Section with Back Button */}
      <div style={{
        width: "100%",
        maxWidth: "800px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "2rem",
        animation: "fadeInUp 1s ease-out"
      }}>
        <button
          onClick={onBackToHome}
          style={{
            padding: "0.8rem 1.5rem",
            borderRadius: "25px",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            background: "rgba(0, 0, 0, 0.4)",
            color: "#22c55e",
            fontSize: "1rem",
            fontWeight: "500",
            cursor: "pointer",
            transition: "all 0.3s ease",
            backdropFilter: "blur(15px)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(34, 197, 94, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}
          onMouseEnter={(e) => {
            e.target.style.background = "rgba(34, 197, 94, 0.2)";
            e.target.style.borderColor = "rgba(34, 197, 94, 0.4)";
            e.target.style.transform = "translateX(-2px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background = "rgba(0, 0, 0, 0.4)";
            e.target.style.borderColor = "rgba(34, 197, 94, 0.3)";
            e.target.style.transform = "translateX(0)";
          }}
        >
          <FaArrowLeft style={{ fontSize: "1.1rem" }} />
          Back to Home
        </button>
        
        <div style={{ flex: 1 }}></div>
      </div>

      {/* Title Section */}
      <div style={{
        textAlign: "center",
        marginBottom: "3rem",
        maxWidth: "800px",
        animation: "fadeInUp 1s ease-out 0.2s both"
      }}>
        <div style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "1rem",
          padding: "0.5rem 1.5rem",
          background: "rgba(0, 0, 0, 0.4)",
          borderRadius: "50px",
          border: "1px solid rgba(34, 197, 94, 0.3)",
          backdropFilter: "blur(15px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(34, 197, 94, 0.1)"
        }}>
          <FaSearch style={{ fontSize: "2.5rem", color: "#22c55e" }} />
          <h1 style={{
            fontSize: "2.5rem",
            margin: "0",
            background: "linear-gradient(135deg, #22c55e 0%, #10b981 50%, #059669 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "700"
          }}>Fake News Detector</h1>
        </div>
        <p style={{
          fontSize: "1.1rem",
          color: "rgba(255, 255, 255, 0.7)",
          margin: "0",
          lineHeight: "1.6"
        }}>Harness the power of AI to verify the authenticity of news content in real-time</p>
      </div>

      {/* Input Section */}
      <div style={{
        width: "100%",
        maxWidth: "700px",
        marginBottom: "2rem",
        animation: "fadeInUp 1s ease-out 0.4s both"
      }}>
        <div style={{
          background: "rgba(0, 0, 0, 0.6)",
          borderRadius: "20px",
          padding: "2rem",
          border: "1px solid rgba(34, 197, 94, 0.2)",
          backdropFilter: "blur(20px)",
          boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(34, 197, 94, 0.1)"
        }}>
          <label style={{
            display: "block",
            fontSize: "1.1rem",
            fontWeight: "600",
            marginBottom: "1rem",
            color: "rgba(255, 255, 255, 0.9)"
          }}>Enter news headline to analyze:</label>
          
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your news article or text here for fact-checking..."
            rows={4}
            style={{
              width: "100%",
              padding: "1.2rem",
              borderRadius: "15px",
              border: "2px solid rgba(255, 255, 255, 0.1)",
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              color: "#ffffff",
              fontSize: "1rem",
              fontFamily: "inherit",
              resize: "vertical",
              minHeight: "120px",
              outline: "none",
              transition: "all 0.3s ease",
              boxSizing: "border-box"
            }}
            onFocus={(e) => {
              e.target.style.border = "2px solid rgba(34, 197, 94, 0.5)";
              e.target.style.boxShadow = "0 0 20px rgba(34, 197, 94, 0.2)";
            }}
            onBlur={(e) => {
              e.target.style.border = "2px solid rgba(255, 255, 255, 0.1)";
              e.target.style.boxShadow = "none";
            }}
          />
          
          <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
            <button
              onClick={checkNews}
              disabled={!inputText.trim()}
              style={{
                padding: "1rem 2.5rem",
                borderRadius: "50px",
                border: "1px solid rgba(34, 197, 94, 0.5)",
                background: inputText.trim() 
                  ? "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.3) 50%, rgba(5, 150, 105, 0.4) 100%)" 
                  : "rgba(0, 0, 0, 0.3)",
                backdropFilter: "blur(15px)",
                color: inputText.trim() ? "#22c55e" : "rgba(255, 255, 255, 0.4)",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: inputText.trim() ? "pointer" : "not-allowed",
                transition: "all 0.3s ease",
                boxShadow: inputText.trim() 
                  ? "0 10px 25px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(34, 197, 94, 0.2)" 
                  : "none",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                opacity: inputText.trim() ? 1 : 0.5,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem"
              }}
              onMouseEnter={(e) => {
                if (inputText.trim()) {
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 15px 35px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(34, 197, 94, 0.3)";
                  e.target.style.background = "linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(16, 185, 129, 0.4) 50%, rgba(5, 150, 105, 0.5) 100%)";
                }
              }}
              onMouseLeave={(e) => {
                if (inputText.trim()) {
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "0 10px 25px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(34, 197, 94, 0.2)";
                  e.target.style.background = "linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(16, 185, 129, 0.3) 50%, rgba(5, 150, 105, 0.4) 100%)";
                }
              }}
            >
              <FaSearch style={{ fontSize: "1.1rem" }} />
              Analyze News
            </button>
          </div>
        </div>
      </div>

      {/* Loading Section */}
      {loading && (
        <div style={{
          width: "100%",
          maxWidth: "700px",
          marginBottom: "2rem",
          textAlign: "center",
          animation: "fadeInUp 0.5s ease-out"
        }}>
          <div style={{
            background: "rgba(0, 0, 0, 0.6)",
            borderRadius: "20px",
            padding: "3rem 2rem",
            border: "1px solid rgba(34, 197, 94, 0.2)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(34, 197, 94, 0.1)"
          }}>
            <div style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem"
            }}>
              <Quantum
                size="60"
                speed="1.75"
                color="#667eea" 
              />
              <div style={{
                fontSize: "1.2rem",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.9)"
              }}>Analyzing your news content...</div>
              <div style={{
                fontSize: "0.9rem",
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: "center",
                lineHeight: "1.5"
              }}>Our AI is processing the text and checking for authenticity patterns</div>
            </div>
          </div>
        </div>
      )}

      {/* Results Section */}
      {result && (
        <div style={{
          width: "100%",
          maxWidth: "700px",
          animation: "fadeInUp 0.6s ease-out"
        }}>
          <div style={{
            background: "rgba(0, 0, 0, 0.6)",
            borderRadius: "20px",
            padding: "2rem",
            border: "1px solid rgba(34, 197, 94, 0.2)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(34, 197, 94, 0.1)"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              marginBottom: "1.5rem"
            }}>
              <FaChartBar style={{ fontSize: "2rem", color: "#22c55e" }} />
              <h2 style={{
                margin: "0",
                fontSize: "1.8rem",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.9)"
              }}>Analysis Results</h2>
            </div>
            
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "1.5rem",
              marginBottom: "1.5rem"
            }}>
              {/* Label Card */}
              <div style={{
                background: result.label === "TRUE" 
                  ? "linear-gradient(135deg, #56ab2f 0%, #a8e6cf 100%)" 
                  : "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
                padding: "1.5rem",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
              }}>
                <div style={{ 
                  display: "flex", 
                  justifyContent: "center", 
                  fontSize: "2.5rem", 
                  marginBottom: "0.5rem" 
                }}>
                  {result.label === "TRUE" ? 
                    <FaCheckCircle style={{ color: "white" }} /> : 
                    <FaTimesCircle style={{ color: "white" }} />
                  }
                </div>
                <div style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  color: "white",
                  textTransform: "uppercase",
                  letterSpacing: "1px"
                }}>{result.label}</div>
                <div style={{
                  fontSize: "0.9rem",
                  color: "rgba(255, 255, 255, 0.8)",
                  marginTop: "0.5rem"
                }}>
                  {result.label === "TRUE" ? "Likely Authentic" : "Potentially Fake"}
                </div>
              </div>

              {/* Confidence Card */}
              {result.score !== null && (
                <div style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  padding: "1.5rem",
                  borderRadius: "15px",
                  textAlign: "center",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
                }}>
                  <div style={{ 
                    display: "flex", 
                    justifyContent: "center", 
                    fontSize: "2.5rem", 
                    marginBottom: "0.5rem" 
                  }}>
                    <FaBullseye style={{ color: "white" }} />
                  </div>
                  <div style={{
                    fontSize: "2rem",
                    fontWeight: "700",
                    color: "white"
                  }}>{(result.score * 100).toFixed(1)}%</div>
                  <div style={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.8)",
                    marginTop: "0.5rem"
                  }}>Confidence Level</div>
                </div>
              )}
            </div>

            {/* Confidence Bar */}
            {result.score !== null && (
              <div style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: "25px",
                padding: "0.5rem",
                marginBottom: "1rem"
              }}>
                <div style={{
                  width: `${result.score * 100}%`,
                  height: "10px",
                  borderRadius: "20px",
                  background: result.label === "TRUE" 
                    ? "linear-gradient(90deg, #56ab2f, #a8e6cf)" 
                    : "linear-gradient(90deg, #ff416c, #ff4b2b)",
                  transition: "width 1s ease-in-out"
                }}></div>
              </div>
            )}

            <div style={{
              textAlign: "center",
              padding: "1rem",
              background: "rgba(0, 0, 0, 0.4)",
              borderRadius: "10px",
              fontSize: "0.9rem",
              color: "rgba(255, 255, 255, 0.7)",
              lineHeight: "1.5",
              border: "1px solid rgba(34, 197, 94, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem"
            }}>
              <FaLightbulb style={{ color: "#22c55e", fontSize: "1rem" }} />
              <span><strong>Tip:</strong> This AI model analyzes text patterns and linguistic features. 
              Always verify important news through multiple reliable sources.</span>
            </div>
          </div>
        </div>
      )}
      
      {/* Footer */}
      <footer style={{
        marginTop: "auto",
        paddingTop: "3rem",
        paddingBottom: "1rem",
        width: "100%",
        textAlign: "center",
        animation: "fadeInUp 1s ease-out 0.8s both"
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
      
      {/* Add CSS animations */}
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
        
        textarea::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </div>
  );
};

export default AnalysisPage;
