const { hash } = window.location;
const message = atob(hash.replace('#', ''));
if(message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    const messageInput = document.querySelector('#message-input');
    const linkInput = document.querySelector('#link-input');
    const messageForm = document.querySelector('#message-form');
    const linkForm = document.querySelector('#link-form');
    const encrypted = btoa(messageInput.value);
    linkInput.value = `${window.location}#${encrypted}`;
    messageForm.classList.add('hide');
    linkForm.classList.remove('hide');
    linkInput.select();




});

