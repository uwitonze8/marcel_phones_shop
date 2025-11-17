'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Import Bootstrap CSS only for this page
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
    link.id = 'bootstrap-404';
    document.head.appendChild(link);

    // Cleanup when component unmounts
    return () => {
      const bootstrapLink = document.getElementById('bootstrap-404');
      if (bootstrapLink) {
        document.head.removeChild(bootstrapLink);
      }
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        body {
          background-color: #ffffff;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }

        .error-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff;
          position: relative;
          overflow: hidden;
        }

        .error-content {
          position: relative;
          z-index: 10;
        }

        .error-404 {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
          margin-bottom: 2rem;
        }

        .number-4 {
          font-size: 15rem;
          font-weight: 900;
          color: #083A85;
          text-shadow: 0 0 20px rgba(8, 58, 133, 0.3);
          line-height: 1;
        }

        .portal-container {
          position: relative;
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .portal-outer {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: linear-gradient(135deg, #083A85 0%, #0a4ba3 50%, #0c5ec2 100%);
          animation: rotate 8s linear infinite;
          filter: blur(2px);
        }

        .portal-middle {
          position: absolute;
          width: 240px;
          height: 240px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0a4ba3 0%, #1e5ec9 50%, #3b82f6 100%);
          box-shadow: 0 0 60px rgba(8, 58, 133, 0.6);
        }

        .portal-inner {
          position: absolute;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 50%, #60a5fa 100%);
          animation: pulse 3s ease-in-out infinite;
        }

        .portal-core {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle, #ffffff 0%, #93c5fd 30%, #3b82f6 100%);
          box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.5);
          animation: glow 2s ease-in-out infinite;
        }

        .astronaut {
          position: absolute;
          width: 100px;
          height: 120px;
          z-index: 5;
          animation: float 4s ease-in-out infinite;
        }

        .astronaut-head {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, #083A85 0%, #1e5ec9 100%);
          border-radius: 50%;
          margin: 0 auto 5px;
          position: relative;
          box-shadow: inset -5px -5px 10px rgba(0, 0, 0, 0.2);
        }

        .astronaut-visor {
          width: 35px;
          height: 25px;
          background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          box-shadow: inset 0 -3px 5px rgba(0, 0, 0, 0.3);
        }

        .astronaut-body {
          width: 60px;
          height: 50px;
          background: linear-gradient(135deg, #0a4ba3 0%, #083A85 100%);
          border-radius: 20px 20px 25px 25px;
          margin: 0 auto;
          position: relative;
        }

        .astronaut-arm {
          width: 15px;
          height: 40px;
          background: linear-gradient(135deg, #083A85 0%, #0a4ba3 100%);
          border-radius: 10px;
          position: absolute;
          top: 5px;
        }

        .astronaut-arm.left {
          left: -10px;
          transform: rotate(-20deg);
        }

        .astronaut-arm.right {
          right: -10px;
          transform: rotate(20deg);
        }

        .astronaut-leg {
          width: 18px;
          height: 20px;
          background: linear-gradient(135deg, #062a5e 0%, #083A85 100%);
          border-radius: 10px;
          position: absolute;
          bottom: -15px;
        }

        .astronaut-leg.left {
          left: 12px;
        }

        .astronaut-leg.right {
          right: 12px;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #3b82f6;
          border-radius: 50%;
          animation: particle 3s ease-in-out infinite;
        }

        .particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 40%; right: 15%; animation-delay: 0.5s; }
        .particle:nth-child(3) { bottom: 30%; left: 20%; animation-delay: 1s; }
        .particle:nth-child(4) { top: 60%; right: 25%; animation-delay: 1.5s; }
        .particle:nth-child(5) { bottom: 20%; right: 10%; animation-delay: 2s; }

        .error-text {
          color: #4b5563;
          font-size: 1.125rem;
        }

        .error-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          transition: opacity 0.3s ease;
        }

        .error-link:hover {
          opacity: 0.8;
          color: #3b82f6;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), inset 0 0 30px rgba(255, 255, 255, 0.5); }
          50% { box-shadow: 0 0 60px rgba(59, 130, 246, 1), inset 0 0 40px rgba(255, 255, 255, 0.8); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(-3deg); }
          75% { transform: translateY(10px) rotate(3deg); }
        }

        @keyframes particle {
          0%, 100% { opacity: 0; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(-20px); }
        }

        /* Tablet and below */
        @media (max-width: 1024px) {
          .number-4 {
            font-size: 12rem;
          }
          .portal-container {
            width: 240px;
            height: 240px;
          }
          .portal-outer { width: 240px; height: 240px; }
          .portal-middle { width: 200px; height: 200px; }
          .portal-inner { width: 160px; height: 160px; }
          .portal-core { width: 110px; height: 110px; }
          .astronaut { transform: scale(0.85); }
        }

        /* Mobile landscape and portrait */
        @media (max-width: 768px) {
          .error-404 {
            gap: 15px;
            margin-bottom: 1.5rem;
          }
          .number-4 {
            font-size: 8rem;
          }
          .portal-container {
            width: 180px;
            height: 180px;
          }
          .portal-outer { width: 180px; height: 180px; }
          .portal-middle { width: 150px; height: 150px; }
          .portal-inner { width: 120px; height: 120px; }
          .portal-core { width: 80px; height: 80px; }
          .astronaut { transform: scale(0.7); }
          .error-text {
            font-size: 1rem;
          }
        }

        /* Small mobile */
        @media (max-width: 480px) {
          .error-404 {
            gap: 10px;
            margin-bottom: 1rem;
            flex-wrap: wrap;
          }
          .number-4 {
            font-size: 5rem;
          }
          .portal-container {
            width: 140px;
            height: 140px;
            order: 2;
          }
          .portal-outer { width: 140px; height: 140px; }
          .portal-middle { width: 115px; height: 115px; }
          .portal-inner { width: 90px; height: 90px; }
          .portal-core { width: 60px; height: 60px; }
          .astronaut { transform: scale(0.55); }
          .error-text {
            font-size: 0.875rem;
          }
        }

        /* Extra small mobile */
        @media (max-width: 360px) {
          .number-4 {
            font-size: 4rem;
          }
          .portal-container {
            width: 120px;
            height: 120px;
          }
          .portal-outer { width: 120px; height: 120px; }
          .portal-middle { width: 100px; height: 100px; }
          .portal-inner { width: 80px; height: 80px; }
          .portal-core { width: 50px; height: 50px; }
          .astronaut { transform: scale(0.45); }
          .error-text {
            font-size: 0.75rem;
          }
        }
      `}</style>

      <div className="error-page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="error-content text-center">
                {/* 404 Design */}
                <div className="error-404">
                  {/* Left 4 */}
                  <div className="number-4">4</div>

                  {/* Portal with Astronaut */}
                  <div className="portal-container">
                    <div className="portal-outer"></div>
                    <div className="portal-middle"></div>
                    <div className="portal-inner"></div>
                    <div className="portal-core"></div>

                    {/* Astronaut */}
                    <div className="astronaut">
                      <div className="astronaut-head">
                        <div className="astronaut-visor"></div>
                      </div>
                      <div className="astronaut-body">
                        <div className="astronaut-arm left"></div>
                        <div className="astronaut-arm right"></div>
                        <div className="astronaut-leg left"></div>
                        <div className="astronaut-leg right"></div>
                      </div>
                    </div>

                    {/* Particles */}
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                  </div>

                  {/* Right 4 */}
                  <div className="number-4">4</div>
                </div>

                {/* Error Message */}
                <div className="mt-4">
                  <p className="error-text mb-0">
                    This page doesn't exist.{' '}
                    <Link href="/" className="error-link">
                      Go back home.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
