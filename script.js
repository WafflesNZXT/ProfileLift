// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for all anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navbarHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Mobile menu toggle (basic implementation)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            alert('Mobile menu functionality can be expanded here. For now, please use the desktop navigation or scroll to sections.');
        });
    }
    
    // Add active state to navbar on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Button click handlers (you can customize these)
    const buttons = document.querySelectorAll('.btn');
    
     buttons.forEach(button => {
    if (!button.classList.contains('mobile-menu-btn')) {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            
            if (buttonText.includes('Get Started') || buttonText.includes('Start Your Transformation')) {
                window.location.href = 'contact.html';
            } else if (buttonText.includes('See How It Works') || buttonText.includes('Schedule a Consultation')) {
                window.location.href = 'howitworks.html';
            }
        });
    }
});
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and benefit items for animation
    const animatedElements = document.querySelectorAll('.service-card, .benefit-item');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});
