// RealValue Website JavaScript
// Navigation and page switching functionality

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(page => page.classList.remove('active'));
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Handle browser back button
window.addEventListener('popstate', function(event) {
    if (event.state && event.state.page) {
        showPage(event.state.page);
    }
});

// Initialize - push initial state
document.addEventListener('DOMContentLoaded', function() {
    history.replaceState({page: 'home'}, '', '');
});

// Smooth scrolling for better UX (optional enhancement)
function smoothScroll(target) {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Button click tracking for analytics (if needed later)
function trackButtonClick(buttonName) {
    // Placeholder for analytics tracking
    console.log('Button clicked:', buttonName);
}

// Add click tracking to all CTA buttons
document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners to track button clicks
    const buttons = document.querySelectorAll('.main-cta, .secondary-btn, .page-cta');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const buttonText = this.textContent.trim();
            trackButtonClick(buttonText);
        });
    });
});