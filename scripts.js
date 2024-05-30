// scripts.js
const activities = [
    { name: 'Go to the gym', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go fossil hunting', timeOfDay: 'day', dayOfWeek: 'weekend', season: 'spring' },
    { name: 'Go look for cool rocks', timeOfDay: 'day', dayOfWeek: 'any', season: 'any' },
    { name: 'Go mountain biking', timeOfDay: 'day', dayOfWeek: 'any', season: 'summer' },
    { name: 'Go shopping', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' },
    { name: 'Go to the movies', timeOfDay: 'any', dayOfWeek: 'any', season: 'any' }
];

function getCurrentTimeOfDay() {
    const hours = new Date().getHours();
    return (hours >= 6 && hours < 18) ? 'day' : 'night';
}

function getCurrentDayOfWeek() {
    const day = new Date().getDay();
    return (day === 0 || day === 6) ? 'weekend' : 'weekday';
}

function getCurrentSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return 'spring';
    if (month >= 5 && month <= 7) return 'summer';
    if (month >= 8 && month <= 10) return 'fall';
    return 'winter';
}

function filterActivities() {
    const timeOfDay = getCurrentTimeOfDay();
    const dayOfWeek = getCurrentDayOfWeek();
    const season = getCurrentSeason();

    return activities.filter(activity => 
        (activity.timeOfDay === 'any' || activity.timeOfDay === timeOfDay) &&
        (activity.dayOfWeek === 'any' || activity.dayOfWeek === dayOfWeek) &&
        (activity.season === 'any' || activity.season === season)
    );
}

function selectActivity() {
    const filteredActivities = filterActivities();
    const randomIndex = Math.floor(Math.random() * filteredActivities.length);
    const selectedActivity = filteredActivities[randomIndex];
    document.getElementById('activity').innerText = selectedActivity ? selectedActivity.name : 'No activities available.';
}
