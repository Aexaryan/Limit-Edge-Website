# Limit Edge - The Ultimate Fitness Challenge Show Website

A modern, responsive, **bilingual (English/Persian)** website for "Limit Edge," your groundbreaking fitness competition reality show. This website showcases the show's concept, athletes, challenges, and provides application forms for potential contestants and sponsors.

## 🌍 **Bilingual Support**
- **English**: Primary language with modern, professional content
- **Persian (فارسی)**: Full translation with RTL (Right-to-Left) support
- **Language Switcher**: Easy toggle between languages in the navigation
- **Persian Fonts**: Noto Sans Arabic font family for clear, readable Persian text
- **Localized Content**: All text, forms, and messages in both languages
- **Typography Optimization**: Enhanced Persian text rendering and spacing

## 🚀 Features

### Core Sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Unique Selling Points**: Highlights what makes the show special
- **Featured Sponsors**: Partner showcase with logo carousel
- **Countdown Timer**: Dynamic countdown to pilot launch with Persian numbers
- **About the Show**: Mission statement and unique features
- **Athletes**: Contestant profiles in an attractive grid layout
- **Challenges**: Three main challenge categories with icons
- **Sponsorship**: Partnership opportunities with **3D animated coins** showing values
- **Application Form**: Comprehensive form for potential contestants
- **News & Updates**: Blog-style content section
- **Media Gallery**: Filterable photo/video gallery
- **Contact**: Contact form and sponsorship inquiries

### Technical Features
- **Responsive Design**: Works perfectly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, mobile navigation
- **Form Validation**: Client-side validation for all forms
- **Gallery Filtering**: Dynamic filtering system for media content
- **Countdown Timer**: Real-time countdown to show launch with Persian numbers
- **Mobile-First**: Optimized for mobile devices
- **Bilingual System**: Complete language switching with RTL support
- **3D Coin Animations**: Interactive sponsorship tier coins with values

## 🎨 Design Features

