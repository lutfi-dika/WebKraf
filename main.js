// Loading Screen
window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 2000);
});

// Mobile Navigation
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

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

// Hero buttons functionality
document.getElementById('startProject').addEventListener('click', () => {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
});

document.getElementById('viewWorks').addEventListener('click', () => {
    document.querySelector('#works').scrollIntoView({
        behavior: 'smooth'
    });
});

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
        element.textContent = Math.floor(current);
    }, 20);
}

// Observe hero stats for counter animation
const heroStatsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
            heroStatsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    heroStatsObserver.observe(heroStats);
}

// Service cards hover effects
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Works filter functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        workItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// Work item details
document.querySelectorAll('.work-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const workItem = this.closest('.work-item');
        const title = workItem.querySelector('h3').textContent;
        alert(`Melihat detail project: ${title}\n\nFitur ini akan segera tersedia!`);
    });
});

// Contact form functionality
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const submitBtn = this.querySelector('.btn');
    const formData = new FormData(this);
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        const name = formData.get('name');
        const service = formData.get('service');
        
        alert(`Terima kasih ${name}! Pesan Anda untuk layanan ${service} telah terkirim. Tim kami akan segera menghubungi Anda.`);
        
        // Reset form and button
        this.reset();
        submitBtn.classList.remove('loading');
        submitBtn.disabled = false;
    }, 2000);
});

// Newsletter form functionality
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = this.querySelector('input[type="email"]').value;
    const submitBtn = this.querySelector('button');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Subscribing...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert(`Terima kasih! Email ${email} telah berhasil didaftarkan untuk newsletter kami.`);
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// Social media links functionality
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const platforms = ['Facebook', 'Instagram', 'Twitter', 'LinkedIn', 'YouTube'];
        const randomPlatform = platforms[Math.floor(Math.random() * platforms.length)];
        alert(`Mengalihkan ke halaman ${randomPlatform} DevStudio...`);
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
document.querySelectorAll('.service-card, .work-item, .team-member, .contact-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const floatingElements = document.querySelectorAll('.float-element');
    
    floatingElements.forEach((element, index) => {
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Service card click functionality
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        const service = this.getAttribute('data-service');
        const serviceName = this.querySelector('h3').textContent;
        const price = this.querySelector('.service-price').textContent;
        
        alert(`Anda tertarik dengan layanan ${serviceName}?\n\nHarga: ${price}\n\nSilakan hubungi kami untuk konsultasi lebih lanjut!`);
        
        // Scroll to contact form
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Team member interaction
document.querySelectorAll('.team-member').forEach(member => {
    member.addEventListener('click', function() {
        const name = this.querySelector('h3').textContent;
        const role = this.querySelector('.member-role').textContent;
        
        alert(`Ingin tahu lebih lanjut tentang ${name} (${role})?\n\nHubungi kami untuk informasi lebih detail tentang tim kami!`);
    });
});

// Add typing effect to hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect after loading
setTimeout(() => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
}, 2500);

// Add smooth reveal animation for sections
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

// Observe all main sections
document.querySelectorAll('section').forEach(section => {
    section.classList.add('reveal');
    sectionObserver.observe(section);
});

// Add CSS for section reveal animation
const revealStyle = document.createElement('style');
revealStyle.textContent = `
    .reveal {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.8s ease;
    }
    
    .reveal.revealed {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(revealStyle);

// Add cursor trail effect
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    trail.style.left = e.clientX + 'px';
    trail.style.top = e.clientY + 'px';
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 1000);
});

// Add CSS for cursor trail
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    .cursor-trail {
        position: fixed;
        width: 6px;
        height: 6px;
        background: linear-gradient(45deg, #667eea, #764ba2);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: trailFade 1s ease-out forwards;
    }
    
    @keyframes trailFade {
        0% {
            opacity: 1;
            transform: scale(1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);