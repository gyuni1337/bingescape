import React, {useState, useEffect} from 'react'
import Button from '../Buttons/Button'
import PlusButton from '../Buttons/PlusButton'
import Image from 'next/image';

export default function Billboard(props) {
  
  const [ videoTime, setVideoTime ] = useState(0);
  const [ videoDuration, setVideoDuration ] = useState(0);
  const [ progressValue, setProgressValue ] = useState('0%');
  const [ isVideoPaused, setIsVideoPaused ] = useState(false);
  const [ isVideoMuted, setIsVideoMuted ] = useState(true); 
  let loaded = false;

  useEffect(() => {
      let math = videoTime/100;
      setProgressValue(videoDuration*math + '%')
      console.log(progressValue);
  }, [videoTime])

  return (
    <div className=''>
        <video
        className='w-full h-[664px] object-cover brightness-[60%]'
        autoPlay
        muted={isVideoMuted}
        onTimeUpdate={(e) => {setVideoTime(e.target.currentTime); if (!loaded) { setVideoDuration(e.target.duration); loaded=true; }}}
        // onPlaying={(e) => {setVideoDuration(e.target.duration)}}
        loop
        src={'/vids/Hero.mp4'} // change later to props
        // poster={}
        > 
        </video>
        <div className='absolute top-[30%] md:top-[25%] ml-4 md:ml-16'>
          <div className='flex justify-around'>
        <div className='flex flex-col'>
        <p className='text-white text-1xl md:text-5xl h-full w-[20%] lg:text-6xl font-bold drop-shadow-xl'>{props.title}</p>
        <div className='mt-5'>
        <p className='text-lightgray text-[16px] font-normal '>
          {props.genres}  { /* TODO - use map [max twice] later because genres will be array */}
        </p>
        <p className='text-lightgray mt-2 text-[8px] md:text-lg w-[80%] md:w-[80%] lg:w-[50%]'>{props.description}</p>
        <div className="w-[30%] mt-6 bg-lightgray ">
          <div className="bg-gold h-1 rounded-full" style={{width: progressValue}}></div>
        </div>
        <div className='flex gap-5 items-center mt-7'>
            <Button text="Spela Film" color={'gold'}/>
            <Button text="Se Trailer" color={'white'}/>
            <PlusButton />
        </div>
        </div>
        </div>
        <div className='flex items-end gap-6 mr-40'> 
         {/* TODO - make vide pausable, change respektive icon on press  */}
            <Image src={'/icons/pause_circle.png'} alt='Video pause button' className='cursor-pointer' width={70} height={70} />
            <Image src={'/icons/volume_off.png'} alt='Video pause button' onClick={() => {setIsVideoMuted(!isVideoMuted)}}  className='cursor-pointer' width={70} height={70} />
        </div>

          </div>
        </div>
    </div>
  )
}
