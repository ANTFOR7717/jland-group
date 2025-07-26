# Component Refactoring Guard Rails Prompt

## CRITICAL DIRECTIVE: NON-NEGOTIABLE REFACTORING PROTOCOL

**MANDATORY EXECUTION ORDER:**
1. **FIRST ACTION:** Document current component state with visual verification
2. **SECOND ACTION:** Analyze existing design patterns and dependencies
3. **THIRD ACTION:** Create refactoring plan with rollback strategy
4. **FOURTH ACTION:** Execute changes incrementally with continuous verification
5. **FINAL ACTION:** Validate design integrity and document changes

## DESIGN INTEGRITY GUARD RAILS (ABSOLUTE REQUIREMENTS)

### Visual Preservation Rules
- **NEVER alter visual appearance** - All colors, spacing, typography, and layout MUST remain pixel-perfect
- **NEVER change component dimensions** - Maintain exact width, height, padding, and margin values
- **NEVER modify responsive behavior** - Preserve all breakpoint behaviors and mobile layouts
- **NEVER alter animations or transitions** - Maintain all existing motion design
- **NEVER change accessibility features** - Preserve ARIA labels, focus states, and keyboard navigation

### Code Safety Protocols
- **ALWAYS backup original component** before making any changes
- **ALWAYS test in isolation** before integrating with parent components
- **ALWAYS verify props interface** remains backward compatible
- **ALWAYS maintain existing class names** that may be referenced externally
- **ALWAYS preserve data attributes** used for testing or analytics

### Dependency Management
- **NEVER introduce new dependencies** without explicit approval
- **NEVER remove existing dependencies** that may be used elsewhere
- **ALWAYS verify import paths** remain valid after refactoring
- **ALWAYS check for circular dependencies** in component hierarchy
- **ALWAYS validate TypeScript interfaces** if applicable

## REFACTORING METHODOLOGY

### Phase 1: Analysis & Documentation
```markdown
1. **Visual Audit**
   - Take screenshots of component in all states (default, hover, active, disabled)
   - Document all responsive breakpoints
   - Record all interactive behaviors
   - Note any animations or transitions

2. **Code Analysis**
   - Map all props and their types
   - Identify all external dependencies
   - Document all CSS classes and styles
   - List all event handlers and callbacks

3. **Usage Analysis**
   - Find all instances where component is used
   - Document all prop combinations in use
   - Identify any custom styling overrides
   - Note any wrapper components or contexts
```

### Phase 2: Refactoring Plan
```markdown
1. **Component Breakdown**
   - Identify reusable sub-components
   - Plan component composition strategy
   - Design props interface for new components
   - Map existing functionality to new structure

2. **Migration Strategy**
   - Define incremental refactoring steps
   - Plan backward compatibility approach
   - Identify potential breaking changes
   - Create rollback procedures

3. **Testing Strategy**
   - Define visual regression tests
   - Plan functional testing approach
   - Identify edge cases to validate
   - Create acceptance criteria
```

### Phase 3: Implementation Guard Rails
```markdown
1. **Incremental Changes**
   - Make ONE change at a time
   - Test after EACH modification
   - Verify visual integrity at EVERY step
   - Document EACH change made

2. **Continuous Validation**
   - Compare screenshots before/after each change
   - Test all interactive states
   - Verify responsive behavior
   - Check accessibility compliance

3. **Rollback Triggers**
   - ANY visual difference detected
   - ANY functional behavior change
   - ANY breaking change in props interface
   - ANY performance degradation
```

## COMPONENT EXTRACTION RULES

### Safe Extraction Patterns
- **Extract by visual boundaries** - Only separate visually distinct sections
- **Extract by functional responsibility** - Separate concerns cleanly
- **Extract by reusability** - Only create components that will be reused
- **Extract by state management** - Separate stateful from stateless components

### Forbidden Extraction Patterns
- **NEVER split inline elements** that belong together visually
- **NEVER separate tightly coupled functionality**
- **NEVER create components for single-use elements**
- **NEVER break semantic HTML structure**

## PROPS INTERFACE DESIGN

### Required Props Standards
```typescript
interface ComponentProps {
  // ALWAYS include className for style overrides
  className?: string;
  
  // ALWAYS include children if component wraps content
  children?: React.ReactNode;
  
  // ALWAYS include data-testid for testing
  'data-testid'?: string;
  
  // ALWAYS make props optional with sensible defaults
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
}
```

