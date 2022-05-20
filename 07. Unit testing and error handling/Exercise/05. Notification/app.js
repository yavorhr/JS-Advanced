function notify(message) {
  const notificationId = document.querySelector('#notification');
  notificationId.textContent = message;

  notificationId.style.display = 'block';
  notificationId.addEventListener('click', (event) => {
    event.target.style.display = 'none';
  })
}