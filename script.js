document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  function showSection(sectionId) {
    sections.forEach(section => section.style.display = 'none');
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.style.display = 'block';
    } else {
      document.getElementById('home').style.display = 'block'; // Fallback
    }
  }

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      showSection(targetId);
      window.location.hash = targetId; // Update URL hash
    });
  });

  // Show section based on URL hash or default to home
  const hash = window.location.hash.substring(1) || 'home';
  showSection(hash);
});