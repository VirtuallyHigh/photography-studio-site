document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  // Function to show the target section
  function showSection(sectionId) {
    sections.forEach(section => section.style.display = 'none');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.style.display = 'block';
    } else {
      document.getElementById('home').style.display = 'block'; // Fallback to home
    }
  }

  // Add click event to nav links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      showSection(targetId);
    });
  });

  // Show home section by default or based on URL hash
  const hash = window.location.hash.substring(1) || 'home';
  showSection(hash);
});