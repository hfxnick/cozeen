# Cozeen Clean - Landing Page

Welcome to the Cozeen Clean website repository! This is a GitHub Pages site for a professional cleaning service business launching in Nova Scotia.

## About Cozeen Clean

**Where Cozy Meets Clean**

Cozeen Clean is a professional cleaning service owned and operated by Chantal McDonald. We specialize in residential and commercial cleaning services with a focus on recurring customers throughout the Highway 102 corridor and Halifax region.

### Brand Identity
- **Name Origin**: "Cozeen" = Cozy + Clean
- **Brand Colors**:
  - Coral: `#f2724e`
  - Teal: `#027361`
  - Cream: `#faf2e3`
- **Focus**: Recurring cleaning services for homes and businesses

### Service Areas
We proudly serve:
- Halifax Municipality (Dartmouth side)
- Fall River
- Lantz
- Elmsdale
- Shubenacadie
- Milford
- And surrounding areas along Highway 102

## Website Structure

This is a single-page website with the following sections:

1. **Hero Section** - Eye-catching introduction with call-to-action
2. **Services** - Residential, Commercial, and Recurring Plans
3. **About** - Information about owner Chantal McDonald
4. **Service Areas** - Geographic coverage
5. **Why Choose Us** - Key benefits and differentiators
6. **Contact** - Contact form and information

## Files

- `index.html` - Main HTML structure
- `styles.css` - Complete styling with brand colors
- `script.js` - Interactive features and form handling
- `README.md` - This file

## Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth scrolling navigation
- ✅ Interactive contact form
- ✅ Brand-consistent color scheme
- ✅ Modern, clean design aesthetic
- ✅ SEO-friendly structure
- ✅ Accessibility considerations

## Setup for GitHub Pages

1. Ensure this repository is pushed to GitHub
2. Go to repository Settings
3. Navigate to Pages section
4. Under "Source", select the branch (usually `main` or `master`)
5. Save and wait a few minutes for deployment
6. Your site will be available at: `https://[username].github.io/[repository-name]`

## Customization

### Contact Information
Update the following in `index.html`:
- Email address (currently: `info@cozeenclean.ca`)
- Phone number (currently: `(902) 555-1234`)

### Form Backend
The contact form currently shows an alert on submission. To connect it to a real backend:
- Use services like Formspree, Netlify Forms, or similar
- Add a serverless function to handle submissions
- Integrate with an email service

### Adding Photos
Replace placeholder sections with real images:
- Add an `images` folder
- Replace the `.image-placeholder` div in the About section with actual photos
- Consider adding service photos throughout

## Local Development

To view the site locally:

1. Simply open `index.html` in a web browser, or
2. Use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server package)
   npx http-server
   ```

Then navigate to `http://localhost:8000` in your browser.

## Future Enhancements

Consider adding:
- [ ] Customer testimonials section
- [ ] Photo gallery of cleaned spaces
- [ ] Online booking system integration
- [ ] Blog for cleaning tips
- [ ] Before/after comparison images
- [ ] FAQ section
- [ ] Pricing calculator
- [ ] Social media integration

## Browser Support

This website supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 Cozeen Clean. All rights reserved.

---

**Contact**: For questions about this website, please contact the repository owner.
