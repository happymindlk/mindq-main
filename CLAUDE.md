# MindQ (`mindqtalent.com`) — Project & UI Rules

## Tech Stack
- React 19 + TypeScript + Tailwind CSS v4 + Lucide React (`lucide-react`).
- Domain: `mindqtalent.com` (Enterprise Psychometric & Skills Assessment Platform).

## Mandatory Mobile & Desktop Responsiveness
- Build mobile-first (`390px` phone viewport) scaling cleanly to desktop (`1440px`).
- Enforce zero horizontal overflow (`overflow-x-hidden`) on all viewports.
- Navigation: Below `md` (`768px`), collapse links into an accessible mobile hamburger drawer containing the split `Log In` links (`Client HR Portal` / `Candidate Portal`) and primary `Book a Demo` CTA.
- Touch Targets: All interactive buttons, category filter pills, and sample-question options must maintain at least `44px` height on mobile.
- Grids: Stack vertically on mobile (`grid-cols-1`) and expand cleanly on desktop (`md:grid-cols-2 lg:grid-cols-3`).

## Architecture
- Organize code cleanly into `src/types/`, `src/data/`, `src/components/`, and `src/demos/`.
- Use realistic MindQ psychometric copy (Big Five Personality, Numerical Reasoning, Stakeholder SJT, AI Executive Summaries).