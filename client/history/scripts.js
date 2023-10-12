document.addEventListener("DOMContentLoaded", function () {
    // Dummy Data
    const attendingEvents = [
        {
            title: 'Event a',
            date: '2023-12-01',
            description: 'description',
        },
    ];
    const attendedEvents = [
        {
            title: 'Event b',
            date: '2023-10-01',
            description: 'description',
        },
        {
            title: 'Event c',
            date: '2023-10-01',
            description: 'discription',
        },
        {
            title: 'Event d',
            date: '2023-10-01',
            description: 'discription',
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
