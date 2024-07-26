// Create the notification div
const notificationDiv = document.createElement('div');
notificationDiv.id = 'notification';

// Create the message text
const messageText = document.createElement('p');
messageText.innerText = 'Please Join This Channel For Updates';

// Create the image
const notificationImage = document.createElement('img');
notificationImage.src = 'https://via.placeholder.com/150'; // Replace with your image URL

// Create the close button
const closeButton = document.createElement('button');
closeButton.classList.add('close-btn');
closeButton.innerHTML = '<i class="fas fa-times"></i>';

// Append elements to the notification div
notificationDiv.appendChild(notificationImage);
notificationDiv.appendChild(messageText);
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
}, 10000);
