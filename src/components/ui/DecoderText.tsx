'use client';

import React, { useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?';

interface DecoderTextProps {
  text: string;
  className?: string;
  scrambleSpeed?: number; // ms per character change
  revealSpeed?: number; // ms per character reveal
  startDelay?: number; // ms delay before starting
}

export default function DecoderText({ 
  text, 
  className = "", 
  scrambleSpeed = 30, 
  revealSpeed = 50,
  startDelay = 0 
}: DecoderTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isRevealing, setIsRevealing] = useState(false);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let intervalId: NodeJS.Timeout;

    // Start delay
    const timeoutId = setTimeout(() => {
        setIsRevealing(true);
        let revealed = 0;
        
        intervalId = setInterval(() => {
            if (revealed >= text.length) {
                clearInterval(intervalId);
                return;
            }

            setDisplayText(() => {
                let next = text.substring(0, revealed + 1);
                // Add scrambled characters for the rest using the length difference
                const remaining = text.length - revealed - 1;
                for (let i = 0; i < remaining; i++) {
                   if (i < 3) { // Only scramble the next few characters for better readability/effect
                        next += CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
                   } else {
                       next += ' '; // Empty space for further chars
                   }
                }
                return next;
            });
            
            revealed++;

        }, revealSpeed);

    }, startDelay);

    return () => {
        clearTimeout(timeoutId);
        clearInterval(intervalId);
    }

  }, [isInView, text, revealSpeed, startDelay]);

  // Scramble effect continuously running on unrevealed part? 
  // Actually, a simpler approach for the "decoding" effect:
  
  useEffect(() => {
     if (!isInView || !isRevealing) return;
     // This separate effect could handle just random noise if we wanted infinite noise, 
     // but the above logic handles the progressive reveal.
     
     // Let's refine the logic to be more "Matrix" like:
     // 1. Fill with random chars
     // 2. Resolve one by one
  }, [isInView, isRevealing]);


  // Improved Logic for "The Matrix" / "Decoder" effect:
  // We want the text to start as random junk and stabilize into the real text.
  
  useEffect(() => {
    if (!isInView) return;

    let iterations = 0;
    const interval = setInterval(() => {
        setDisplayText(() => {
          return text.split("").map((letter, index) => {
            if (index < iterations) {
                return text[index];
            }
            return CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
          }).join("");
        });

        if (iterations >= text.length) { 
            clearInterval(interval);
        }

        iterations += 1 / 3; // Slow down the reveal relative to the scramble
    }, scrambleSpeed);

    return () => clearInterval(interval);

  }, [isInView, text, scrambleSpeed]);

  return (
    <span ref={ref} className={`${className} font-mono`}>
        {displayText}
    </span>
  );
}
