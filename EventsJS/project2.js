const randomcolor = function() {
    const hex = "0123456789ABCDEF"; // Include 0-9 for a complete hex color range
    let color = '#';
    for (let i = 0; i < 6; i++) { // Generate a valid hex color code
        color += hex[Math.floor(Math.random() * 16)]; // Corrected to 16 for a proper range
    }
    return color;
};

let intervalId;

const startchange = function() {
    intervalId = setInterval(changebgcolor, 1000);
    function changebgcolor() {
        document.body.style.background = randomcolor();
    }
};

const stopchange = function() {
    clearInterval(intervalId);
};

document.querySelector('#start').addEventListener('click', startchange);
document.querySelector('#stop').addEventListener('click', stopchange);
