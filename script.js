// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button functionality
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    document.querySelector('#products').scrollIntoView({
        behavior: 'smooth'
    });
});

// Buy button functionality
document.querySelectorAll('.buy-button').forEach(button => {
    button.addEventListener('click', function() {
        const productName = this.parentElement.querySelector('h3').textContent;
        const price = this.parentElement.querySelector('.price').textContent;
        
        // Simple alert - dalam implementasi nyata bisa dihubungkan ke sistem checkout
        alert(`Terima kasih! Anda akan membeli ${productName} dengan harga ${price}. Fitur checkout akan segera hadir!`);
    });
});

// Contact form functionality
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;
    
    if (name && email && message) {
        alert('Terima kasih! Pesan Anda telah terkirim. Tim kami akan segera menghubungi Anda.');
        this.reset();
    }
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .stat-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Initialize page
document.body.style.opacity = '0';

// Counter animation for stats
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        if (target === 5) {
            element.textContent = current.toFixed(1) + '★';
        } else if (target >= 1000) {
            element.textContent = Math.floor(current / 1000) + 'K+';
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 20);
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statItems = entry.target.querySelectorAll('.stat-item h4');
            animateCounter(statItems[0], 50000); // 50K+
            animateCounter(statItems[1], 100);   // 100+
            animateCounter(statItems[2], 5);     // 5★
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Newsletter form functionality
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        if (email) {
            // Simulate successful subscription
            const button = this.querySelector('button');
            const originalText = button.innerHTML;
            
            button.innerHTML = '✅';
            button.style.background = '#10b981';
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.style.background = '';
                this.reset();
                alert('Terima kasih! Anda telah berlangganan newsletter kami.');
            }, 2000);
        }
    });
}

// Social media links functionality
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.getAttribute('data-platform');
        
        // Simulate social media interaction
        const messages = {
            facebook: 'Mengalihkan ke halaman Facebook TechGadget Pro...',
            twitter: 'Mengalihkan ke Twitter @TechGadgetPro...',
            instagram: 'Mengalihkan ke Instagram @techgadgetpro...',
            youtube: 'Mengalihkan ke channel YouTube TechGadget Pro...',
            linkedin: 'Mengalihkan ke LinkedIn TechGadget Pro...'
        };
        
        alert(messages[platform] || 'Mengalihkan ke media sosial...');
    });
});

// Back to top functionality
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Footer links smooth scroll
document.querySelectorAll('.footer-links a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            // For links that don't have corresponding sections
            alert('Halaman ini akan segera tersedia!');
        }
    });
});

// Footer animation on scroll
const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const footerSections = entry.target.querySelectorAll('.footer-section');
            footerSections.forEach((section, index) => {
                setTimeout(() => {
                    section.style.opacity = '1';
                    section.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.1 });

const footer = document.querySelector('.footer');
if (footer) {
    // Set initial state for animation
    footer.querySelectorAll('.footer-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
    });
    
    footerObserver.observe(footer);
}