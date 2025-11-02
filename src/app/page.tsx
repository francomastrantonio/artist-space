'use client'
import { WaveformComponent } from "@/components/WaveformComponent";

export default function Home() {

  return (
    <div className="font-sans flex items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <WaveformComponent />
    </div>
  );
}
