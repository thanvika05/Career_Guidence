

# AI-Powered Career Guidance Application

## Creative Direction
- **Palette**: Sky & Peach — light blue (#e0f2fe, #7dd3fc) with warm peach accents (#fecaca, #f9a8a8), white backgrounds, dark text
- **Typography**: Inter for body, bold headings with good hierarchy
- **Layout**: Dashboard-style with sidebar navigation, card-based content areas
- **Style**: Clean, student-friendly, rounded corners (12px), soft shadows, gradient accent buttons

---

## Phase 1: Foundation

### Authentication & User Types
- Lovable Cloud auth with email/password
- Registration asks user type: **12th Student** or **UG Student**
- Profile stored with user type flag
- Protected routes, login/signup pages with Sky & Peach branding

### Database Setup
- Seed the 504-college CSV into a `colleges` table (name, state, city, type, course, branch, cutoff_min/max, exam, fees, placement_rate, avg_package, rating, approved_by, scholarships)
- Tables: `profiles`, `user_interests`, `user_skills`, `user_goals`, `user_academic_details`

### Setup Wizard (5 Steps)
1. **Personal Info**: Name, district/village, state (dropdown of Indian states)
2. **Academics**: Cutoff marks (12th) or CGPA + year + college (UG), board/university
3. **Interests & Skills**: Multi-select chips for interests (AI, Web Dev, Data Science, etc.) and separate skills selection
4. **Career Goals**: Salary expectation slider, relocation preference, free-text goal
5. **Preferences**: Work style (remote/hybrid/office), preferred colleges (optional autocomplete from DB)

---

## Phase 2: Dashboard & Core AI

### Dashboard
- **Career Readiness Score** — AI-computed circular progress gauge
- **Profile Strength** bar showing completion %
- **Stats cards**: Skills count, academic standing, interests matched
- **Top 3 Personalized Matches** — career/college cards with match %
- **Weekly Next Steps** — 3-4 actionable tasks
- **Quick access** cards to all modules

### AI Career Prediction System (Edge Function + Lovable AI)
- Predict college admission chances based on cutoff data from DB
- Job readiness score based on skills, CGPA, projects
- Show reasoning with expandable explanations

### AI Advisor Chatbot
- Floating chat button, slide-out panel
- Pre-filled quick prompts: "Suggest colleges", "Give roadmap", "Interview questions", "Best internships"
- Context-aware: uses profile data (cutoff/CGPA, interests, location, user type)
- Streaming responses via Lovable AI edge function

---

## Phase 3: 12th Student Modules

### College Guidance
- Filter/search colleges from seeded DB by state, city, branch, cutoff range
- Categories: **Top Colleges**, **Local Best**, **Safe Colleges** (cutoff buffer)
- Each college card shows: fees, placement rate, avg package, rating, entrance exam

### Cutoff Predictor Tool
- Enter marks → shows eligible colleges sorted by match quality
- Color-coded: green (safe), yellow (moderate), red (reach)

### Smart Alternative Generator (AI)
- If target course cutoff too high, AI suggests alternative degrees/branches
- Shows reasoning and career outlook for alternatives

### Entrance Exams & Scholarships
- Curated list of entrance exams with eligibility, dates, difficulty, prep time
- Scholarships: first graduate, government schemes, merit-based with eligibility filters

---

## Phase 4: UG Student Modules

### Career Growth & Domain Guidance
- Based on year, degree, CGPA, interests → AI recommends domains
- Skill roadmap with timeline (4-phase visual)

### Company Preparation
- Top companies based on college placement data + interest
- Interview cheat sheets, common questions, company-specific focus areas

### Internship Module
- Paid & unpaid internship recommendations by year and domain
- Cards with details and apply links

### Project Ideas
- Domain-based unique project suggestions
- Final-year project ideas with difficulty level

### Higher Education
- GATE, GRE guidance with eligibility, prep timeline
- Suggested universities and courses

---

## Phase 5: Career Planning Modules

### Careers Module
- 4 personalized career paths with match %, salary range, why it fits, top companies
- Side-by-side comparison table

### Roadmap Module
- 4-phase visual roadmap (Foundation → Skill Building → Experience → Career Launch)
- Monthly action plan with checkboxes

### Skills Module
- Skill gap analysis: must-have vs nice-to-have
- Learning resources (free/paid links)
- Certification recommendations

### Exams Module
- Entrance exams with eligibility, difficulty, prep time, dates
- Study tips per exam

### Scholarships Module
- Personalized list: provider, amount, deadline, eligibility
- Filter by category

### Trends Module
- Fastest growing fields in India (2025-2030)
- In-demand skills visualization
- Personalized job outlook

---

## Phase 6: Advanced Features

### Resume Builder
- Auto-generate resume from profile data
- Section-wise tips and ATS keyword suggestions
- Download as PDF

### Resume Rater
- Upload PDF/DOC → AI analyzes and scores (out of 100)
- Section-wise feedback, missing skills, ATS optimization tips

### Mentor Connect
- Seniors can register as mentors
- Q&A forum / chat system
- Peer learning connections

### Daily Micro Tasks
- AI-generated daily tasks ("Learn Arrays – 30 mins", "Apply to 1 internship")
- Streak tracking and habit building

### Alerts & Notifications
- Internship deadlines, exam dates, scholarship alerts
- In-app notification center

### Multi-language Support
- English (default), Tamil, Hindi toggle
- UI labels and AI responses in selected language

---

## Technical Architecture

- **Frontend**: React + TypeScript + Tailwind CSS (Sky & Peach theme)
- **Backend**: Lovable Cloud (Supabase) — database, auth, edge functions, storage
- **AI**: Lovable AI Gateway for chatbot, predictions, resume analysis, recommendations
- **Database**: Colleges table (seeded from CSV), profiles, wizard data, mentor profiles, tasks
- **Navigation**: Sidebar with icon-based nav, responsive mobile drawer

