import { useState, useEffect } from "react";

export default function PeekingMascot() {
    const [isPeeking, setIsPeeking] = useState(false);

    useEffect(() => {
        let timeoutId;

        const triggerPeek = () => {
            setIsPeeking(true);

            // Keep it visible for 3 seconds while the animation runs
            timeoutId = setTimeout(() => {
                setIsPeeking(false);

                // Schedule the next random peek between 5 to 10 seconds later
                const nextDelay = Math.floor(Math.random() * 5000) + 5000;
                timeoutId = setTimeout(triggerPeek, nextDelay);
            }, 3000);
        };

        // QUICK INITIAL LAUNCH: Pops up 1.5 seconds after page loads so you can see it work!
        timeoutId = setTimeout(triggerPeek, 1500);

        return () => clearTimeout(timeoutId);
    }, []);

    if (!isPeeking) return null;

    return (
        <div style={styles.container}>
            <style>{`
                @keyframes peekUpAndLook {
                    0% { transform: translateY(100%) scaleX(1); }
                    15% { transform: translateY(0px) scaleX(1); }    /* Pops up over border */
                    45% { transform: translateY(0px) scaleX(1); }
                    50% { transform: translateY(0px) scaleX(-1); }   /* Flips to look left */
                    80% { transform: translateY(0px) scaleX(-1); }
                    85% { transform: translateY(0px) scaleX(1); }    /* Flips back right */
                    100% { transform: translateY(100%) scaleX(1); }  /* Slides back down hidden */
                }
                .mascot-peek-action {
                    animation: peekUpAndLook 3s ease-in-out forwards;
                    transform-origin: center bottom;
                }
            `}</style>

            <div className="mascot-peek-action">
                <svg width="55" height="45" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Top Fin */}
                    <path d="M30 12C30 12 26 2 31 0C33 2 34 12 34 12Z" fill="#78899a" stroke="#5a6a7b" strokeWidth="1.5" />

                    {/* Shark Hood Head */}
                    <path d="M10 50C8 30 14 14 30 14C46 14 52 30 50 50Z" fill="#8293a4" stroke="#5a6a7b" strokeWidth="2" />

                    {/* Inner White Face Opening */}
                    <path d="M17 50C17 38 22 30 30 30C38 30 43 38 43 50Z" fill="#ffffff" />

                    {/* Costume Teeth */}
                    <path d="M17 34L21 39L25 34L29 39L33 34L37 39L41 34" fill="#ffffff" stroke="#5a6a7b" strokeWidth="1.5" />

                    {/* Grumpy Peeking Eyes */}
                    <path d="M22 43C22 40 25 39 26 41" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                    <path d="M38 43C38 40 35 39 34 41" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                    <path d="M21 38L27 40" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />
                    <path d="M39 38L33 40" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" />

                    {/* Tiny Pink Nose */}
                    <polygon points="29,43 31,43 30,45" fill="#f43f5e" />
                </svg>
            </div>
        </div>
    );
}

const styles = {
    container: {
        position: "absolute",
        bottom: "-2px", // Aligns perfectly to the bottom edge border
        right: "20px",
        width: "55px",
        height: "45px",
        pointerEvents: "none",
        zIndex: 99,
    }
};