import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Video, ExternalLink, Maximize2, RefreshCw } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
  title?: string;
  subtitle?: string;
}

export const VideoModal: React.FC<VideoModalProps> = ({ 
  isOpen, 
  onClose,
  videoUrl = PORTFOLIO_DATA.profile.videoShowcasePath,
  title = "Rowshanara Akhter — Platform Walkthrough",
  subtitle = "Live product demo & scalable system architecture"
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const activeVideoSrc = encodeURI(videoUrl || PORTFOLIO_DATA.profile.videoShowcasePath);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      // Attempt play when modal opens
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().then(() => {
            setIsPlaying(true);
            setIsLoading(false);
          }).catch((err) => {
            console.log("Autoplay prevented or waiting for interaction:", err);
            setIsLoading(false);
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    } else {
      if (videoRef.current) {
        videoRef.current.pause();
      }
      setIsPlaying(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleManualPlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="bg-zinc-950 rounded-3xl max-w-4xl w-full shadow-2xl border border-zinc-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-4 px-6 border-b border-zinc-800/80 flex items-center justify-between bg-zinc-900 text-white">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Video className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold leading-tight text-white">
                {title}
              </h3>
              <p className="text-[11px] text-zinc-400">
                {subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct Open in New Tab Button */}
            <a
              href={activeVideoSrc}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-emerald-400 text-xs font-semibold border border-zinc-700/80 transition-colors"
              title="Open video in a new browser tab"
            >
              <span>Full Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black aspect-video flex items-center justify-center group overflow-hidden">
          <video
            ref={videoRef}
            key={activeVideoSrc}
            controls
            playsInline
            preload="metadata"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onWaiting={() => setIsLoading(true)}
            onCanPlay={() => setIsLoading(false)}
            className="w-full h-full max-h-[68vh] object-contain"
          >
            <source src={activeVideoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Fallback Large Play Button Overlay when paused */}
          {!isPlaying && !isLoading && (
            <div 
              onClick={handleManualPlay}
              className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110">
                <Play className="w-7 h-7 fill-current ml-1" />
              </div>
            </div>
          )}

          {/* Loading indicator */}
          {isLoading && (
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center pointer-events-none">
              <div className="w-8 h-8 border-2 border-emerald-500 border-t-transparent rounded-full animate-spin mb-2"></div>
              <span className="text-xs text-zinc-300">Buffering HD Video...</span>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 px-6 bg-zinc-900 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>EasyfyPro AI Chat Bot Screen Recording</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.profile.videoShowcasePath}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1 font-medium sm:hidden"
            >
              <span>Open in Tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
