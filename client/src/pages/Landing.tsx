import { useState } from "react";
import { Smartphone, Clock, Gift, ArrowRight, CheckCircle, Loader2 } from "lucide-react";

export default function Landing() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    window.location.href = "https://trkfy.org/aff_c?offer_id=250&aff_id=164586";
  };

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#0a0a0a',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '16px',
      fontFamily: 'Inter, sans-serif'
    }}>
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spinner {
          animation: spin 1s linear infinite;
        }
      `}</style>

      {/* Logo */}
      <div style={{ paddingTop: '32px', paddingBottom: '24px' }}>
        <div style={{
          width: '96px',
          height: '96px',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#cc0000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                backgroundColor: '#cc0000'
              }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Headline */}
      <h1 style={{
        fontSize: '24px',
        fontWeight: 900,
        color: '#ff0000',
        textAlign: 'center',
        maxWidth: '400px',
        lineHeight: 1.2,
        marginBottom: '32px',
        textTransform: 'uppercase'
      }}>
        Complete the steps below to claim your $750 Target giftcard!
      </h1>

      {/* Start Now Button */}
      <button
        onClick={handleClick}
        disabled={isLoading}
        data-testid="button-start-now"
        style={{
          width: '100%',
          maxWidth: '400px',
          backgroundColor: '#ff0000',
          color: 'white',
          fontSize: '20px',
          fontWeight: 900,
          padding: '20px 32px',
          borderRadius: '9999px',
          border: 'none',
          cursor: isLoading ? 'not-allowed' : 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          boxSizing: 'border-box'
        }}
      >
        {isLoading ? (
          <>
            Verifying
            <Loader2 className="spinner" style={{ width: '24px', height: '24px' }} strokeWidth={3} />
          </>
        ) : (
          <>
            Start Now
            <ArrowRight style={{ width: '24px', height: '24px' }} strokeWidth={3} />
          </>
        )}
      </button>

      {/* How It Works */}
      <div style={{ width: '100%', maxWidth: '400px', marginTop: '48px' }}>
        <p style={{
          fontSize: '12px',
          fontWeight: 700,
          color: '#9ca3af',
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          marginBottom: '16px'
        }}>
          How It Works:
        </p>

        <div style={{
          backgroundColor: '#1a1a1a',
          borderRadius: '20px',
          padding: '20px'
        }}>
          {/* Feature 1 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Smartphone style={{ width: '24px', height: '24px', color: '#ff0000' }} />
            </div>
            <div>
              <p style={{ fontWeight: 700, marginBottom: '4px' }}>Complete 3-5 Featured Deals</p>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>Choose from top apps, games, or surveys.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '20px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Clock style={{ width: '24px', height: '24px', color: '#ff0000' }} />
            </div>
            <div>
              <p style={{ fontWeight: 700, marginBottom: '4px' }}>Takes 10-15 Minutes</p>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>Fast-track verification for instant rewards.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              backgroundColor: 'rgba(255,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Gift style={{ width: '24px', height: '24px', color: '#ff0000' }} />
            </div>
            <div>
              <p style={{ fontWeight: 700, marginBottom: '4px' }}>Get Up To $750</p>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>Delivered via email upon successful completion.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Badge */}
      <div style={{
        marginTop: 'auto',
        paddingTop: '40px',
        paddingBottom: '24px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          backgroundColor: 'rgba(34,197,94,0.1)',
          border: '1px solid rgba(34,197,94,0.3)',
          borderRadius: '9999px',
          padding: '8px 16px'
        }}>
          <CheckCircle style={{ width: '16px', height: '16px', color: '#22c55e' }} />
          <span style={{ color: '#22c55e', fontSize: '12px', fontWeight: 600, textTransform: 'uppercase' }}>
            User Verified & Active Today
          </span>
        </div>
      </div>
    </div>
  );
}