### Props Validation Rules
- **ALWAYS provide default values** for optional props
- **ALWAYS validate prop types** with TypeScript or PropTypes
- **ALWAYS document prop purpose** with JSDoc comments
- **NEVER make breaking changes** to existing prop interfaces
- **NEVER remove props** without deprecation period

## STYLING PRESERVATION

### CSS Framework Compliance
- **ONLY use approved CSS framework** (Tailwind, styled-components, etc.)
- **NEVER mix styling approaches** within same component
- **ALWAYS convert inline styles** to framework classes
- **NEVER use !important** unless absolutely necessary
- **ALWAYS maintain CSS specificity** hierarchy

### Style Migration Protocol
```markdown
1. **Audit Current Styles**
   - Document all CSS classes used
   - Note any inline styles
   - Identify custom CSS properties
   - Record any CSS-in-JS usage

2. **Framework Conversion**
   - Map existing styles to framework classes
   - Preserve exact visual appearance
   - Maintain responsive behavior
   - Keep hover/focus states intact

3. **Validation Process**
   - Compare rendered output pixel-by-pixel
   - Test all interactive states
   - Verify cross-browser compatibility
   - Check mobile responsiveness
```

## TESTING & VALIDATION

### Visual Regression Testing
```markdown
1. **Screenshot Comparison**
   - Before/after screenshots for all states
   - Multiple browser testing
   - Mobile and desktop viewports
   - Light and dark themes (if applicable)

2. **Interactive Testing**
   - All hover states
   - All focus states
   - All active states
   - All disabled states

3. **Responsive Testing**
   - All defined breakpoints
   - Edge cases between breakpoints
   - Portrait and landscape orientations
   - High DPI displays
```

### Functional Testing
```markdown
1. **Props Testing**
   - All prop combinations
   - Edge case values
   - Invalid prop handling
   - Default prop behavior

2. **Event Testing**
   - All click handlers
   - All keyboard interactions
   - All form submissions
   - All custom events

3. **Integration Testing**
   - Component in parent contexts
   - Component with siblings
   - Component in different layouts
   - Component with external state
```

## DOCUMENTATION REQUIREMENTS

### Component Documentation
```markdown
1. **Usage Examples**
   - Basic usage example
   - All prop variations
   - Common use cases
   - Integration examples

2. **API Documentation**
   - All props with types
   - All events emitted
   - All slots/children accepted
   - All CSS custom properties

3. **Migration Guide**
   - Breaking changes (if any)
   - Upgrade instructions
   - Deprecation notices
   - Rollback procedures
```

### Change Documentation
```markdown
1. **Refactoring Log**
   - What was changed and why
   - Before/after code comparison
   - Visual changes (should be none)
   - Performance impact

2. **Decision Record**
   - Architecture decisions made
   - Alternative approaches considered
   - Trade-offs evaluated
   - Future considerations
```

## FAILURE PREVENTION

### Common Pitfalls to Avoid
- **Scope creep** - Only refactor, don't add features
- **Over-abstraction** - Don't create unnecessary complexity
- **Breaking changes** - Maintain backward compatibility
- **Visual drift** - Preserve exact appearance
- **Performance regression** - Monitor bundle size and runtime performance

### Emergency Procedures
```markdown
1. **Immediate Rollback**
   - Revert to last known good state
   - Document what went wrong
   - Analyze root cause
   - Plan corrective action

2. **Hotfix Protocol**
   - Minimal changes to restore functionality
   - Temporary solutions clearly marked
   - Follow-up refactoring planned
   - Stakeholder communication
```

## SUCCESS CRITERIA

### Refactoring is Complete When:
- ✅ Visual appearance is pixel-perfect match
- ✅ All functionality works identically
- ✅ Props interface is backward compatible
- ✅ Performance is maintained or improved
- ✅ Code is more maintainable
- ✅ Components are properly reusable
- ✅ Documentation is complete
- ✅ Tests are passing
- ✅ No breaking changes introduced
- ✅ Stakeholders approve changes

## ENFORCEMENT

**NON-COMPLIANCE CONSEQUENCES:**
- Immediate rollback of changes
- Documented failure analysis
- Corrective action plan required
- Additional review process
- Potential process improvement

**REMEMBER:** The goal is to improve code quality while preserving user experience. When in doubt, prioritize design integrity over code elegance.