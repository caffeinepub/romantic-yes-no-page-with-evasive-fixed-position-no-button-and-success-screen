# Specification

## Summary
**Goal:** Publish Version 1 and Version 2 as two separately deployed standalone frontends on different URLs, removing any in-app version selection.

**Planned changes:**
- Remove the single-app version-selection entry flow so each version loads directly at its own deployment root route (`'/'`).
- Ensure each deployment preserves its version-specific question heading text exactly as specified (Version 1: “Cia will you be mine forever or will stay for lifetime? ❤️”; Version 2: “Khusnul will you be mine forever or will stay for lifetime? ❤️”).
- Keep all existing behaviors unchanged in both deployments, including the “Yes 💖” success navigation/text/animation and the evasive “No 💔” behavior.
- Add/adjust build and deploy configuration to produce two distinct frontend artifacts (v1 and v2) from the same repo via configuration (no manual source edits between deployments), with a documented repeatable process.

**User-visible outcome:** Users can open Version 1 and Version 2 via two different URLs; each loads immediately on `'/'` with its correct heading and the same existing “Yes 💖” and evasive “No 💔” interactions, and both can run independently in separate tabs.
