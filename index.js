document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');

  const spinner = document.createElement('div');
  spinner.classList.add('loader');

  container.insertBefore(spinner, document.querySelector('.heading'));


  const img = document.createElement('img');
  img.classList.add('qr-code');
  img.alt = 'QR code to Frontend Mentor';
  img.src = './images/image-qr-code.png';
  img.addEventListener('load', function () {
    container.removeChild(spinner);
    container.insertBefore(img, document.querySelector('.heading'));
  });
});
