# Specification

## Summary
**Goal:** Build a cute, romantic two-screen yes/no page where “Yes 💖” navigates to a celebratory success screen and the fixed-position “No 💔” button evasively jumps around the full viewport on desktop and mobile.

**Planned changes:**
- Create a main screen with the exact centered heading text and two buttons labeled exactly “Yes 💖” and “No 💔”.
- Implement “Yes 💖” click/tap navigation to a success screen showing the exact success text and subtext, plus a small CSS/JS heart or confetti-style animation (no external libraries).
- Implement an evasive “No 💔” button using `position: fixed` that jumps to random in-viewport positions while always staying fully visible (accounting for button size) and adapting to viewport size changes.
- Add interaction handling so “No 💔” moves immediately on desktop hover/mouseenter, on mobile tap, and also on click as a safety fallback; ensure taps never leave it in the same position and clicks never navigate.
- Apply a consistent cute, romantic, playful theme across both screens (soft pink/pastel red background, rounded buttons, smooth transitions, responsive centered layout).

**User-visible outcome:** Users see the romantic question with “Yes 💖” and an impossible-to-click “No 💔”; tapping “Yes 💖” shows a centered success message with a small celebratory animation, while “No 💔” keeps jumping around the full screen on hover/tap/click.
