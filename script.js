
// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  
  menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    // Change icon between menu and X
    const icon = menuToggle.querySelector('i');
    if (mobileNav.classList.contains('active')) {
      icon.setAttribute('data-lucide', 'x');
    } else {
      icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
  });
  
  // Mobile dropdown menu
  const mobileDropdownButton = document.querySelector('.mobile-dropdown-button');
  const mobileDropdownContent = document.querySelector('.mobile-dropdown-content');
  
  mobileDropdownButton.addEventListener('click', () => {
    mobileDropdownContent.classList.toggle('active');
    // Rotate chevron icon
    const icon = mobileDropdownButton.querySelector('i');
    if (mobileDropdownContent.classList.contains('active')) {
      mobileDropdownButton.querySelector('i').style.transform = 'rotate(180deg)';
    } else {
      mobileDropdownButton.querySelector('i').style.transform = 'rotate(0)';
    }
  });
  
  // Form submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      // In a real application, you would handle form submission to a server here
      alert('Form submitted! In a real application, this data would be sent to the server.');
      contactForm.reset();
    });
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
        
        // Close mobile menu if it's open
        if (mobileNav.classList.contains('active')) {
          mobileNav.classList.remove('active');
          menuToggle.querySelector('i').setAttribute('data-lucide', 'menu');
          lucide.createIcons();
        }
      }
    });
  });
  
  // Add animation to elements when they come into view
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.section-header, .campus-card, .testimonial-card, .news-card, .program-card');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  };
  
  // Set initial styles for animation
  const elementsToAnimate = document.querySelectorAll('.section-header, .campus-card, .testimonial-card, .news-card, .program-card');
  elementsToAnimate.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
  });
  
  // Run animation check on load and scroll
  window.addEventListener('load', animateOnScroll);
  window.addEventListener('scroll', animateOnScroll);
});
