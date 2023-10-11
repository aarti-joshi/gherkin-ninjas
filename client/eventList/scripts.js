const events = [
    "Community Gardening Day",
    "Recycling Workshop",
    "Neighbourhood Clean-up Drive",
    "Community Potluck Picnic",
    "Youth Sports Day",
    "Environmental Awareness Talk",
    "Community Arts and Crafts Fair",
    "Food Drive for the Needy",
    "Community Health and Wellness Day",
    "Neighbourhood Book Club",
];

const eventList = document.getElementById("eventList");

events.forEach(event => {
    const listItem = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function() {
        if (this.checked) {
            alert(`You have registered for ${event}`);
        } else {
            alert(`You have unregistered from ${event}`);
        }
    });
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(event));
    eventList.appendChild(listItem);
});
