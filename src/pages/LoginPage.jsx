import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import CyberTechScene from '../components/CyberTechScene';
import {
  AlertCircleIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  UserIcon,
} from '../components/Icons';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/dashboard';

  // Subtle interactive parallax offset (translation only, keeping card 100% straight & front-facing)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * 6;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.trim() || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    try {
      await login(email.trim(), password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message || 'Failed to login. Please check your credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFillDemo = () => {
    setEmail('alex@taskflow.dev');
    setPassword('password123');
    setError('');
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 sm:p-6 overflow-hidden bg-[#040814]">
      {/* 1. Realistic 3D WebGL Cyber-Tech Scene Background */}
      <CyberTechScene />

      {/* 2. Cinematic Vignette & Atmospheric Depth Overlays */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(0, 160, 255, 0.08) 0%, rgba(4, 8, 20, 0.6) 60%, rgba(2, 5, 14, 0.92) 100%)',
        }}
      />

      {/* 3. Floating Card Container with Realistic Ground Contact Shadow */}
      <div
        className="relative z-10 w-full max-w-[430px] sm:max-w-[460px] flex flex-col items-center"
        style={{
          transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
          transition: 'transform 0.15s ease-out',
        }}
      >
        {/* The 3D Floating Login Card - Perfectly Straight, Front-Facing & Vertically Aligned */}
        <div
          className="w-full rounded-2xl sm:rounded-3xl p-6 sm:p-9 text-slate-100 relative overflow-hidden transition-all"
          style={{
            background:
              'linear-gradient(155deg, rgba(10, 25, 55, 0.82) 0%, rgba(5, 14, 34, 0.90) 100%)',
            backdropFilter: 'blur(28px) saturate(180%)',
            WebkitBackdropFilter: 'blur(28px) saturate(180%)',
            border: '1.5px solid rgba(0, 210, 255, 0.65)',
            boxShadow: `
              inset 0 1px 1.5px 0 rgba(255, 255, 255, 0.45),
              inset 0 0 25px 0 rgba(0, 160, 255, 0.18),
              0 0 35px 0 rgba(0, 140, 255, 0.45),
              0 0 80px 0 rgba(0, 100, 255, 0.22),
              0 30px 60px -15px rgba(0, 0, 0, 0.85)
            `,
            animation: 'floatVertical 5s ease-in-out infinite',
          }}
        >
          {/* Subtle Top Glass Bevel Reflection Sheen */}
          <div
            className="absolute top-0 left-0 right-0 h-32 pointer-events-none opacity-40"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 210, 255, 0.25) 0%, rgba(255, 255, 255, 0.05) 40%, transparent 100%)',
            }}
          />

          {/* Header Brand Section */}
          <div className="flex flex-col items-center text-center relative z-10">
            {/* TS Logo Badge + TaskFlow Brand */}
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-lg text-white shadow-lg relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0077ff 0%, #00d2ff 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  boxShadow: '0 0 20px rgba(0, 210, 255, 0.6)',
                }}
              >
                <span className="relative z-10 tracking-tight">TS</span>
                <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity" />
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight drop-shadow-[0_2px_12px_rgba(0,195,255,0.45)]">
                TaskFlow
              </h1>
            </div>

            {/* Title */}
            <h2 className="mt-5 text-xl sm:text-2xl font-bold text-white tracking-tight">
              Sign in to your account
            </h2>

            {/* Subtitle with Registration Link */}
            <p className="mt-1.5 text-xs sm:text-sm text-slate-300">
              Or{' '}
              <Link
                to="/register"
                className="font-medium text-cyan-400 hover:text-cyan-300 hover:underline transition-colors decoration-cyan-400/40"
              >
                create a new developer account
              </Link>
            </p>
          </div>

          {/* Error Alert Banner */}
          {error && (
            <div className="mt-5 p-3.5 rounded-xl bg-rose-950/70 border border-rose-500/50 flex items-start gap-3 backdrop-blur-md animate-fadeIn">
              <AlertCircleIcon className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-rose-200 font-medium leading-snug">
                {error}
              </div>
            </div>
          )}

          {/* Form */}
          <form className="mt-6 space-y-4 sm:space-y-5 relative z-10" onSubmit={handleSubmit}>
            {/* Email Address Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
              >
                Email Address
              </label>

              <div className="relative flex items-center rounded-xl bg-[#060e20]/80 border border-cyan-500/30 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/30 transition-all duration-200 shadow-inner">
                <MailIcon className="w-5 h-5 text-cyan-400/75 ml-3.5 flex-shrink-0 pointer-events-none" />
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="alex@taskflow.dev"
                  disabled={isSubmitting}
                  className="w-full bg-transparent pl-3 pr-3.5 py-2.5 sm:py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
              >
                Password
              </label>

              <div className="relative flex items-center rounded-xl bg-[#060e20]/80 border border-cyan-500/30 focus-within:border-cyan-400 focus-within:ring-2 focus-within:ring-cyan-400/30 transition-all duration-200 shadow-inner">
                <LockIcon className="w-5 h-5 text-cyan-400/75 ml-3.5 flex-shrink-0 pointer-events-none" />
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={isSubmitting}
                  className="w-full bg-transparent pl-3 pr-11 py-2.5 sm:py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 text-cyan-400/60 hover:text-cyan-300 transition-colors p-1 rounded-md"
                  title={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Sign in Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center py-3 sm:py-3.5 px-6 rounded-xl text-sm font-bold text-white tracking-wide transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                style={{
                  background: 'linear-gradient(90deg, #0066ff 0%, #00b4d8 50%, #0077b6 100%)',
                  boxShadow:
                    '0 0 25px rgba(0, 140, 255, 0.65), inset 0 1px 1px rgba(255, 255, 255, 0.35)',
                  border: '1px solid rgba(0, 210, 255, 0.4)',
                }}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    <span>Authenticating...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <span>Sign in</span>
                    <span className="text-base font-normal">→</span>
                  </span>
                )}
              </button>
            </div>
          </form>

          {/* Quick Demo Credentials Helper */}
          <div className="mt-6 pt-5 border-t border-cyan-500/20 text-center relative z-10">
            <p className="text-[11px] text-slate-400 mb-2.5 font-medium tracking-wide">
              Evaluation Demo Account:
            </p>
            <button
              type="button"
              onClick={handleFillDemo}
              className="w-full py-2.5 px-4 rounded-xl bg-[#061226]/80 hover:bg-[#0b1e3d] border border-cyan-500/25 hover:border-cyan-400/50 text-xs font-medium text-cyan-300 hover:text-cyan-200 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer group"
            >
              <UserIcon className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Fill Demo Login (alex@taskflow.dev)</span>
            </button>
          </div>
        </div>

        {/* Realistic Floor Contact Shadow (Pulsing gently with card float) */}
        <div
          className="w-[320px] sm:w-[380px] h-6 rounded-[50%] blur-xl transition-all duration-700 pointer-events-none mt-4 opacity-75"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 195, 255, 0.3) 0%, rgba(0, 80, 200, 0.15) 50%, transparent 80%)',
            boxShadow: '0 0 45px 15px rgba(0, 120, 255, 0.25)',
          }}
        />
      </div>

      {/* Global CSS for the Vertical Floating Keyframe */}
      <style>{`
        @keyframes floatVertical {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
