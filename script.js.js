// Add this script at the end of your HTML body

// Navigation functions
function aboutme() {
    hideAllSections();
    document.getElementById('Aboutme').style.display = 'block';
}

function resume() {
    hideAllSections();
    document.getElementById('Resumesection').style.display = 'block';
}

function Projectssection() {
    hideAllSections();
    document.getElementById('Projectssection').style.display = 'block';
}

function blogs() {
    hideAllSections();
    document.getElementById('Blogssection').style.display = 'block';
}

function hideAllSections() {
    // Keep 'iam' visible initially, hide it only when navigating to other sections
    const sections = ['Aboutme', 'Resumesection', 'Projectssection', 'Blogssection'];

    // First hide all sections
    sections.forEach(section => {
        if (document.getElementById(section)) {
            document.getElementById(section).style.display = 'none';
        }
    });

    // Hide the intro section if navigating away from it
    if (event && event.target.getAttribute('href') !== '#iam') {
        document.getElementById('iam').style.display = 'none';
    }

    // Show the section being navigated to
    if (event) {
        const targetSection = event.target.getAttribute('href').substring(1);
        document.getElementById(targetSection).style.display = 'block';
    }
}

// Dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        toggleBtn.classList.toggle('dark');
    });

    // Set initial visibility - only show intro section
    const sections = ['Aboutme', 'Resumesection', 'Projectssection', 'Blogssection'];
    sections.forEach(section => {
        if (document.getElementById(section)) {
            document.getElementById(section).style.display = 'none';
        }
    });

    // Fix navigation click events
    document.querySelectorAll('.navbar-nav a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Get the target section from href attribute
            const targetSection = this.getAttribute('href').substring(1);

            // Hide all sections first
            hideAllSections();

            // Show the target section
            document.getElementById(targetSection).style.display = 'block';

            // If it's not the intro section, hide the intro
            if (targetSection !== 'iam') {
                document.getElementById('iam').style.display = 'none';
            }
        });
    });
});