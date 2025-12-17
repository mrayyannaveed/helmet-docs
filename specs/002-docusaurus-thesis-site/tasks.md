# Tasks: Docusaurus Thesis Site

**Input**: Design documents from `specs/002-docusaurus-thesis-site/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, contracts/

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)

## Path Conventions
- All paths are relative to the project root.

---
## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure.

- [X] T001 Initialize a new Docusaurus classic site in the current directory.
- [X] T002 [P] Install testing dependencies: `yarn add --dev jest @testing-library/react jest-config-docusaurus identity-obj-proxy`.
- [X] T003 Configure Jest for Docusaurus by creating `jest.config.js` and `jest.setup.js` files based on `research.md`.
- [X] T004 [P] Configure base site metadata (title, description, footer) in `docusaurus.config.js`.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core content structure that MUST be complete before ANY user story can be implemented.

**⚠️ CRITICAL**: No user story work can begin until this phase is complete.

- [X] T005 Create the thesis directory structure inside the `docs/` folder, including `00-front-matter/`, `01-chapter-one/` through `06-chapter-six/`.
- [X] T006 [P] Create placeholder Markdown files within the new directories: `01-certificate.md`, `02-dedication.md`, `03-abstract.md`, and a placeholder file for each of the 6 chapters.
- [X] T007 Configure the sidebar in `docusaurus.config.js` to reflect the complete thesis structure, ensuring front matter and chapters are ordered correctly.

**Checkpoint**: Foundation ready - user story implementation can now begin.

---

## Phase 3: User Story 1 - Review Thesis Content (Priority: P1) 🎯 MVP

**Goal**: Enable a reviewer to navigate the complete, albeit empty, structure of the thesis on the website.

**Independent Test**: The Docusaurus site can be started, and a user can click through the sidebar to visit every chapter and front-matter page, seeing a unique title on each page.

### Implementation for User Story 1

- [ ] T008 [P] [US1] Add a unique title and a single paragraph of placeholder content (e.g., "Content for this section is being developed.") to each Markdown file created in T006.
- [ ] T009 [US1] Run the development server (`yarn start`) and verify that all pages are present in the sidebar, are navigable, and render their title and placeholder content correctly.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently.

---

## Phase 4: User Story 2 - Download PDF Version (Priority: P2)

**Goal**: Allow a user to download a PDF version of the thesis from the website.

**Independent Test**: A "Download PDF" button is visible on the site. Clicking it initiates the download of a PDF file that contains the content from the Markdown files.

### Implementation for User Story 2

- [ ] T010 [US2] Install the PDF generation plugin: `yarn add docusaurus-prince-pdf`. Note: This requires Prince XML to be installed on the system.
- [ ] T011 [US2] Configure the `docusaurus-prince-pdf` plugin in `docusaurus.config.js`.
- [ ] T012 [P] [US2] Create a new React component `src/components/PdfDownloadButton.js` that renders a link to the generated PDF file (e.g., `/thesis.pdf`).
- [ ] T013 [US2] Add the `PdfDownloadButton` component to the Docusaurus theme, for example, in the navbar in `docusaurus.config.js`.
- [ ] T014 [US2] Add a script to `package.json` for PDF generation: `"generate-pdf": "docusaurus-prince-pdf"`.
- [ ] T015 [US2] Run the generation script (`yarn generate-pdf`) and verify that a `thesis.pdf` is created in the `static/` directory.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently.

---

## Phase 5: User Story 3 - Review Chatbot Documentation (Priority: P3)

**Goal**: Provide a page that documents the concept for a hypothetical chatbot related to the thesis.

**Independent Test**: A user can navigate to the "Chatbot" page and read the conceptual documentation.

### Implementation for User Story 3

- [ ] T016 [P] [US3] Create the `docs/chatbot.md` file if it doesn't exist.
- [ ] T017 [US3] Populate `docs/chatbot.md` with the conceptual documentation as outlined in the feature specification, including its purpose, intended functionality, architecture, and relevance to the thesis.

**Checkpoint**: All user stories should now be independently functional.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories and prepare the site for final review.

- [ ] T018 [P] Apply academic-friendly typography and custom styles in `src/css/custom.css`.
- [ ] T019 [P] Add print-specific CSS rules to `src/css/custom.css` to hide UI elements like the sidebar and download button when printing directly from the browser.
- [ ] T020 Perform a final review of the site, checking for broken links, consistent formatting, and responsive design on mobile and desktop.

---

## Dependencies & Execution Order

- **Setup (Phase 1)**: Must be completed first.
- **Foundational (Phase 2)**: Depends on Setup. Blocks all User Stories.
- **User Stories (Phase 3-5)**: Depend on Foundational. Can be worked on in parallel after Phase 2 is complete.
- **Polish (Phase 6)**: Depends on all desired user stories being complete.

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently by running the site and navigating all pages.
