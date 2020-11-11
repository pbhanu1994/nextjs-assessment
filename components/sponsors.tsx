import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import { cardsInfo } from '../services/sponsors';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
    }
}

export default function Sponsors() {
    return (
        <div className="m-5 mb-10">
            <div>
                <article className="flex prose lg:prose-xl">
                    <h2 className="pr-10">Sponsors</h2>
                    <Link href="/not-found">View all sponsors</Link>
                </article>
            </div>
            <div>
                <Carousel swipeable={false}
                    draggable={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {cardsInfo && cardsInfo.map(card => <div className="m-5 text-center overflow-hidden" key={card.id}>
                        <div className="inline-block">
                            <img className="h-24" src={card.img} alt={card.title} />
                        </div>
                    </div>)}
                </Carousel>
            </div>
        </div>
  );
};