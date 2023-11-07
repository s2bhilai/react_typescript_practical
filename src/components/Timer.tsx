import { Timer as TimerProps } from '../store/timers-context.tsx';
import Container from './UI/Container.tsx';
import { useState,useEffect, useRef } from 'react';

export default function Timer({ name,duration }: TimerProps) {
  //We can use useRef to have variable reference also apart from having DOM references
  //Also unlike variables refs will not be created again when the component reloads 
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  if(remainingTime < 0 && interval.current) {
    clearInterval(interval.current)
  }

  useEffect(() => {
    //If we write setInterval outside the useEffect, then each time 'setRemainingTime' will 
    //reload the component and again a new setInterval will be created and like this it will be on loop
    //In this case setInterval will be called only once and when the component re-loads 
    //setInterval will not be called again 
    const timer =  setInterval(function() {
      setRemainingTime((prevTime) => prevTime - 50);
    },50);

    interval.current = timer;

    //Will get called just before useEffect is called 2nd time (every time before it runs again) or if the component is unmounted.
    //Bcoz we are using strict mode so react will call component 2 times.
    return () => clearInterval(timer);
  },[]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as="article">
      <h2>{name}</h2>
      <p>
        <progress max={duration * 1000} value={ remainingTime } />
      </p>
      <p>{ formattedRemainingTime }</p>
    </Container>
  );
}
