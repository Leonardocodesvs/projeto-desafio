const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const orderModal = document.querySelector('#order-modal');
const selectedPackage = document.querySelector('#selected-package');
const orderForm = document.querySelector('#order-form');
const formMessage = document.querySelector('#form-message');

function openModal(packageName) {
  selectedPackage.textContent = packageName;
  formMessage.textContent = '';
  orderModal.hidden = false;
  document.body.style.overflow = 'hidden';
  document.querySelector('#customer-name').focus();
}

function closeModal() {
  orderModal.hidden = true;
  document.body.style.overflow = '';
}

if (menuButton && nav) {
  menuButton.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open menu');
    });
  });
}

document.querySelectorAll('.faq-item button').forEach(function (button) {
  button.addEventListener('click', function () {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
});

document.querySelectorAll('.buy-button').forEach(function (button) {
  button.addEventListener('click', function () {
    openModal(button.dataset.package);
  });
});

document.querySelectorAll('[data-close-modal]').forEach(function (element) {
  element.addEventListener('click', closeModal);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !orderModal.hidden) {
    closeModal();
  }
});

//Favor , informe , seu nome:
orderForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#customer-name').value.trim();

  if (!name) {
    formMessage.textContent = 'Por favor, informe seu nome.';
    return;
  }

  formMessage.textContent = `Obrigado, ${name}! Sua solicitação foi registrada para ${selectedPackage.textContent}.`;

  orderForm.reset();
});
