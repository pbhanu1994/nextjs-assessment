import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import { cardsInfo } from '../services/events';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
}

export default function Events() {
    return (
        <div className="m-5 mt-10 mb-10">
            <div>
                <article className="flex prose lg:prose-xl">
                    <h2 className="pr-10">Events</h2>
                    <Link href="/not-found">View all Events</Link>
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
                >
                    {cardsInfo && cardsInfo.map(card => <div className="bg-gray-100 rounded overflow-hidden shadow-md mr-5 mb-5" key={card.id}><img className="w-full h-32 sm:h-48 object-cover" src={card.img} alt={card.title} />
                        <div className="m-4">
                            <article className="prose lg:prose-xl">
                                <p className="font-bold text-center" style={{ marginBottom: 0}}>{card.title}</p>
                                <p className="block text-center mt-0" style={{ marginTop: 0 }}>{card.name}</p>
                                <p style={{ marginBottom: 0}} className="text-base">21 Dec 20</p>
                                <p style={{ marginTop: 0}} className="font-light text-sm">Friday</p>
                            </article>
                        </div>
                    </div>)}
                </Carousel>
            </div>
        </div>
  );
};