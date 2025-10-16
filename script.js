// --- Project Data ---
     const projectsData = [{
             title: "Gmail AI Agent (MCP + LLMs)",
             description: "An intelligent Gmail assistant in Cursor IDE using MCP and Pipedream to automate sending, retrieving, and organizing emails through natural language...",
             tags: ["LLM", "MCP", "Pipedream", "Gmail API"],
             github: "https://github.com/lpkumarreddy/mcp-llm-gmail-agent"
         },
         {
             title: "LinkedIn AI Post Creator",
             description: "Automates creating image-rich LinkedIn posts from the Cursor IDE. Uses MCP, Pipedream, and Cloudinary to publish content via natural language commands.",
             tags: ["LLM", "MCP", "LinkedIn API", "Automation"],
             github: "https://github.com/lpkumarreddy/postsmith-mcp-llm-linkedin-agent"
         },
         {
             title: "Railway Schedule AI",
             description: "A natural language interface in Cursor IDE to query real-time Indian Railway data. Fetches train schedules, availability, and live status using an MCP server.",
             tags: ["LLM", "MCP", "Real-time Data", "API"],
             github: "https://github.com/lpkumarreddy/railway-mcp-scheduler"
         },
         {
             title: "CDP Launchpad (E-Learning)",
             description: "Launched the Career Development Platform—a responsive web app supporting 1,000+ students. Curated free resources for DSA, Web Dev, and more.",
             tags: ["HTML", "CSS", "JS", "Bootstrap"],
             github: "https://github.com/lpkumarreddy/CDP-Launchpad",
             live: "https://cdp.ccbp.tech/"
         },
         {
             title: "Wikipedia Search App",
             description: "A dynamic web app that fetches and displays search results from the Wikipedia API in real-time with a clean, responsive UI.",
             tags: ["JS", "REST API", "Bootstrap"],
             github: "https://github.com/lpkumarreddy/Wikipedia-Search-Application",
             live: "https://pavanwikiapp.ccbp.tech/"
         },
         {
             title: "Food Munch",
             description: "A fully responsive restaurant website offering a comprehensive list of food items and details, designed with a mobile-first approach.",
             tags: ["HTML", "CSS", "Bootstrap"],
             github: "https://github.com/lpkumarreddy/food-munch",
             live: "https://pavanfoodorder.ccbp.tech/"
         }
     ];

     function renderProjects() {
         const container = document.querySelector('#projects .row');
         let projectsHTML = '';
         projectsData.forEach(p => {
             projectsHTML += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="glass-card project-card">
                        <div class="card-body">
                            <h5 class="card-title">${p.title}</h5>
                            <p>${p.description}</p>
                            <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join('')}</div>
                            <div class="project-links ml-auto">
                                <a href="${p.github}" target="_blank" title="GitHub"><i class="fab fa-github"></i></a>
                                ${p.live ? `<a href="${p.live}" target="_blank" title="Live Site"><i class="fas fa-external-link-alt"></i></a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>`;
         });
         container.innerHTML = projectsHTML;
     }

     // --- Certifications Data ---
     const certificationsData = [{
             title: "",
             issuer: "",
             imageUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/SKFNUOSRPF.png"
         },
         {
             title: "",
             issuer: "",
             imageUrl: "https://i.ibb.co/v6wpHWTt/20250201-161259.jpg"
         },
         {
             title: "",
             issuer: "",
             imageUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/QYQUWAOGKU.png"
         },
         {
             title: "",
             issuer: "",
             imageUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/CLOZETFVFP.png"
         },
         {
             title: "",
             issuer: "",
             imageUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/TKRFGGLNXR.png"
         },
         {
             title: "",
             issuer: "",
             imageUrl: "https://s3-ap-south-1.amazonaws.com/nkb-backend-ccbp-media-static/certificates/share/MWWTFUJDNU.png"
         },


     ];

     function renderCertifications() {
         const container = document.querySelector('#certifications .row');
         let certsHTML = '';
         certificationsData.forEach(cert => {
             certsHTML += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <a href="#" class="certification-link" data-toggle="modal" data-target="#certificateModal" data-image-url="${cert.imageUrl}">
                        <div class="glass-card certification-card">
                            <img src="${cert.imageUrl}" alt="${cert.title}" class="cert-image" onerror="this.onerror=null;this.src='https://placehold.co/600x400/112240/64ffda?text=Certificate';">
                            <div class="cert-content">
                                <h5 class="cert-title">${cert.title}</h5>
                                <p class="cert-issuer">${cert.issuer}</p>
                            </div>
                        </div>
                    </a>
                </div>`;
         });
         container.innerHTML = certsHTML;
     }


     // --- Data for Content Creation Section ---
     const filmedbyPavanReddy = {
         title: "@filmedby.pavanreddy",
         logoUrl: "https://res.cloudinary.com/dzzgtv3t9/image/upload/v1758437748/LPKR-Social-Media-Profile-img_idk0u3.jpg",
         tagline: "Where Ideas Flow, Not Where Rules Live.",
         philosophy: "Creative corner—edits, vlogs, and tech bits I drop along the way. Come vibe, collab, and create.",
         stats: [{
             icon: "fas fa-users",
             target: 43,
             label: "Subscribers"
         }, {
             icon: "fas fa-video",
             target: 44,
             label: "Videos"
         }, {
             icon: "fas fa-eye",
             target: 117762,
             label: "Total Views"
         }, {
             icon: "fas fa-calendar-alt",
             value: "JAN 2020",
             label: "Active Since"
         }],
         carouselImages: [
             "https://res.cloudinary.com/dzzgtv3t9/image/upload/v1758447805/Screenshot_2025-09-21_151305_dc53gf.png",
             "https://res.cloudinary.com/dzzgtv3t9/image/upload/v1758448042/Screenshot_2025-09-21_151705_zra3wb.png",
             "https://res.cloudinary.com/dzzgtv3t9/image/upload/v1758448119/Screenshot_2025-09-21_151824_nifodf.png",
             "https://res.cloudinary.com/dzzgtv3t9/image/upload/v1758448711/Screenshot_2025-09-21_152428_eeusox.png",
             "https://res.cloudinary.com/dzzgtv3t9/image/upload/v1758448711/Screenshot_2025-09-21_152750_d99ffy.png"
         ],
         software: [{
             name: "CapCut",
             iconUrl: "https://i.ibb.co/23FqWxTr/Cap-Cut-Logo-Video-Editing-App-Icon.webp",
             title: "Mobile Powerhouse",
             description: "Mastering the art of on-the-go editing. Perfect for quick cuts, trending effects, and optimizing content for social media platforms like Instagram Reels and TikTok.",
             highlights: [{
                     icon: "fas fa-mobile-alt",
                     text: "Quick & Efficient Mobile Editing"
                 },
                 {
                     icon: "fas fa-wand-magic-sparkles",
                     text: "Trending Transitions & Effects"
                 },
                 {
                     icon: "fas fa-share-square",
                     text: "Social Media Optimization"
                 }
             ],
             interactiveElement: `<div class="interactive-element capcut-ui-sim"><div class="timeline-bar"></div><span class="capcut-text-anim"></span></div>`
         }, {
             name: "DaVinci Resolve",
             iconUrl: "https://i.ibb.co/d4WPkGjS/png-transparent-davinci-resolve-macos-bigsur-icon-thumbnail.png",
             title: "Cinematic Precision",
             description: "Delivering professional, high-quality results with Hollywood's standard for color grading, advanced effects, and comprehensive audio post-production.",
             highlights: [{
                     icon: "fas fa-palette",
                     text: "Professional Color Grading"
                 },
                 {
                     icon: "fas fa-film",
                     text: "Advanced Visual Effects"
                 },
                 {
                     icon: "fas fa-volume-up",
                     text: "Audio Post-Production"
                 }
             ],
             interactiveElement: `<div class="interactive-element davinci-color-wheel"><img src="https://i.ibb.co/v6K0Rjfs/RYB-Colour-Wheel-Serena-Archetti-Blog.webp" alt="Color Wheel" onerror="this.style.display='none'"><span class="davinci-text-anim"></span></div>`
         }],
         workflow: "I leverage a versatile workflow, combining the speed of <strong>CapCut</strong> for social media content with the power of <strong>DaVinci Resolve</strong> for polished, professional projects. This hybrid approach ensures both rapid delivery and cinematic quality, tailored to the specific needs of each platform.",
         portfolioVideoUrl: "https://www.youtube.com/embed/rokGy0huYEA",
         cta: {
             title: "Let's Create Together",
             description: "Have an idea for a project, vlog, or collaboration? Let's connect and bring your vision to life.",
             email: "lpavankumarreddy54@gmail.com"
         },
         socials: [{
                 name: "YouTube",
                 url: "https://www.youtube.com/@filmedby.pavanreddy",
                 icon: "fab fa-youtube",
                 themeClass: "youtube"
             },
             {
                 name: "Instagram",
                 url: "https://instagram.com/filmedby.pavan",
                 icon: "fab fa-instagram",
                 themeClass: "instagram"
             },
             {
                 name: "LinkedIn",
                 url: "https://linkedin.com/in/pavan-kumar-reddy-lingam",
                 icon: "fab fa-linkedin",
                 themeClass: "linkedin"
             },
             {
                 name: "WhatsApp",
                 url: "https://wa.me/918074292854",
                 icon: "fab fa-whatsapp",
                 themeClass: "whatsapp"
             }
         ]
     };

     // --- Function to Render the Video Editing Section ---
     function renderVideoSection() {
         const container = document.getElementById('video-editing');
         const data = filmedbyPavanReddy;

         // Create image slides for the carousel
         const carouselSlides = [...data.carouselImages, ...data.carouselImages] // Duplicate for seamless loop
             .map(imgUrl => `<div class="carousel-slide"><img src="${imgUrl}" alt="Social media post example"></div>`)
             .join('');

         const sectionHTML = `
                <div class="container">
                    <h2 class="section-title">${data.title} <i class="fab fa-youtube"></i> <i class="fab fa-instagram"></i></h2>
                    <div class="framix-wrapper">
                        <!-- Hero -->
                        <div class="row align-items-center text-center ve-hero animate-on-scroll">
                            <div class="col-12">
                                <img src="${data.logoUrl}" alt="${data.title} Logo" class="framix-logo mb-3" onerror="this.style.display='none'">
                                <h1 class="framix-title">${data.tagline}</h1>
                                <p class="lead">${data.philosophy}</p>
                            </div>
                        </div>
                        <!-- Stats -->
                        <div class="row text-center ve-stats animate-on-scroll">
                            ${data.stats.map(stat => `
                                <div class="col-6 col-md-3 ${stat.target ? '' : 'mt-4 mt-md-0'}">
                                    <div class="stat-item">
                                        <i class="${stat.icon}"></i>
                                        ${stat.target
                                            ? `<h3 class="stat-number" data-target="${stat.target}">0</h3>`
                                            : `<h3 class="stat-since">${stat.value}</h3>`
                                        }
                                        <p>${stat.label}</p>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        
                        <!-- Social Scroller -->
                        <div class="row animate-on-scroll">
                            <div class="col-12">
                                <div class="carousel-scroller-container">
                                    <div class="carousel-scroller-track">
                                        ${carouselSlides}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Software -->
                        <div class="row ve-software-showcase">
                            ${data.software.map(s => `
                                <div class="col-lg-6 mb-4 mb-lg-0 animate-on-scroll">
                                    <div class="glass-card software-card ${s.themeClass}">
                                        <div class="software-header">
                                            <img src="${s.iconUrl}" alt="${s.name} Icon" class="software-icon" onerror="this.style.display='none'">
                                            <h4>${s.name}: ${s.title}</h4>
                                        </div>
                                        <p>${s.description}</p>
                                        <ul>
                                            ${s.highlights.map(h => `<li><i class="${h.icon}"></i>${h.text}</li>`).join('')}
                                        </ul>
                                        ${s.interactiveElement}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                        <!-- Workflow -->
                        <div class="row ve-workflow animate-on-scroll">
                            <div class="col-12">
                                <div class="glass-card text-center">
                                    <h4>Hybrid Editing Workflow</h4>
                                    <p>${data.workflow}</p>
                                </div>
                            </div>
                        </div>
                        <!-- Portfolio -->
                        <div class="row ve-portfolio">
                            <div class="col-12 text-center animate-on-scroll">
                                <h4>Portfolio Highlights</h4>
                            </div>
                            <div class="col-lg-8 offset-lg-2 animate-on-scroll mb-4">
                                <div class="video-container glass-card p-0">
                                    <iframe loading="lazy" src="${data.portfolioVideoUrl}" title="Main Showcase Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </div>
                            </div>
                        </div>
                        <!-- CTA -->
                        <div class="row ve-cta animate-on-scroll">
                            <div class="col-12 text-center">
                                <div class="glass-card">
                                    <h3>${data.cta.title}</h3>
                                    <p>${data.cta.description}</p>
                                    <div class="social-links-cta">
                                        ${data.socials.map(s => `<a href="${s.url}" target="_blank" class="social-icon ${s.themeClass}" title="${s.name}"><i class="${s.icon}"></i></a>`).join('')}
                                    </div>
                                    <a href="mailto:${data.cta.email}" class="hire-me-btn mt-4">Contact Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;

         container.innerHTML = sectionHTML;
     }

     // --- Animate numbers on scroll ---
     function activateAnimations(container) {
         const counters = container.querySelectorAll('.stat-number');
         const speed = 200;

         const animateCounter = (counter) => {
             const target = +counter.getAttribute('data-target');
             const updateCount = () => {
                 const count = +counter.innerText;
                 const increment = target / speed;
                 if (count < target) {
                     counter.innerText = Math.ceil(count + increment);
                     setTimeout(updateCount, 1);
                 } else {
                     counter.innerText = target.toLocaleString();
                 }
             };
             updateCount();
             counter.closest('.stat-item').classList.add('is-visible');
         };

         const animatedElements = container.querySelectorAll('.animate-on-scroll');
         const observer = new IntersectionObserver((entries) => {
             entries.forEach(entry => {
                 if (entry.isIntersecting) {
                     entry.target.classList.add('is-visible');
                     const statItems = entry.target.querySelectorAll('.stat-item');
                     statItems.forEach(item => {
                         const counter = item.querySelector('.stat-number');
                         if (counter && !item.classList.contains('is-visible')) {
                             animateCounter(counter);
                         }
                     });
                     observer.unobserve(entry.target);
                 }
             });
         }, {
             threshold: 0.1
         });

         animatedElements.forEach(el => observer.observe(el));
     }

     // --- SPA Navigation Logic ---
     function showSection(sectionId) {
         document.querySelectorAll('.page-section').forEach(section => {
             section.classList.remove('active');
         });
         const activeSection = document.getElementById(sectionId);
         if (activeSection) {
             activeSection.classList.add('active');
         }

         document.querySelectorAll('.nav-link, .navbar-brand, .footer-link, .cta-button[data-section]').forEach(link => {
             link.classList.remove('active');
             if (link.dataset.section === sectionId) {
                 link.classList.add('active');
             }
         });
         window.scrollTo(0, 0);
     }

     // --- Main Document Ready Function ---
     document.addEventListener('DOMContentLoaded', function() {
         renderProjects();
         renderCertifications();
         renderVideoSection();
         activateAnimations(document.getElementById('video-editing'));

         // --- Typed.js Initialization ---
         const typed = new Typed('#typed-text', {
             strings: ['Software Engineer.', 'AI Developer.', 'Full-Stack Developer.', 'Creative Problem-Solver.'],
             typeSpeed: 50,
             backSpeed: 25,
             backDelay: 1500,
             startDelay: 500,
             loop: true,
         });

         // --- SPA Navigation Event Listeners ---
         document.querySelectorAll('[data-section]').forEach(link => {
             link.addEventListener('click', (e) => {
                 e.preventDefault();
                 showSection(link.dataset.section);
                 // Close the navbar on mobile after click
                 if (window.innerWidth < 992) {
                     $('.navbar-collapse').collapse('hide');
                 }
             });
         });

         // --- Certificate Modal Handler ---
         $('#certificateModal').on('show.bs.modal', function(event) {
             var triggerElement = $(event.relatedTarget); // Element that triggered the modal
             var imageUrl = triggerElement.data('image-url'); // Extract info from data-* attributes
             var modal = $(this);
             modal.find('.modal-body img').attr('src', imageUrl);
         });

         // --- Theme Toggle ---
         const themeToggleButton = document.getElementById('theme-toggle-button');
         themeToggleButton.addEventListener('click', () => {
             document.body.classList.toggle('dark-mode');
             document.body.classList.toggle('light-mode');
         });

         // --- Falling Stars Canvas (Dark Mode) ---
         const canvas = document.getElementById('stars-canvas');
         const ctx = canvas.getContext('2d');
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;

         let stars = [];
         for (let i = 0; i < 150; i++) {
             stars.push({
                 x: Math.random() * canvas.width,
                 y: Math.random() * canvas.height,
                 radius: Math.random() * 1.2,
                 speed: Math.random() * 0.5 + 0.1
             });
         }

         function drawStars() {
             ctx.clearRect(0, 0, canvas.width, canvas.height);
             ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
             stars.forEach(star => {
                 ctx.beginPath();
                 ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                 ctx.fill();
             });
         }

         function updateStars() {
             stars.forEach(star => {
                 star.y += star.speed;
                 if (star.y > canvas.height) {
                     star.y = 0 - star.radius;
                     star.x = Math.random() * canvas.width;
                 }
             });
         }

         function animateStars() {
             if (document.body.classList.contains('dark-mode')) {
                 drawStars();
                 updateStars();
             }
             requestAnimationFrame(animateStars);
         }
         animateStars();

         window.addEventListener('resize', () => {
             canvas.width = window.innerWidth;
             canvas.height = window.innerHeight;
         });
     });
