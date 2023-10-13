document.addEventListener("DOMContentLoaded", function () {
    // Dummy Data
    const attendingEvents = [
        {
            title: 'Community Gardening Day',
            date: '2023-10-15',
            description: "Join us for a day of gardening and beautifying our community. We'll plant flowers, maintain the garden, and enjoy some fresh air together.",
        },
        {
            title: 'Recycling Workshop',
            date: '2023-11-05',
            description: "Learn about the importance of recycling and how to do it effectively. We'll cover recycling tips and tricks, and you can bring your recyclables to drop off.",
        },
    ];
    const attendedEvents = [
        {
            title: 'Community Potluck Picnic',
            date: '2023-09-01',
            description: "Bring your favorite dish and join us for a fun community picnic. It's a great opportunity to connect with neighbors and enjoy delicious food",
        },
        {
            title: 'Youth Sports Day',
            date: '2023-08-01',
            description: "Calling all community athletes! Join us for a day of sports and games at the community park. We'll have soccer, basketball, and more. Get active and have fun!",
        },
        {
            title: 'Environmental Awareness Talk',
            date: '2023-07-01',
            description: "Learn about environmental issues and how we can make a positive impact on our planet. We'll have guest speakers and discussions on eco-friendly practices",
        }

    ];

    //  create event card
    function createEventCard(event) {
        const card = document.createElement('div');
        card.className = 'event-card';

        const content = document.createElement('div');
        content.className = 'event-card-content';

        const title = document.createElement('h3');
        title.className = 'event-card-title';
        title.textContent = event.title;
        content.appendChild(title);

        const date = document.createElement('p');
        date.className = 'event-card-date';
        date.textContent = event.date;
        content.appendChild(date);

        const description = document.createElement('p');
        description.className = 'event-card-description';
        description.textContent = event.description;
        content.appendChild(description);

        card.appendChild(content);

        return card;
    }

    // add cards to main
    const attendingContainer = document.getElementById('attending-events');
    attendingEvents.forEach(event => {
        attendingContainer.appendChild(createEventCard(event));
    });

    const attendedContainer = document.getElementById('attended-events');
    attendedEvents.forEach(event => {
        attendedContainer.appendChild(createEventCard(event));
    });
});
