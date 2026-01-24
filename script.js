const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const calculateBtn = document.getElementById('calculateBtn');
const bmiValue = document.getElementById('bmiValue');
const bmiFill = document.getElementById('bmiFill');
const bmiCategory = document.getElementById('bmiCategory');
const bmiEmoji = document.getElementById('bmiEmoji');

calculateBtn.addEventListener('click', () => {
    const height = Number(heightInput.value) / 100; // meters
    const weight = Number(weightInput.value);

    if (!height || !weight) {
        alert("Please enter valid height and weight!");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(1);
    bmiValue.textContent = bmi;

    let category = "";
    let color = "";
    let emoji = "";

    if (bmi < 18.5) {
        category = "Underweight";
        color = "#f39c12"; 
        emoji = "🥺";
    } else if (bmi < 25) {
        category = "Healthy";
        color = "#2ecc71"; 
        emoji = "😄";
    } else if (bmi < 30) {
        category = "Overweight";
        color = "#e67e22"; 
        emoji = "😅";
    } else {
        category = "Obese";
        color = "#e74c3c"; 
        emoji = "😢";
    }

    bmiCategory.textContent = category;
    bmiFill.style.backgroundColor = color;
    bmiEmoji.textContent = emoji;

    // Animate bar
    const fillPercentage = Math.min((bmi / 40) * 100, 100);
    bmiFill.style.width = fillPercentage + "%";

    // Emoji bounce animation
    bmiEmoji.style.transform = "scale(1.3)";
    setTimeout(() => {
        bmiEmoji.style.transform = "scale(1)";
    }, 300);
});

// Random floating icons
const floatingIcons = document.querySelector('.floating-icons');
const icons = ["🏃‍♂️","🍎","💧","🥗","🏋️‍♀️"];

for (let i = 0; i < 15; i++) {
    let span = document.createElement('span');
    span.textContent = icons[Math.floor(Math.random() * icons.length)];
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 4 + Math.random() * 6 + "s";
    floatingIcons.appendChild(span);
}
