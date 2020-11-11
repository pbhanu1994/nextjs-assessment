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

const cardsInfo = [
    { id: 1, title: 'Monk', name: 'Monk', img: './img/sponsors/1.png' },
    { id: 2, title: 'Google', name: 'Google', img: './img/sponsors/2.png' },
    { id: 3, title: 'Media Monks', name: 'Media Monks', img: './img/sponsors/3.png' },
    { id: 4, title: 'Tool', name: 'Tool', img: './img/sponsors/4.png' },
    { id: 5, title: 'HP', name: 'HP', img: './img/sponsors/5.png' },
    { id: 6, title: 'Paul Digital', name: 'Paul Digital', img: './img/sponsors/6.png' },
];

export { cardsInfo, responsive };