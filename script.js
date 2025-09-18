// Limit Edge Website JavaScript with Email Functionality

let currentLang = 'en';

// Language switching functionality
function switchLanguage(lang) {
    currentLang = lang;
    document.body.setAttribute('data-lang', lang);
    
    // Update language button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update all translatable elements
    document.querySelectorAll('[data-en][data-fa]').forEach(element => {
        if (lang === 'fa') {
            element.textContent = element.getAttribute('data-fa');
        } else {
            element.textContent = element.getAttribute('data-en');
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-en-placeholder][data-fa-placeholder]').forEach(element => {
        if (lang === 'fa') {
            element.placeholder = element.getAttribute('data-fa-placeholder');
        } else {
            element.placeholder = element.getAttribute('data-en-placeholder');
        }
    });
    
    // Update select options
    document.querySelectorAll('select option[data-en][data-fa]').forEach(option => {
        if (lang === 'fa') {
            option.textContent = option.getAttribute('data-fa');
        } else {
            option.textContent = option.getAttribute('data-en');
        }
    });
    
    // Store language preference
    localStorage.setItem('preferred-language', lang);
}

// Form validation
function validateApplicationForm(formData) {
    const errors = [];
    
    // Check required fields
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push(currentLang === 'fa' ? 'نام باید حداقل ۲ کاراکتر باشد' : 'Name must be at least 2 characters');
    }
    
    if (!formData.age || formData.age < 18 || formData.age > 65) {
        errors.push(currentLang === 'fa' ? 'سن باید بین ۱۸ تا ۶۵ سال باشد' : 'Age must be between 18 and 65');
    }
    
    if (!formData.gender) {
        errors.push(currentLang === 'fa' ? 'لطفاً جنسیت را انتخاب کنید' : 'Please select your gender');
    }
    
    if (!formData.hometown || formData.hometown.trim().length < 2) {
        errors.push(currentLang === 'fa' ? 'شهر محل سکونت باید حداقل ۲ کاراکتر باشد' : 'Hometown must be at least 2 characters');
    }
    
    if (!formData.height || formData.height.trim().length < 2) {
        errors.push(currentLang === 'fa' ? 'قد باید وارد شود' : 'Height must be provided');
    }
    
    if (!formData.weight || formData.weight.trim().length < 2) {
        errors.push(currentLang === 'fa' ? 'وزن باید وارد شود' : 'Weight must be provided');
    }
    
    if (!formData.background || formData.background.trim().length < 50) {
        errors.push(currentLang === 'fa' ? 'پیشینه ورزشی باید حداقل ۵۰ کاراکتر باشد' : 'Athletic background must be at least 50 characters');
    }
    
    if (!formData.motivation || formData.motivation.trim().length < 50) {
        errors.push(currentLang === 'fa' ? 'انگیزه باید حداقل ۵۰ کاراکتر باشد' : 'Motivation must be at least 50 characters');
    }
    
    // Instagram validation
    if (!formData.instagram || !formData.instagram.startsWith('@')) {
        errors.push(currentLang === 'fa' ? 'شناسه اینستاگرام باید با @ شروع شود' : 'Instagram ID must start with @');
    }
    
    return errors;
}

// Enhanced form submission with email functionality
async function handleApplicationSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    const errors = validateApplicationForm(data);
    
    if (errors.length > 0) {
        const errorMessage = currentLang === 'fa' ? 'خطاهای زیر را برطرف کنید:' : 'Please fix the following errors:';
        alert(`${errorMessage}\n\n${errors.join('\n')}`);
        return;
    }
    
    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = currentLang === 'fa' ? 'در حال ارسال...' : 'Sending...';
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    
    try {
        // Send email using EmailJS service
        const emailData = {
            to_email: 'limitedgeshow@gmail.com',
            from_name: data.name,
            from_age: data.age,
            from_gender: data.gender,
            from_hometown: data.hometown,
            from_height: data.height,
            from_weight: data.weight,
            from_background: data.background,
            from_motivation: data.motivation,
            from_instagram: data.instagram,
            from_youtube: data.youtube || 'Not provided',
            subject: `New Limit Edge Application - ${data.name}`,
            message: `
New application received from Limit Edge website:

Name: ${data.name}
Age: ${data.age}
Gender: ${data.gender}
Hometown: ${data.hometown}
Height: ${data.height}
Weight: ${data.weight}

Athletic Background:
${data.background}

Motivation:
${data.motivation}

Social Media:
Instagram: ${data.instagram}
YouTube: ${data.youtube || 'Not provided'}

---
This email was sent from the Limit Edge website application form.
            `.trim()
        };
        
        // Send email using EmailJS
        await sendEmail(emailData);
        
        // Show success message
        const successMessage = currentLang === 'fa' 
            ? 'درخواست شما با موفقیت ارسال شد! ما به زودی با شما تماس خواهیم گرفت.'
            : 'Your application has been submitted successfully! We will contact you soon.';
        
        alert(successMessage);
        event.target.reset();
        
    } catch (error) {
        console.error('Email submission error:', error);
        
        // Show error message
        const errorMessage = currentLang === 'fa' 
            ? 'خطا در ارسال درخواست. لطفاً دوباره تلاش کنید یا با ما تماس بگیرید.'
            : 'Error submitting application. Please try again or contact us directly.';
        
        alert(errorMessage);
        
    } finally {
        // Restore button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
}

