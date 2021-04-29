const btn = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Hello',
  'You are beautiful',
  'Nice to see you',
  'Have a nice Day',
];

btn.addEventListener('click', () => createNotification(getRandomMessage()));

function createNotification(message) {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.innerText = message;
  toasts.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
