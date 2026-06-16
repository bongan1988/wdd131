document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("modification-date").textContent = document.lastModified;

const hour = new Date().getHours();

if (hour < 12) {
    document.getElementById("greeting").textContent = "Good Morning!";
} else {
    document.getElementById("greeting").textContent = "Good Afternoon!";
}
