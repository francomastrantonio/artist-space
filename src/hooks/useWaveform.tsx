import { useRef, useEffect } from 'react'
import WaveSurfer from 'wavesurfer.js'

type UseWaveformOptions = {
    containerRef: React.RefObject<HTMLDivElement | null>;
    audioUrl: string;
  };

export const useWaveform = ({ containerRef, audioUrl }: UseWaveformOptions) => {
    const wavesurferRef = useRef<WaveSurfer | null>(null);

    useEffect(() =>{
        if(!containerRef.current) return
        
        const wavesurfer = WaveSurfer.create({
            container: containerRef.current,
            waveColor: 'rgb(200, 0, 200)',
            progressColor: 'rgb(100, 0, 100)',
            width: '100%'
          })
          
          /** When audio starts loading */
          wavesurfer.on('load', (url) => {
            console.log('Load', url)
          })
          
          /** During audio loading */
          wavesurfer.on('loading', (percent) => {
            console.log('Loading', percent + '%')
          })
          
          /** When the audio has been decoded */
          wavesurfer.on('decode', (duration) => {
            console.log('Decode', duration + 's')
          })
          
          /** When the audio is both decoded and can play */
          wavesurfer.on('ready', (duration) => {
            console.log('Ready', duration + 's')
          })
          
          /** When visible waveform is drawn */
          wavesurfer.on('redraw', () => {
            console.log('Redraw began')
          })
          
          /** When all audio channel chunks of the waveform have drawn */
          wavesurfer.on('redrawcomplete', () => {
            console.log('Redraw complete')
          })
          
          /** When the audio starts playing */
          wavesurfer.on('play', () => {
            console.log('Play')
          })
          
          /** When the audio pauses */
          wavesurfer.on('pause', () => {
            console.log('Pause')
          })
          
          /** When the audio finishes playing */
          wavesurfer.on('finish', () => {
            console.log('Finish')
          })
          
          /** On audio position change, fires continuously during playback */
          wavesurfer.on('timeupdate', (currentTime) => {
            console.log('Time', currentTime + 's')
          })
          
          /** When the user seeks to a new position */
          wavesurfer.on('seeking', (currentTime) => {
            console.log('Seeking', currentTime + 's')
          })
          
          /** When the user interacts with the waveform (i.g. clicks or drags on it) */
          wavesurfer.on('interaction', (newTime) => {
            console.log('Interaction', newTime + 's')
          })
          
          /** When the user clicks on the waveform */
          wavesurfer.on('click', (relativeX) => {
            console.log('Click', relativeX)
          })
          
          /** When the user drags the cursor */
          wavesurfer.on('drag', (relativeX) => {
            console.log('Drag', relativeX)
          })
          
          /** When the waveform is scrolled (panned) */
          wavesurfer.on('scroll', (visibleStartTime, visibleEndTime) => {
            console.log('Scroll', visibleStartTime + 's', visibleEndTime + 's')
          })
          
          
          /** Just before the waveform is destroyed so you can clean up your events */
          wavesurfer.on('destroy', () => {
            console.log('Destroy')
          })
          
          wavesurfer.load(audioUrl)
          
          wavesurfer.once('decode', () => {
            document.querySelector('button')?.addEventListener('click', () => {
              wavesurfer.playPause()
            })
          })
    
    }, [containerRef])
    
  return wavesurferRef
}