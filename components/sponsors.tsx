import React from 'react';
import Link from 'next/link';
import Carousel from 'react-multi-carousel';
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
const cardInfo = [
    { id: 1, title: 'Monk', name: 'Monk', img: './img/sponsors/1.png' },
    { id: 2, title: 'Google', name: 'Google', img: './img/sponsors/2.png' },
    { id: 3, title: 'Media Monks', name: 'Media Monks', img: './img/sponsors/3.png' },
    { id: 4, title: 'Tool', name: 'Tool', img: './img/sponsors/4.png' },
    { id: 5, title: 'HP', name: 'HP', img: './img/sponsors/5.png' },
    { id: 6, title: 'Paul Digital', name: 'Paul Digital', img: './img/sponsors/6.png' },
];
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
                    {cardInfo.map(card => <div className="m-5 text-center overflow-hidden">
                        <div className="inline-block">
                            <img className="h-24" src={card.img} alt={card.title} />
                        </div>
                    </div>)}
                </Carousel>
            </div>
        </div>
  );
};