function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '00');
    const minutes = String(now.getMinutes()).padStart(2, '00');
    const seconds = String(now.getSeconds()).padStart(2, '00');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    const dateString = now.toDateString();
    
    document.getElementById('clock').innerHTML = `${dateString} ${timeString}`;
}

setInterval(updateClock, 1000);
updateClock(); // initial call to display clock immediately