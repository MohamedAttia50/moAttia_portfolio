    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const mobileThemeToggle = document.getElementById('mobileThemeToggle');
    const body = document.body;
    
    // Check for saved theme preference or use preferred color scheme
    const currentTheme = localStorage.getItem('theme') || 
    (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    if (currentTheme === 'light') {
      body.classList.add('light-mode');
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      mobileThemeToggle.innerHTML = '<i class="fas fa-moon"></i> Toggle Theme';
    }
    
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      themeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });
    
    mobileThemeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      mobileThemeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i> Toggle Theme' : '<i class="fas fa-sun"></i> Toggle Theme';
    });
    
    // Mobile Menu
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn = document.getElementById('closeMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
    
    closeMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    overlay.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
    
    // Close mobile menu when clicking on a link
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Floating Icons
    const floatingIconsContainer = document.getElementById('floatingIcons');
    const icons = ['fab fa-html5', 'fab fa-css3-alt', 'fab fa-js', 'fab fa-react', 
                  'fab fa-node-js', 'fab fa-git-alt', 'fas fa-database', 'fas fa-code'];
    
    for (let i = 0; i < 30; i++) {
      const icon = document.createElement('i');
      icon.className = `${icons[Math.floor(Math.random() * icons.length)]} floating-icon`;
      icon.style.left = `${Math.random() * 100}%`;
      icon.style.top = `${Math.random() * 100}%`;
      icon.style.animationDuration = `${15 + Math.random() * 20}s`;
      icon.style.animationDelay = `${Math.random() * 5}s`;
      floatingIconsContainer.appendChild(icon);
    }
    
    // Scroll Reveal Animation
    const sections = document.querySelectorAll('.section, .hero');
    
    const revealOnScroll = () => {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight - 100) {
          section.classList.add('visible');
        }
      });
      
      // Project cards animation
      const projectCards = document.querySelectorAll('.project-card');
      projectCards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (cardTop < windowHeight - 100) {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 200);
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      // Here you would typically send the form data to a server
      console.log({ name, email, subject, message });
      
      // Show success message
      alert('Thank you for your message! I will get back to you soon.');
      contactForm.reset();
    });
    
    // Typing animation
    const typingText = document.querySelector('.typing-text');
    const words = ['Developer', 'Designer', 'Problem Solver', 'Creator'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const type = () => {
      const currentWord = words[wordIndex];
      const currentChar = currentWord.substring(0, charIndex);
      typingText.textContent = currentChar;
      
      if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(type, 100);
      } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(type, 50);
      } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
          wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(type, 2000);
      }
    };
    
    // Start typing animation
    setTimeout(type, 2000);
