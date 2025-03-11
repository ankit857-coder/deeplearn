document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initializeAnimations();
    
    // Handle project card animations
    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px'
    });

    projectCards.forEach(card => {
        observer.observe(card);
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
    });

    // Handle hover effects for project cards
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Smooth scroll to article
    document.querySelector('.read-more').addEventListener('click', function(e) {
        e.preventDefault();
        const articleSection = document.querySelector('#biovox');
        articleSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    });
});

function initializeAnimations() {
    // Animate hero section on load
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.style.opacity = '0';
        heroSection.style.transform = 'translateY(20px)';
        setTimeout(() => {
            heroSection.style.opacity = '1';
            heroSection.style.transform = 'translateY(0)';
            heroSection.style.transition = 'all 0.8s ease-out';
        }, 300);
    }

    // Initialize GitHub stats counters
    const githubStats = document.querySelectorAll('.github-stats img');
    githubStats.forEach(stat => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(10px)';
        setTimeout(() => {
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
            stat.style.transition = 'all 0.5s ease-out';
        }, 800);
    });
}