// Email sending function using EmailJS
async function sendEmail(emailData) {
    // Initialize EmailJS (you'll need to add EmailJS script to HTML)
    if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS not loaded');
    }
    
    // EmailJS configuration
    const serviceID = 'service_5dx5or8'; // Replace with your Service ID
    const templateID = 'template_7ruvkvz'; // Replace with your Template ID
    const userID = 'czysmMiEJ6mhsBgIR'; // Replace with your User ID
    
    // Send email using EmailJS template
    return emailjs.send(serviceID, templateID, {
        to_email: emailData.to_email,
        from_name: emailData.from_name,
        from_age: emailData.from_age,
        from_gender: emailData.from_gender,
        from_hometown: emailData.from_hometown,
        from_height: emailData.from_height,
        from_weight: emailData.from_weight,
        from_background: emailData.from_background,
        from_motivation: emailData.from_motivation,
        from_instagram: emailData.from_instagram,
        from_youtube: emailData.from_youtube,
        subject: emailData.subject,
        message: emailData.message
    }, userID);
}

// Contact form submission handler
async function handleContactSubmit(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Validate contact form
    const errors = validateContactForm(data);
    
    if (errors.length > 0) {
        const errorMessage = currentLang === 'fa' ? 'خطاهای زیر را برطرف کنید:' : 'Please fix the following errors:';
        alert(`${errorMessage}\n\n${errors.join('\n')}`);
        return;
    }
    
    // Show loading state
    const submitButton = event.target.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = currentLang === 'fa' ? 'در حال ارسال...' : 'Sending...';
    submitButton.disabled = true;
    submitButton.classList.add('loading');
    
    try {
        // Send contact email using EmailJS service
        const emailData = {
            to_email: 'limitedgeshow@gmail.com',
            from_name: data.name,
            from_email: data.email,
            subject: `Contact Form Message from ${data.name}`,
            message: data.message,
            time: new Date().toLocaleString()
        };
        
        // Send email using EmailJS
        await sendContactEmail(emailData);
        
        // Show success message
        const successMessage = currentLang === 'fa' 
            ? 'پیام شما با موفقیت ارسال شد! ما به زودی با شما تماس خواهیم گرفت.'
            : 'Your message has been sent successfully! We will contact you soon.';
        
        alert(successMessage);
        event.target.reset();
        
    } catch (error) {
        console.error('Contact form submission error:', error);
        
        // Show error message
        const errorMessage = currentLang === 'fa' 
            ? 'خطا در ارسال پیام. لطفاً دوباره تلاش کنید یا با ما تماس بگیرید.'
            : 'Error sending message. Please try again or contact us directly.';
        
        alert(errorMessage);
        
    } finally {
        // Restore button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        submitButton.classList.remove('loading');
    }
}

// Contact form validation
function validateContactForm(formData) {
    const errors = [];
    
    // Check required fields
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push(currentLang === 'fa' ? 'نام باید حداقل ۲ کاراکتر باشد' : 'Name must be at least 2 characters');
    }
    
    if (!formData.email || !isValidEmail(formData.email)) {
        errors.push(currentLang === 'fa' ? 'لطفاً یک ایمیل معتبر وارد کنید' : 'Please enter a valid email address');
    }
    
    if (!formData.message || formData.message.trim().length < 10) {
        errors.push(currentLang === 'fa' ? 'پیام باید حداقل ۱۰ کاراکتر باشد' : 'Message must be at least 10 characters');
    }
    
    return errors;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Contact email sending function using EmailJS
async function sendContactEmail(emailData) {
    // Initialize EmailJS (you'll need to add EmailJS script to HTML)
    if (typeof emailjs === 'undefined') {
        throw new Error('EmailJS not loaded');
    }
    
    // EmailJS configuration for contact form
    const serviceID = 'service_5dx5or8'; // Same service as application form
    const templateID = 'template_contact'; // Separate contact template
    const userID = 'czysmMiEJ6mhsBgIR'; // Same user ID
    
    // Send email using EmailJS template
    return emailjs.send(serviceID, templateID, {
        to_email: emailData.to_email,
        from_name: emailData.from_name,
        from_email: emailData.from_email,
        subject: emailData.subject,
        message: emailData.message,
        time: emailData.time
    }, userID);
}

