document.getElementById('scroll-btn').addEventListener('click', () => {
    document.getElementById('packages').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Booking Form Submission
  const bookingForm = document.getElementById('booking-form');
  const modal = document.getElementById('confirmation-modal');
  const closeModal = document.querySelector('.close-btn');
  
  bookingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    modal.style.display = 'flex';
  });
  
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });
  
  // Close the modal when clicking outside
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };

  const packagesContainer = document.querySelector('.package-container');

let isDown = false;
let startX;
let scrollLeft;

// Mouse Down Event - Start Dragging
packagesContainer.addEventListener('mousedown', (e) => {
  isDown = true;
  packagesContainer.classList.add('active');
  startX = e.pageX - packagesContainer.offsetLeft;
  scrollLeft = packagesContainer.scrollLeft;
});

// Mouse Leave Event - Stop Dragging When Mouse Leaves the Container
packagesContainer.addEventListener('mouseleave', () => {
  isDown = false;
  packagesContainer.classList.remove('active');
});

// Mouse Up Event - Stop Dragging
packagesContainer.addEventListener('mouseup', () => {
  isDown = false;
  packagesContainer.classList.remove('active');
});

// Mouse Move Event - Handle the Dragging
packagesContainer.addEventListener('mousemove', (e) => {
  if (!isDown) return; // Exit if the mouse isn't down
  e.preventDefault(); // Prevent default behavior
  const x = e.pageX - packagesContainer.offsetLeft; // Get current mouse position
  const walk = (x - startX) * 2; // Calculate the distance moved
  packagesContainer.scrollLeft = scrollLeft - walk; // Scroll the container
});

  