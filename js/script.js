const certifications = [
"Salesforce Certified Administrator",
"Salesforce Marketing Cloud Email Specialist",
"Salesforce Marketing Cloud Developer",
"Salesforce Certified Platform App Builder",
"Salesforce Certified Platform Developer I",
"Salesforce Certified Platform Developer II",
"Salesforce Certified Advanced Administrator",
"Salesforce Certified Service Cloud Consultant",
"Salesforce Certified Sales Cloud Consultant"
];

const certContainer = document.getElementById("cert-container");
const displayedCerts = [];

function isOverlapping(x, y, width = 200, height = 30) {
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const safeZoneSize = 220;

const inSafeZone =
x + width > centerX - safeZoneSize / 2 &&
x < centerX + safeZoneSize / 2 &&
y + height > centerY - safeZoneSize / 2 &&
y < centerY + safeZoneSize / 2;

if (inSafeZone) return true;

for (let pos of displayedCerts) {
if (
x < pos.x + width &&
x + width > pos.x &&
y < pos.y + height &&
y + height > pos.y
) {
return true;
}
}

return false;
}

function showRandomCert() {
let x, y;
const width = 200;
const height = 30;
const maxAttempts = 25;
let attempts = 0;

do {
x = Math.random() * (window.innerWidth - width);
y = Math.random() * (window.innerHeight - height);
attempts++;
} while (isOverlapping(x, y, width, height) && attempts < maxAttempts);

if (attempts === maxAttempts) return;

const cert = document.createElement("div");
cert.className = "cert";
cert.innerText = certifications[Math.floor(Math.random() * certifications.length)];
cert.style.left = `${x}px`;
cert.style.top = `${y}px`;

certContainer.appendChild(cert);
displayedCerts.push({ x, y });

setTimeout(() => {
cert.remove();
const index = displayedCerts.findIndex(pos => pos.x === x && pos.y === y);
if (index !== -1) displayedCerts.splice(index, 1);
}, 4000);
}

setInterval(showRandomCert, 1000);
// Optional: redirect after 8 seconds
setTimeout(() => {
window.location.href = "https://tapiwamuwomosalesforcedeveloper.netlify.app/";
}, 8000);