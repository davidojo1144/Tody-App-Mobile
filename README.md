# TodyApp - A Task Management Mobile App
TodyApp is a React Native-based mobile application for managing tasks, projects, and productivity. It integrates with the DummyJSON API for fetching mock data like todos and user information. The app includes features for task listing, filtering, project management, settings, and more.

Setup Instructions
Prerequisites

Node.js (v18 or higher)
Expo CLI (install via npm install -g expo-cli)
Android Studio or Xcode for emulators (optional, but recommended for testing)
Git

Installation


Clone the repository:
textgit clone <repository-url>
cd todyapp


Install dependencies:
textnpm install
or
textyarn install


Start the Expo development server:
textexpo start

Scan the QR code with the Expo Go app on your mobile device, or run on an emulator using a for Android or i for iOS.


For login, use the following credentials (hardcoded for demo purposes):

Username: emilys
Password: emilyspass


Note: In a production app, authentication would use secure methods like JWT or OAuth. Here, it's simulated with AsyncStorage for token storage.


Building for Production

For Android/iOS builds, use expo build:android or expo build:ios.
Refer to Expo documentation for publishing to app stores.

Design Choices and Assumptions Made

Framework and Tools: Built with React Native and Expo for cross-platform compatibility (iOS/Android). Expo was chosen for its ease of setup, managed workflow, and built-in tools like expo-router for navigation and @expo/vector-icons for icons.
API Integration: Uses DummyJSON API (e.g., https://dummyjson.com/todos for tasks, https://dummyjson.com/users/1 for user data) as a mock backend. This avoids needing a real server during development. Assumptions: API responses are consistent; no real CRUD operations (e.g., task completion is local state only).
State Management: Simple useState and useEffect hooks for local state (e.g., todos, user data). No advanced libraries like Redux were used to keep the app lightweight, assuming a small-scale project.
UI/UX Choices:

Tailwind CSS via global.css for styling, providing responsive and consistent design.
Consistent header with back button and search icon across screens for intuitive navigation.
Excluded bottom tabs as per user instructions in multiple screens to focus on core content.
Hardcoded dates/colors/icons in places (e.g., calendar in Upcoming screen) for simplicity, assuming dynamic data in future iterations.
Login uses AsyncStorage for token persistence; logout clears it and redirects to login.


Assumptions:

User is authenticated after login; no token validation beyond storage.
All screens are standalone; navigation via expo-router (e.g., /inbox, /upcoming).
No error handling for API failures (e.g., offline mode) to keep code minimal.
Screenshots are placeholder descriptions; in a real repo, embed images.



Features Implemented

Authentication:

Login screen with username/password (demo creds: emilys/emilyspass).
Logout from Settings clears AsyncStorage token and redirects to login.


Task Management:

Inbox: Displays priority tasks with details (time, comments, attachments).
Upcoming: Calendar view with tasks fetched from DummyJSON, mark as completed.
Filter & Labels: Options for assigning tasks, priorities, managing filters/labels.


Project Management:

Project: List of instructions, boards, manage projects.
Instructions: Tips and guides for app usage.
Try Boards: In-progress and completed tasks in board view.
Manage Project: Edit project name, color, collaborators, favorite, view type (list/boards).


Settings:

Profile display with user data from API.
Account: Edit name, email, change password.
Theme: Select from color themes.
App Icon: Choose from colored icons.
Productivity: User stats, progress report, monthly chart.
Change Mode: Toggle (e.g., dark mode simulation).
Privacy Policy & Help Center: Static links/tiles.
Log Out: Clears session.


Other:

Search bars in most screens.
Floating action buttons (e.g., + for new tasks).
Charts/bars for productivity using simple Views (no external chart lib).


Challenges Faced

API Limitations: DummyJSON provides mock data, but lacks real-time updates or authentication. Simulated login/logout with AsyncStorage.
Chart Implementation: No dedicated library (e.g., Victory or Recharts) due to React Native constraints; used custom Views for bars in Productivity screen. This was simple but limited in interactivity.
Icon Matching: Approximated emojis/icons in Help Center with Ionicons; exact matches would require custom assets.
Navigation: expo-router handles routing well, but ensuring back navigation consistency across screens required manual router.back() in headers.
State Persistence: Local state for tasks resets on reload; in production, sync with a real backend like Firebase.

Overall, the project focuses on UI/UX fidelity to provided designs while keeping code clean and modular. Future improvements could include real backend integration and testing.

