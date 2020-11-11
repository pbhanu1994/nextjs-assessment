import React from 'react';
import Link from 'next/link';
import { cardsInfo, responsive } from '../services/events';
import CarouselSlider from './common/carousel';

const carouselElement = cardsInfo && cardsInfo.map(card => (<div className="bg-gray-100 rounded overflow-hidden shadow-md mr-5 mb-5" key={card.id}><img className="w-full h-32 sm:h-48 object-cover" src={card.img} alt={card.title} />
    <div className="m-4">
        <article className="prose lg:prose-xl">
            <p className="font-bold text-center" style={{ marginBottom: 0 }}>{card.title}</p>
            <p className="block text-center mt-0" style={{ marginTop: 0 }}>{card.name}</p>
            <p style={{ marginBottom: 0 }} className="text-base">21 Dec 20</p>
            <p style={{ marginTop: 0 }} className="font-light text-sm">Friday</p>
        </article>
    </div>
</div>));

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
                <CarouselSlider responsive={responsive} element={carouselElement} dots={false} removeArrow="" />
            </div>
        </div>
  );
};