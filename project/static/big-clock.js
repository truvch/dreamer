

document.addEventListener('DOMContentLoaded', function() {
    const timeString = document.querySelector('.highlight').textContent.trim();
    const [timePart, modifier] = timeString.split(' ');
    const [hours, minutes] = timePart.split(':').map(num => parseInt(num));

    let hours24 = hours;
    if (modifier === 'PM' && hours !== 12) {
        hours24 += 12;
    } else if (modifier === 'AM' && hours === 12) {
        hours24 = 0;
    }

    const hourDegrees = (hours24 % 12) * 30 + (minutes * 0.5);
    const minuteDegrees = minutes * 6;

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');

    // I used the help of ChatGPT with this part
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
});
