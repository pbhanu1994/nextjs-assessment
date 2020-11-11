import React from 'react';
import Link from 'next/link';
import { cardsInfo, responsive } from '../services/sponsors';
import CarouselSlider from './common/carousel';
import 'react-multi-carousel/lib/styles.css';

const carouselElement = cardsInfo && cardsInfo.map(card => <div className="m-5 text-center overflow-hidden" key={card.id}>
    <div className="inline-block">
        <img className="h-24" src={card.img} alt={card.title} />
    </div>
</div>);

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
                <CarouselSlider responsive={responsive} element={carouselElement} dots={false} removeArrow={["tablet", "mobile"]} />
            </div>
        </div>
  );
};