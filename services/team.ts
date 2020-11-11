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

const cardsInfo = [
    { id: 1, title: 'Amy Weiss', name: 'Event Manager', img: './img/team/1.jpg' },
    { id: 2, title: 'James Travis', name: 'Head of Production', img: './img/team/2.jpg' },
    { id: 3, title: 'Sharon Filler', name: 'Admin & Legal', img: './img/team/3.jpg' },
    { id: 3, title: 'Bruce Nolan', name: 'Chief Editor', img: './img/team/4.jpg' },
];

export { cardsInfo, responsive };