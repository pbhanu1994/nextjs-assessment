import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
import { cardsInfo } from '../services/team';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
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

export default function Team() {
    return (
        <div className="m-5 mb-10">
            <div className="mb-5">
                <article className="flex prose lg:prose-xl">
                    <h2 className="pr-10">Our Team</h2>
                </article>
            </div>
            <div>
                <Carousel swipeable={false}
                    draggable={true}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    showDots={true}
                    autoPlaySpeed={1000}
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    {cardsInfo && cardsInfo.map(card => <div className="max-w-lg w-full lg:max-w-full lg:flex shadow-lg mr-5" key={card.id}>
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
                            <img className="w-full h-32 sm:h-48 object-cover" src={card.img} alt={card.title} />
                        </div>
                        <div className="bg-gray-100 border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            <article className="prose lg:prose-xl">
                                <p className="font-bold text-center" style={{ marginBottom: 0}}>{card.title}</p>
                                <p className="text-center text-base mt-0" style={{ marginTop: 0 }}>{card.name}</p>
                            </article>
                        </div>
                    </div>)}
                </Carousel>
            </div>
        </div>
  );
};