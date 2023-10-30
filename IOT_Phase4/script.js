document.addEventListener('DOMContentLoaded', function() {
    const waterLevelDisplay = document.getElementById('water-level');
    const connectionStatusDisplay = document.getElementById('connection-status');
    const modeDisplay = document.getElementById('mode');
    const relayStatusDisplay = document.getElementById('relay-status');
    const buzzerStatusDisplay = document.getElementById('buzzer-status');

    function updateDisplay(data) {
        waterLevelDisplay.innerText = `Water Level: ${data.waterLevel}%`;
        connectionStatusDisplay.innerText = data.connectionStatus ? 'Status: Online' : 'Status: Offline';
        modeDisplay.innerText = `Mode: ${data.mode}`;
        relayStatusDisplay.innerText = `Relay: ${data.relayStatus ? 'ON' : 'OFF'}`;
        buzzerStatusDisplay.innerText = `Buzzer: ${data.buzzerStatus ? 'ON' : 'OFF'}`;
    }

    function fetchData() {
        // Make an API request to your IoT device for the data
        // Replace 'apiEndpoint' with the actual endpoint to retrieve data from your IoT device
        fetch('apiEndpoint')
            .then(response => response.json())
            .then(data => updateDisplay(data))
            .catch(error => console.error('Error:', error));
    }

    // Update data every 3 seconds
    setInterval(fetchData, 3000);
});
