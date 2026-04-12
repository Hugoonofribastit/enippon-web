"use client";

import { useState, useRef, useCallback } from "react";

interface SliderCaptchaProps {
  label: string;
  onVerified: (verified: boolean) => void;
}

export default function SliderCaptcha({ label, onVerified }: SliderCaptchaProps) {
  const [verified, setVerified] = useState(false);
  const [dragging, setDragging] = useState(false);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const threshold = 0.9;

  const getPosition = useCallback((clientX: number) => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    const handleWidth = 44;
    const maxOffset = rect.width - handleWidth;
    const raw = clientX - rect.left - handleWidth / 2;
    return Math.max(0, Math.min(raw, maxOffset));
  }, []);

  const handleStart = useCallback((clientX: number) => {
    if (verified) return;
    setDragging(true);
    setOffset(getPosition(clientX));
  }, [verified, getPosition]);

  const handleMove = useCallback((clientX: number) => {
    if (!dragging || verified) return;
    setOffset(getPosition(clientX));
  }, [dragging, verified, getPosition]);

  const handleEnd = useCallback(() => {
    if (!dragging || verified) return;
    setDragging(false);
    if (!trackRef.current) return;
    const handleWidth = 44;
    const maxOffset = trackRef.current.getBoundingClientRect().width - handleWidth;
    if (offset / maxOffset >= threshold) {
      setVerified(true);
      setOffset(maxOffset);
      onVerified(true);
    } else {
      setOffset(0);
    }
  }, [dragging, verified, offset, onVerified]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
        {label}
      </label>
      <div
        ref={trackRef}
        className={`relative h-11 rounded-lg select-none ${verified ? "bg-green-50 border border-green-200" : "bg-gray-100 border border-gray-200"}`}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        {/* Fill */}
        <div
          className={`absolute inset-y-0 left-0 rounded-lg transition-colors ${verified ? "bg-green-100" : "bg-[#c41e3a]/10"}`}
          style={{ width: offset + 44 }}
        />

        {/* Label text */}
        <div className={`absolute inset-0 flex items-center justify-center text-sm pointer-events-none transition-opacity ${offset > 20 ? "opacity-0" : "opacity-100"}`}>
          <span className={verified ? "text-green-600 font-medium" : "text-gray-400"}>
            {verified
              ? "✓"
              : "→"}
          </span>
          <span className={`ml-2 ${verified ? "text-green-600 font-medium" : "text-gray-400"}`}>
            {verified
              ? (label === "Verificación de seguridad" ? "Verificado" : "Verified")
              : (label === "Verificación de seguridad" ? "Deslizá para verificar" : "Slide to verify")}
          </span>
        </div>

        {/* Handle */}
        <div
          className={`absolute top-0.5 w-10 h-10 rounded-md flex items-center justify-center shadow-sm transition-colors ${
            verified
              ? "bg-green-500 text-white cursor-default"
              : dragging
                ? "bg-[#c41e3a] text-white cursor-grabbing"
                : "bg-white border border-gray-300 text-gray-400 cursor-grab hover:border-[#c41e3a] hover:text-[#c41e3a]"
          }`}
          style={{ left: offset }}
          onMouseDown={(e) => { e.preventDefault(); handleStart(e.clientX); }}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        >
          {verified ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
