const activities = [
    // Add your activities here
    { name: 'Go to the gym', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go fossil hunting', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'spring' },
    { name: 'Go look for cool rocks', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Go mountain biking', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Go shopping', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go to the movies', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Read a book', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Take a walk in the park', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Cook a new recipe', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Visit a museum', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'any' },
    { name: 'Do some gardening', timeOfDay: 'day', dayOfWeek: 'any', season: 'spring' },
    { name: 'Attend a local event', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go for a run', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Practice a hobby', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Volunteer', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Try a new restaurant', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Have a picnic', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'summer' },
    { name: 'Go hiking', timeOfDay: 'day', dayOfWeek: 'any', season: 'fall' },
    { name: 'Visit a new city', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'any' },
    { name: 'Take a yoga class', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go to the beach', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'summer' },
    { name: 'Visit a library', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Do a puzzle', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Watch a documentary', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go bird watching', timeOfDay: 'day', dayOfWeek: 'any', season: 'spring' },
    { name: 'Take a dance class', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Do a home improvement project', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Visit a farmers market', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'summer' },
    { name: 'Go to a concert', timeOfDay: 'evening', dayOfWeek: 'any', season: 'any' },
    { name: 'Explore a nearby town', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'any' },
    { name: 'Go to a sports game', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Try a new workout', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Have a game night with friends', timeOfDay: 'evening', dayOfWeek: 'any', season: 'any' },
    { name: 'Go to a brewery', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Visit an art gallery', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Go kayaking', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Go to an amusement park', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Visit a zoo or aquarium', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Take a scenic drive', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'fall' },
    { name: 'Go on a photography walk', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Go ice skating', timeOfDay: 'day', dayOfWeek: 'any', season: 'winter' },
    { name: 'Visit a botanical garden', timeOfDay: 'day', dayOfWeek: 'any', season: 'spring' },
    { name: 'Take a cooking class', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Try a new coffee shop', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go horseback riding', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Attend a theater performance', timeOfDay: 'evening', dayOfWeek: 'any', season: 'any' },
    { name: 'Go paddle boarding', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Visit a historical site', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Go to a food festival', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'summer' },
    { name: 'Attend a workshop or class', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Do a charity run/walk', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Go fishing', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Play a sport', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go on a wine tour', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'fall' },
    { name: 'Visit an animal sanctuary', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Attend a car show', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'summer' },
    { name: 'Go on a boat trip', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Go stargazing', timeOfDay: 'night', dayOfWeek: 'any', season: 'any' },
    { name: 'Visit a science center', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Go camping', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'summer' },
    { name: 'Take a pottery class', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go rollerblading', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Try a new bakery', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Visit a beach town', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'summer' },
    { name: 'Go whale watching', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Attend a fitness class', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go for a bike ride', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Visit a trampoline park', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Explore a cave', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Visit a hot spring', timeOfDay: 'day', dayOfWeek: 'any', season: 'winter' },
    { name: 'Go zip lining', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Go to a flea market', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'any' },
    { name: 'Visit an escape room', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go paintballing', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Try archery', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Visit a butterfly garden', timeOfDay: 'day', dayOfWeek: 'any', season: 'spring' },
    { name: 'Attend a craft fair', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'any' },
    { name: 'Go rock climbing', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Try a new ice cream place', timeOfDay: 'any', dayOfWeek: 'any', season: 'summer' },
    { name: 'Visit a lighthouse', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Go to a botanical festival', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'spring' },
    { name: 'Go on a scavenger hunt', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' }
];


function createReel() {
    const reel = document.getElementById('reel');
    const virtualActivities = [...activities, ...activities, ...activities]; // Repeat the activities list 3 times
    virtualActivities.forEach(activity => {
        const reelItem = document.createElement('div');
        reelItem.className = 'reel-item';
        reelItem.innerText = activity.name;
        reel.appendChild(reelItem);
    });
}

function spinReel() {
    const reel = document.getElementById('reel');
    const numItems = activities.length;
    const virtualNumItems = numItems * 3; // Number of items in the virtual list
    const cycleCount = 5; // Number of times to cycle through all activities
    const totalItems = cycleCount * virtualNumItems + Math.floor(Math.random() * virtualNumItems);
    
    const duration = (totalItems / virtualNumItems) * 4; // Duration of the spin animation

    const keyframes = `
        @keyframes spin {
            0% { transform: translateY(0); }
            100% { transform: translateY(${-totalItems * 50}px); }
        }
    `;
    const styleSheet = document.createElement('style');
    styleSheet.type = 'text/css';
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);

    reel.style.animation = `spin ${duration}s linear`;

    setTimeout(() => {
        const finalIndex = totalItems % virtualNumItems;
        const selectedActivity = activities[finalIndex % numItems].name;
        document.getElementById('activity').innerText = selectedActivity;
        reel.style.animation = 'none';
        reel.style.transform = `translateY(${-finalIndex * 50}px)`;
    }, duration * 100);
    /*
    const offset = -totalItems * 50; // 50px is the height of each reel item
    reel.style.transition = `transform ${totalItems / virtualNumItems}s linear`;
    reel.style.transform = `translateY(${offset}px)`;

    setTimeout(() => {
        const finalIndex = totalItems % virtualNumItems;
        const selectedActivity = activities[finalIndex % numItems].name;
        document.getElementById('activity').innerText = selectedActivity;
        reel.style.transition = 'none';
        reel.style.transform = `translateY(${-finalIndex * 50}px)`;
        void reel.offsetWidth; // Trigger a reflow
        reel.style.transition = 'transform 1s ease-out';
    }, (totalItems / virtualNumItems) * 1000); // Match the duration of the CSS transition
    */
}

function resetReel() {
    const reel = document.getElementById('reel');
    reel.style.transition = 'none';
    reel.style.transform = 'translateY(0)';
    void reel.offsetWidth; // Trigger a reflow
    reel.style.transition = 'transform 1s ease-out';
}

window.onload = function() {
    setRandomBackground();
    createReel();
};

function setRandomBackground() {
    const bodyElement = document.getElementById('body');
    const randomImageUrl = 'https://source.unsplash.com/random/1600x900';
    bodyElement.style.backgroundImage = `url(${randomImageUrl})`;
}