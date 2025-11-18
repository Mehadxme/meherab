# \ud83d\udd27 Customization Checklist

This file highlights all the fields you need to replace to make this portfolio your own.

## \u2705 Essential Changes

### 1. Personal Information

#### Name (3 places)
- [ ] **File**: `/app/frontend/src/components/HeroThreeScene.js`
  - Line 123: `<h1>` tag - Replace "Meherab Hossain" with your name

- [ ] **File**: `/app/frontend/src/components/Footer.js`
  - Line 34: Button text - Replace "Meherab Hossain" with your name
  - Line 51: Copyright text - Replace "Meherab Hossain" with your name

#### Title/Subtitle
- [ ] **File**: `/app/frontend/src/components/HeroThreeScene.js`
  - Line 126: `<h2>` tag - Replace "Student & Explorer" with your title

### 2. About Section

#### Bio
- [ ] **File**: `/app/frontend/src/components/About.js`
  - Lines 35-38: Update the bio paragraph with your own story

#### Skills
- [ ] **File**: `/app/frontend/src/components/About.js`
  - Lines 9-13: Update the skills array with your own skills:
    ```javascript
    const skills = [
      { icon: Code, name: 'Your Skill', desc: 'Description' },
      { icon: Globe, name: 'Your Skill', desc: 'Description' },
      { icon: Zap, name: 'Your Skill', desc: 'Description' },
    ];
    ```

#### Current Focus
- [ ] **File**: `/app/frontend/src/components/About.js`
  - Line 68: Replace "Learning & Building" with your current focus

### 3. Contact Information

#### Email (4 places)
- [ ] **File**: `/app/frontend/src/components/Contact.js`
  - Line 46: `mailto:` link - Replace "meherab@gmail.com"
  - Line 194: Display email - Replace "meherab@gmail.com"

- [ ] **File**: `/app/frontend/src/components/Footer.js`
  - Line 23: `mailto:` link - Replace "meherab@gmail.com"

- [ ] **File**: `/app/README.md`
  - Line 225: Author email - Replace "meherab@gmail.com"

#### Social Media Links (2 places each)

**Facebook**
- [ ] **File**: `/app/frontend/src/components/Contact.js`
  - Line 38: Replace Facebook URL

- [ ] **File**: `/app/frontend/src/components/Footer.js`
  - Line 14: Replace Facebook URL

**Instagram**
- [ ] **File**: `/app/frontend/src/components/Contact.js`
  - Line 43: Replace Instagram URL

- [ ] **File**: `/app/frontend/src/components/Footer.js`
  - Line 19: Replace Instagram URL

### 4. README Updates

- [ ] **File**: `/app/README.md`
  - Line 1: Update portfolio title
  - Lines 225-228: Update author information
  - Line 226: Update Facebook link
  - Line 227: Update Instagram link

## \ud83c\udfa8 Optional Customization

### Color Scheme
- [ ] **File**: `/app/frontend/src/index.css`
  - Modify CSS variables in `:root` and `.dark` sections (lines 21-87)

### 3D Scene
- [ ] **File**: `/app/frontend/src/components/HeroThreeScene.js`
  - Customize geometry, colors, and animations in `AnimatedShape` component

### Typography
- [ ] **File**: `/app/frontend/src/index.css`
  - Lines 1-2: Replace Google Fonts imports
  - Lines 8-16: Update font-family declarations

## \ud83d\udcc4 Quick Find & Replace

Use these commands to quickly replace all instances:

### Replace Name
```bash
find /app/frontend/src -type f -name "*.js" -exec sed -i 's/Meherab Hossain/YOUR_NAME/g' {} +
find /app -type f -name "*.md" -exec sed -i 's/Meherab Hossain/YOUR_NAME/g' {} +
```

### Replace Email
```bash
find /app/frontend/src -type f -name "*.js" -exec sed -i 's/meherab@gmail.com/YOUR_EMAIL/g' {} +
find /app -type f -name "*.md" -exec sed -i 's/meherab@gmail.com/YOUR_EMAIL/g' {} +
```

### Replace Social Links
```bash
# Facebook
find /app/frontend/src -type f -name "*.js" -exec sed -i 's|facebook.com/profile.php?id=100095323981228|YOUR_FACEBOOK_URL|g' {} +

# Instagram
find /app/frontend/src -type f -name "*.js" -exec sed -i 's|instagram.com/_.meherab__|YOUR_INSTAGRAM_HANDLE|g' {} +
```

## \u2705 Verification Checklist

After making changes, verify:

- [ ] Name appears correctly on hero section
- [ ] Title/subtitle is accurate
- [ ] Bio reflects your story
- [ ] Skills are relevant to you
- [ ] Email links work (click to test)
- [ ] Social media links open correct profiles
- [ ] Footer information is correct
- [ ] Contact form is functional
- [ ] Theme toggle works
- [ ] All sections scroll smoothly

## \ud83d\ude80 After Customization

1. Test the website locally
2. Check all links
3. Test on mobile devices
4. Verify theme toggle
5. Test contact form
6. Deploy!

---

**Need Help?** Refer to `/app/README.md` for detailed documentation.
