import { useRef } from "react"
import { useWaveform } from "@/hooks/useWaveform"

export const WaveformComponent = () => {
    const waveformContainerRef = useRef<HTMLDivElement>(null)
    const wavesurfer = useWaveform({ 
        containerRef: waveformContainerRef,
        audioUrl: '/music/dive_on.wav'
     })
    
    console.log(wavesurfer)

    const handlePlayPause = () => {
        wavesurfer.current?.playPause();
      };
   return (
    <>
        <div ref={waveformContainerRef} className="w-[400px]" />
        <button onClick={handlePlayPause}>Play / Pause</button>
    </>
   )
}