- **Modern Color Scheme**: Contemporary indigo (#6366f1) and amber (#f59e0b) with sophisticated gradients
- **Premium Typography**: Inter font family with advanced font features and optimal spacing
- **Icons**: Font Awesome icons with gradient effects and smooth animations
- **Advanced Animations**: Micro-interactions, parallax effects, and staggered reveal animations
- **Glass Morphism**: Backdrop blur effects and translucent elements for modern aesthetics
- **Cards**: Elevated card design with hover effects and smooth transitions
- **Gradients**: Multiple gradient options for different sections and elements
- **RTL Support**: Full Right-to-Left layout for Persian language
- **Enhanced Persian Text**: Optimized font weights, spacing, and rendering
- **3D Coin Elements**: Animated sponsorship tier coins with floating effects
- **Webflow-Inspired**: Modern design principles with craftful attention to detail

## 🪙 **3D Coin Animations for Sponsorship Tiers**

### Gold Tier - $50K
- **3D Gold Coin**: Animated floating coin with gradient gold finish
- **Interactive**: Hover effects pause animation and flip coin
- **Value Display**: Clear $50K pricing prominently shown

### Silver Tier - $25K
- **3D Silver Coin**: Metallic silver coin with realistic shading
- **Smooth Animation**: Continuous floating motion with rotation
- **Professional Look**: Matches the premium feel of the show

### Bronze Tier - $10K
- **3D Bronze Coin**: Rich bronze coloring with depth
- **Responsive Design**: Coins adapt to mobile devices
- **Visual Hierarchy**: Clear pricing structure for sponsors

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🛠️ Customization Guide

### 1. Language & Content Updates

#### Bilingual Content
- **English Content**: All content is in English by default
- **Persian Translations**: Complete Persian translations for all sections
- **Language Switching**: Users can toggle between languages using the language switcher
- **RTL Layout**: Persian text automatically switches to Right-to-Left layout

#### Adding New Languages
To add additional languages:
1. Add new `data-[lang]` attributes to HTML elements
2. Update the `switchLanguage()` function in `script.js`
3. Add new language buttons to the language switcher

### 2. Content Updates

#### Hero Section
- Update the main title and subtitle in `index.html`
- Modify the teaser video placeholder
- Change CTA button text and links

#### Athletes/Contestants
- Replace placeholder text with actual contestant information
- Add real photos (replace `image-placeholder` divs)
- Update bios, ages, and hometowns

#### Application Form
- **Social Media Integration**: Instagram account ID (required) and YouTube channel (optional)
- **Form Validation**: Instagram must start with @ symbol
- **Bilingual Support**: All form fields available in English and Persian

#### Challenges
- Modify challenge descriptions
- Change icons (Font Awesome classes)
- Add more challenge categories if needed

#### Sponsors
- Replace placeholder sponsor logos with actual partner logos
- Update sponsorship tier benefits
- Add real contact information
- **Customize Coin Values**: Modify the coin amounts in HTML and CSS

### 3. Visual Customization

#### Colors
The main brand colors are defined in `styles.css`:
```css
--primary-color: #ff6b35;
--secondary-color: #f7931e;
--accent-color: #667eea;
```

#### Images
Replace all `image-placeholder` divs with actual images:
```html
<!-- Replace this: -->
<div class="image-placeholder">ATHLETE 1</div>

<!-- With this: -->
<img src="path/to/athlete1.jpg" alt="Athlete Name" class="athlete-image">
```

#### Fonts
The website uses Inter font family. To change:
1. Update the Google Fonts link in `index.html`
2. Modify the `font-family` property in `styles.css`

#### 3D Coins
Customize the sponsorship tier coins:
- **Values**: Change amounts in the HTML (`$50K`, `$25K`, `$10K`)
- **Colors**: Modify coin gradients in CSS
- **Animations**: Adjust floating speed and effects
- **Sizes**: Change coin dimensions for different screen sizes

### 4. Functionality Updates

#### Countdown Timer
Update the launch date in `script.js`:
```javascript
const launchDate = new Date('2025-03-15T00:00:00').getTime();
```

#### Form Handling
Currently forms show success messages. To integrate with a backend:
1. Update form action URLs
2. Modify form submission handlers in `script.js`
3. Add server-side validation

#### Video Integration
Replace the teaser video placeholder with actual video:
```html
<video controls class="teaser-video">
    <source src="path/to/teaser.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

## 📁 File Structure

```
limit-edge-website/
├── index.html          # Main HTML file with bilingual content and 3D coins
├── styles.css          # CSS styles with RTL support and coin animations
├── script.js           # JavaScript with language switching and coin effects
└── README.md           # This documentation file
```

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in a web browser
2. **Local development**: Use a local server for testing (recommended)
3. **Deploy**: Upload all files to your web hosting service

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Contact & Support

For questions about the website or customization help:
- **Email**: [Your contact email]
- **Show Website**: [Your show's main website]
- **Social Media**: [Your social media handles]

## 🔄 Updates & Maintenance

### Regular Updates
- **Content**: Update athlete information, news, and media
- **Dates**: Keep countdown timer current
- **Sponsors**: Add new partners and update logos
- **Media**: Upload new photos and videos
- **Coin Values**: Update sponsorship tier pricing as needed

### Technical Maintenance
- **Performance**: Optimize images and assets
- **Security**: Keep dependencies updated
- **Testing**: Test on different devices and browsers
- **Animations**: Ensure coin animations work smoothly across devices

## 🎯 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta tags for social sharing
- Alt text placeholders for images
- Clean URL structure with anchor links
- Fast loading times
- Bilingual content for international reach

## 📊 Analytics Integration

To add analytics (Google Analytics, etc.):
1. Add tracking code to `<head>` section in `index.html`
2. Track form submissions and page views
3. Monitor user engagement with different sections
4. Track language preferences and usage

## 🎨 Future Enhancements

Potential additions:
- **Live Stream Integration**: Real-time show updates
- **Fan Voting System**: Audience participation features
- **Merchandise Store**: Show-branded products
- **Mobile App**: Companion app for the show
- **Social Media Feed**: Real-time social updates
- **Behind-the-Scenes Blog**: Production insights
- **Interactive Coin Gallery**: Expandable coin details and benefits
- **Sponsorship Calculator**: Dynamic pricing based on package selection

## 🪙 **Coin Animation Features**

### Technical Implementation
- **CSS 3D Transforms**: Uses `transform-style: preserve-3d` for realistic depth
- **Perspective**: 1000px perspective for authentic 3D appearance
- **Keyframe Animations**: Smooth floating motion with rotation
- **Hover Effects**: Interactive pause and flip on mouse hover
- **Responsive Design**: Coins scale appropriately on mobile devices

### Customization Options
- **Animation Speed**: Modify `animation: coinFloat 3s ease-in-out infinite`
- **Coin Sizes**: Adjust width/height in `.coin` class
- **Colors**: Customize gradients for each tier
- **Effects**: Add shadows, borders, and additional animations

---

**Built with ❤️ for Limit Edge - The Ultimate Fitness Challenge Show**

*This website is designed to capture the energy, intensity, and excitement of your fitness competition while providing a professional platform for athletes, sponsors, and fans. The 3D coin animations add a premium, engaging element that showcases sponsorship value in an innovative way.*
