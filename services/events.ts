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

const cardsInfo = [
    { id: 1, title: 'Keynote', name: 'Athanasia Loukadi', img: './img/events/keynote.jpg' },
    { id: 2, title: 'Workshops', name: 'Stoiximan/Betano', img: './img/events/workshops.jpg' },
    { id: 3, title: 'Masterclass', name: 'Benjamin', img: './img/events/masterclass.jpg' },
    { id: 4, title: 'Chat', name: 'Louise', img: './img/events/chat.jpg' },
];

export { cardsInfo, responsive };