// Alternative email method using Formspree (fallback)
async function sendEmailFormspree(formData) {
    const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: 'limitedgeshow@gmail.com',
            subject: `New Limit Edge Application - ${formData.name}`,
            message: `
New application received from Limit Edge website:

Name: ${formData.name}
Age: ${formData.age}
Gender: ${formData.gender}
Hometown: ${formData.hometown}
Height: ${formData.height}
Weight: ${formData.weight}

Athletic Background:
${formData.background}

Motivation:
${formData.motivation}

Social Media:
Instagram: ${formData.instagram}
YouTube: ${formData.youtube || 'Not provided'}

---
This email was sent from the Limit Edge website application form.
            `.trim()
        })
    });
    
    if (!response.ok) {
        throw new Error('Failed to send email');
    }
    
    return response.json();
}

// Mobile Navigation Toggle
function initializeMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth scrolling for navigation links
function initializeSmoothScrolling() {
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
}

// Gallery Filtering
function initializeGalleryFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Professional tier visual interactions
function initializeTierInteractions() {
    const tierCards = document.querySelectorAll('.tier-card');
    
    tierCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px)';
            card.style.boxShadow = '0 20px 40px rgba(188, 58, 17, 0.15)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 30px rgba(188, 58, 17, 0.1)';
        });
    });
}

// Add fade-in animation for gallery items
function addGalleryAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Limit Edge Website JavaScript Loaded!');
    
    // Initialize language switcher
    const savedLang = localStorage.getItem('preferred-language') || 'en';
    switchLanguage(savedLang);
    
    // Add language switcher event listeners
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Initialize all features
    initializeMobileNavigation();
    initializeSmoothScrolling();
    initializeGalleryFiltering();
    initializeTierInteractions();
    addGalleryAnimations();
    
    // Initialize form submission
    const applicationForm = document.querySelector('.application-form');
    if (applicationForm) {
        applicationForm.addEventListener('submit', handleApplicationSubmit);
    }
    
    // Initialize contact form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Teaser video functionality
    const teaserButton = document.querySelector('.btn-secondary');
    if (teaserButton) {
        teaserButton.addEventListener('click', () => {
            const message = currentLang === 'fa' 
                ? 'ویدیوی تیزر به زودی در دسترس خواهد بود!'
                : 'Teaser will be available soon!';
            alert(message);
        });
    }
    
    // Requirements Popup Functionality
    initializeRequirementsPopup();
    
    console.log('✨ All features initialized successfully!');
    console.log('🎯 Bilingual support: English & Persian');
    console.log('💎 Professional tier visual elements with hover effects');
    console.log('📧 Email functionality: Applications sent to limitedgeshow@gmail.com');
    console.log('📋 Requirements popup with participant criteria');
});

// Requirements Popup Functions
function initializeRequirementsPopup() {
    const requirementsBtn = document.querySelector('.requirements-btn');
    const requirementsModal = document.getElementById('requirementsModal');
    const requirementsClose = document.querySelector('.requirements-close');
    const requirementsCloseBtn = document.querySelector('.requirements-close-btn');
    const proceedToFormBtn = document.querySelector('.proceed-to-form-btn');
    const applicationForm = document.querySelector('.application-form');
    
    if (!requirementsBtn || !requirementsModal) {
        console.log('Requirements popup elements not found');
        return;
    }
    
    // Show popup when requirements button is clicked
    requirementsBtn.addEventListener('click', () => {
        showRequirementsModal();
    });
    
    // Close popup when X is clicked
    if (requirementsClose) {
        requirementsClose.addEventListener('click', () => {
            hideRequirementsModal();
        });
    }
    
    // Close popup when close button is clicked
    if (requirementsCloseBtn) {
        requirementsCloseBtn.addEventListener('click', () => {
            hideRequirementsModal();
        });
    }
    
    // Proceed to form when proceed button is clicked
    if (proceedToFormBtn) {
        proceedToFormBtn.addEventListener('click', () => {
            hideRequirementsModal();
            scrollToApplicationForm();
        });
    }
    
    // Close popup when clicking outside the modal
    requirementsModal.addEventListener('click', (e) => {
        if (e.target === requirementsModal) {
            hideRequirementsModal();
        }
    });
    
    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && requirementsModal.classList.contains('show')) {
            hideRequirementsModal();
        }
    });
}

function showRequirementsModal() {
    const requirementsModal = document.getElementById('requirementsModal');
    if (requirementsModal) {
        requirementsModal.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
}

function hideRequirementsModal() {
    const requirementsModal = document.getElementById('requirementsModal');
    if (requirementsModal) {
        requirementsModal.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

function scrollToApplicationForm() {
    const applicationForm = document.querySelector('.application-form');
    if (applicationForm) {
        applicationForm.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add a subtle highlight effect
        applicationForm.style.transition = 'box-shadow 0.3s ease';
        applicationForm.style.boxShadow = '0 0 20px rgba(255, 107, 53, 0.3)';
        
        setTimeout(() => {
            applicationForm.style.boxShadow = '';
        }, 2000);
    }
}

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
