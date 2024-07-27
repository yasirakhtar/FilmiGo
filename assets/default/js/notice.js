function joinTg(){
    // Create the notification div
const notificationDiv = document.createElement('div');
notificationDiv.id = 'notification';

// Create the message text
const messageText = document.createElement('p');
messageText.innerText = 'Please Join This Channel For Updates...';

const messageLink = document.createElement('a');
let channelLink = messageLink.href = "https://t.me/FilmiGoSite";
messageLink.target = '_blank';
messageLink.href = channelLink;

// Create the image
const notificationImage = document.createElement('img');
notificationImage.src = '/assets/advertisement/img/channel-logo.jpg';

// Create the close button
const closeButton = document.createElement('button');
closeButton.classList.add('close-btn');
closeButton.innerHTML = '<i class="fas fa-times"></i>';

// my js
messageLink.appendChild(notificationImage);
messageLink.appendChild(messageText);

// Append elements to the notification div
notificationDiv.appendChild(messageLink);
notificationDiv.appendChild(closeButton);

// Append the notification div to the body
document.body.appendChild(notificationDiv);

// Add event listener to close button
closeButton.addEventListener('click', () => {
    notificationDiv.style.display = 'none';
});

// Optional: Auto close the notification after a certain time (e.g., 10 seconds)
setTimeout(() => {
    notificationDiv.style.display = 'none';
}, 15000);
}

joinTg();