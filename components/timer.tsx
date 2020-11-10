import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`12/21/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
    }
    return timeLeft;
};

export default function Timer() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        // Clear timeout if the component is unmounted
        return () => clearTimeout(timer);
    });
    var timerComponents: any[] = [];
    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <div>
                <article className="prose lg:prose-xl">
                    <h1 className="pr-10 mb-0" style={{ marginBottom: 0 }}>{timeLeft[interval]} {" "}</h1>
                    <p className="text-sm capitalize">{interval}</p>
                </article>
            </div>
        );
    });
    
    return (
        <div className="m-auto -mt-24 bg-gray-100 max-w-xl border-r border-b border-l border-t border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400">
            <div className="flex flex-wrap justify-center p-5 pl-2 pr-2">
                {timerComponents.length ? timerComponents : <span>Time's up!</span>}
                <div style={{ flexBasis: "100%", height: 0}}></div>
                <div className="mt-8">
                    <article className="prose lg:prose-xl">
                        <h2 className="">21 December {year}</h2>
                    </article>
                </div>
            </div>  
        </div>
  );
};