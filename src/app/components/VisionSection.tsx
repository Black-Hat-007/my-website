import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

export function VisionSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControls, setShowControls] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      const p = video.play();
      if (p !== undefined) {
        p.catch((err: Error) => {
          // Silently swallow AbortError caused by rapid play/pause toggling
          if (err.name !== "AbortError") console.error(err);
        });
      }
    } else {
      video.pause();
    }
    // State is driven solely by the onPlay / onPause event handlers below
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const curr = videoRef.current.currentTime;
    const dur = videoRef.current.duration || 0;
    setCurrentTime(curr);
    setProgress(dur > 0 ? (curr / dur) * 100 : 0);
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = x / rect.width;
    videoRef.current.currentTime = ratio * duration;
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      videoRef.current.requestFullscreen();
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <section className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1728px] mx-auto px-8 lg:px-16">
        {/* Title */}
        <h2
          className="text-black mb-3"
          style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 500, fontSize: "clamp(28px, 3vw, 48px)", lineHeight: "28px" }}
        >
          Our Vision for Proper Distance Education
        </h2>
        <p
          className="text-black mb-10"
          style={{ fontFamily: "'Inder', sans-serif", fontSize: "clamp(18px, 2vw, 28px)", lineHeight: "28px" }}
        >
          We believe every learner deserves a complete academic ecosystem — not just enrollment.
        </p>

        {/* Video Player */}
        <div
          className="relative rounded-[20px] overflow-hidden mx-auto max-w-[1196px] shadow-2xl bg-[#0d0d0d] group"
          style={{ aspectRatio: "1196/651" }}
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
          {/* HTML5 Video Element */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onEnded={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            playsInline
            preload="metadata"
            // Video source will be added when the founder's video is ready
          />

          {/* Placeholder overlay — shown when no video is loaded */}
          {!isPlaying && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0e4e3a]/90 via-[#178160]/70 to-[#20b486]/60 pointer-events-none">
              <div className="flex flex-col items-center gap-4 text-center px-8">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center border-2 border-white/30 backdrop-blur-sm mb-2">
                  <svg viewBox="0 0 48 48" className="w-12 h-12 fill-white opacity-60">
                    <rect x="4" y="4" width="40" height="40" rx="4" fill="none" stroke="white" strokeWidth="2" opacity="0.4"/>
                    <path d="M18 14L34 24L18 34V14Z" fill="white"/>
                  </svg>
                </div>
                <p
                  className="text-white/90"
                  style={{ fontFamily: "'Geologica', sans-serif", fontWeight: 500, fontSize: "clamp(16px, 2vw, 24px)" }}
                >
                  Founder's Video
                </p>
                <p
                  className="text-white/60"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(13px, 1.2vw, 16px)" }}
                >
                  Coming Soon — Video will be added here
                </p>
              </div>
            </div>
          )}

          {/* Controls overlay */}
          <div
            className={`absolute bottom-0 left-0 right-0 transition-opacity duration-300 ${showControls ? "opacity-100" : "opacity-0"}`}
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, transparent 100%)" }}
          >
            {/* Progress bar */}
            <div
              className="w-full h-[4px] bg-white/20 cursor-pointer mx-0 relative group/bar"
              onClick={handleSeek}
            >
              <div
                className="absolute left-0 top-0 h-full bg-[#20b486] rounded-full transition-all"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#20b486] rounded-full shadow -translate-x-1/2 opacity-0 group-hover/bar:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              />
            </div>

            {/* Controls row */}
            <div className="flex items-center gap-4 px-5 py-3">
              {/* Play/Pause */}
              <button
                onClick={togglePlay}
                className="text-white hover:text-[#20b486] transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause size={22} fill="currentColor" /> : <Play size={22} fill="currentColor" />}
              </button>

              {/* Time */}
              <span
                className="text-white/80 text-[12px] tabular-nums"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Mute */}
              <button
                onClick={toggleMute}
                className="text-white hover:text-[#20b486] transition-colors"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>

              {/* Fullscreen */}
              <button
                onClick={handleFullscreen}
                className="text-white hover:text-[#20b486] transition-colors"
                aria-label="Fullscreen"
              >
                <Maximize size={20} />
              </button>
            </div>
          </div>

          {/* Big central play/pause overlay on click */}
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
            style={{ pointerEvents: "all" }}
          >
            {/* Only show big play button when paused */}
            {!isPlaying && (
              <div className="w-20 h-20 bg-[#20b486]/90 rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20b486] transition-colors">
                <Play size={36} className="text-white ml-1" fill="white" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}