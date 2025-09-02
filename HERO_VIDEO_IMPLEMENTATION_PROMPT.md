# Hero Video Background Implementation Prompt

## Objective
Replace the background image in Hero.astro with hero-video.mp4 while maintaining exact layout dimensions and component integrity.

## Critical Requirements
1. **Preserve Layout**: Maintain exact same height as current background image
2. **Component Integrity**: Do not break existing component structure
3. **Video Loop**: Ensure video plays continuously on loop
4. **Fallback Strategy**: Implement robust fallback to background image if video fails

## Pre-Implementation Checklist

### 1. Video File Validation
- [ ] Verify hero-video.mp4 exists in `/public/images/`
- [ ] Check file size (recommend < 5MB for web performance)
- [ ] Test video plays in browser directly via URL
- [ ] Verify codec compatibility (H.264 recommended)
- [ ] Confirm video dimensions and aspect ratio

### 2. Current State Analysis
- [ ] Examine Hero.astro current background implementation
- [ ] Document exact height/dimensions of current background
- [ ] Identify all CSS classes and styles affecting hero section
- [ ] Note any existing overlay or content positioning

### 3. Browser Compatibility Preparation
- [ ] Understand autoplay policies (videos must be muted for autoplay)
- [ ] Plan for mobile device considerations
- [ ] Prepare multiple video formats if needed (WebM, MP4)

## Implementation Strategy

### Phase 1: Minimal Viable Implementation
```html
<!-- Replace background-image with video element -->
<video 
  autoplay 
  muted 
  loop 
  playsinline
  class="absolute inset-0 w-full h-full object-cover"
  poster="/images/current-background-image.jpg"
>
  <source src="/images/hero-video.mp4" type="video/mp4">
  <!-- Fallback for unsupported browsers -->
  <img src="/images/current-background-image.jpg" alt="Hero background" class="w-full h-full object-cover">
</video>
```

### Phase 2: Enhanced Implementation with Error Handling
```html
<div class="hero-background relative">
  <video 
    id="hero-video"
    autoplay 
    muted 
    loop 
    playsinline
    preload="metadata"
    class="absolute inset-0 w-full h-full object-cover"
    poster="/images/current-background-image.jpg"
    onloadstart="console.log('Video loading started')"
    oncanplay="console.log('Video can start playing')"
    onerror="this.style.display='none'; document.getElementById('hero-fallback').style.display='block'"
  >
    <source src="/images/hero-video.mp4" type="video/mp4">
  </video>
  
  <!-- Fallback background image -->
  <div 
    id="hero-fallback"
    class="absolute inset-0 w-full h-full bg-cover bg-center"
    style="background-image: url('/images/current-background-image.jpg'); display: none;"
  ></div>
  
  <!-- Existing hero content remains unchanged -->
  <div class="relative z-10">
    <!-- All existing hero content -->
  </div>
</div>
```

## Critical Implementation Rules

### 1. Dimension Preservation
- Use `object-cover` to maintain aspect ratio
- Apply `absolute inset-0 w-full h-full` for exact container filling
- Preserve parent container's height classes

### 2. Z-Index Management
- Video: `z-index: 1` (background layer)
- Overlay: `z-index: 2` (if exists)
- Content: `z-index: 10` (foreground)

### 3. Performance Optimization
- Use `preload="metadata"` instead of `preload="auto"`
- Include `poster` attribute for immediate visual feedback
- Implement lazy loading if video is below fold

### 4. Accessibility Considerations
- Provide `prefers-reduced-motion` media query fallback
- Include descriptive alt text for fallback image
- Ensure video doesn't interfere with screen readers

## Testing Protocol

### 1. Immediate Verification
- [ ] Video loads and plays automatically
- [ ] Loop functionality works
- [ ] Layout dimensions match exactly
- [ ] Content overlay remains properly positioned

### 2. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### 3. Performance Testing
- [ ] Page load time impact
- [ ] Network usage monitoring
- [ ] Mobile data consumption

### 4. Fallback Testing
- [ ] Simulate network failure
- [ ] Test with video file removed
- [ ] Verify fallback image displays correctly

## Troubleshooting Guide

### Video Not Loading
1. Check browser console for errors
2. Verify file path and permissions
3. Test video URL directly in browser
4. Check network tab for failed requests

### Video Not Playing
1. Ensure `muted` attribute is present (required for autoplay)
2. Check autoplay policies in browser settings
3. Verify video codec compatibility
4. Test with `controls` attribute temporarily

### Layout Issues
1. Inspect element dimensions with dev tools
2. Verify CSS classes are applied correctly
3. Check for conflicting styles
4. Ensure parent container maintains height

### Performance Issues
1. Compress video file size
2. Use appropriate video resolution
3. Consider using `preload="none"` for below-fold videos
4. Implement intersection observer for lazy loading

## Success Criteria
- ✅ Video plays automatically on page load
- ✅ Video loops continuously
- ✅ Layout dimensions exactly match previous background
- ✅ All existing content remains properly positioned
- ✅ Fallback image displays if video fails
- ✅ Performance impact is minimal
- ✅ Works across all target browsers

## Common Pitfalls to Avoid
1. **Don't** remove `muted` attribute (breaks autoplay)
2. **Don't** use `preload="auto"` (impacts performance)
3. **Don't** forget `playsinline` (required for mobile)
4. **Don't** skip fallback implementation
5. **Don't** ignore browser console errors
6. **Don't** assume video will work without testing
7. **Don't** modify layout structure unnecessarily

## Implementation Checklist
- [ ] Backup current Hero.astro file
- [ ] Validate video file accessibility
- [ ] Implement minimal video element
- [ ] Test basic functionality
- [ ] Add error handling and fallback
- [ ] Verify layout preservation
- [ ] Test across browsers
- [ ] Monitor performance impact
- [ ] Document any issues encountered
- [ ] Confirm success criteria met

This systematic approach addresses the previous implementation failures by emphasizing validation, testing, and robust fallback strategies while maintaining strict layout preservation requirements.