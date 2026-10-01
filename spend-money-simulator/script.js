let balance = 1000000000000; // 1 Trillion Dollars!
let currentDisplayedBalance = balance;

const items = [
    { name: "McDonald's Meal", price: 10 },
    { name: "PlayStation 5 Pro", price: 700 },
    { name: "Gold Rolex", price: 25000 },
    { name: "Tesla Model S Plaid", price: 130000 },
    { name: "Modern Mansion", price: 5000000 },
    { name: "Private Island", price: 50000000 },
    { name: "Burj Khalifa", price: 1500000000 },
    { name: "NASA Space Shuttle", price: 1700000000 },
    { name: "IPL Team", price: 900000000 },
    { name: "Monalisa Painting", price: 860000000 },
    { name: "Cruise Ship", price: 1200000000 },
    { name: "Moon par ek Plot", price: 5000000000 },
    { name: "Kingdom of Monaco", price: 30000000000 }
];

const balanceEl = document.getElementById('balance');

// Smoothly counting down the money
function animateBalanceChange(target) {
    const duration = 500; // 0.5 seconds
    const start = currentDisplayedBalance;
    const end = target;
    const startTime = performance.now();

    balanceEl.parentElement.classList.add('money-change');
    setTimeout(() => balanceEl.parentElement.classList.remove('money-change'), 500);

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        currentDisplayedBalance = Math.floor(start + (end - start) * progress);
        balanceEl.innerText = currentDisplayedBalance.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

function buyItem(name, price) {
    if (balance >= price) {
        balance -= price;
        animateBalanceChange(balance);
        
        // Inventory update
        const li = document.createElement('li');
        li.style.color = "#ffd700";
        li.innerHTML = `<strong>${name}</strong> kharida - $${price.toLocaleString()}`;
        document.getElementById('inventory').prepend(li); // Naya item sabse upar
    } else {
        alert("Paisa khatam! Ab kaam par lag jao.");
    }
}

// Initial Render
const grid = document.getElementById('item-grid');
items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'item-card';
    card.innerHTML = `
        <h3>${item.name}</h3>
        <p style="color: #4caf50; font-weight: bold;">$${item.price.toLocaleString()}</p>
        <button onclick="buyItem('${item.name}', ${item.price})">Kharid Lo!</button>
    `;
    grid.appendChild(card);
});