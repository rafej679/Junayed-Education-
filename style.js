document.addEventListener('DOMContentLoaded', () => {
  const contactModal = document.getElementById('contactModal');
  const messageModal = document.getElementById('messageModal');

  const openContactModal = document.getElementById('openContactModal');
  const openMessageModal = document.getElementById('openMessageModal');
  const navContactBtn = document.getElementById('navContactBtn');

  const closeContact = document.getElementById('closeContact');
  const closeMessage = document.getElementById('closeMessage');

  const showContact = (e) => {
    e.preventDefault();
    contactModal.style.display = 'block';
  };

  openContactModal.addEventListener('click', showContact);
  navContactBtn.addEventListener('click', showContact);

  openMessageModal.addEventListener('click', () => {
    messageModal.style.display = 'block';
  });

  closeContact.addEventListener('click', () => {
    contactModal.style.display = 'none';
  });

  closeMessage.addEventListener('click', () => {
    messageModal.style.display = 'none';
  });

  window.addEventListener('click', (event) => {
    if (event.target === contactModal) contactModal.style.display = 'none';
    if (event.target === messageModal) messageModal.style.display = 'none';
  });

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});
