# Task Manager App

A clean, modern React Native task management application built with Expo. This app demonstrates best practices in React Native development including component reusability, custom hooks, and proper separation of concerns.

## Features

### Core Functionality

- **Add Tasks**: Create new tasks with descriptive text
- **Mark Complete**: Toggle task completion status with visual feedback
- **Delete Tasks**: Remove tasks with confirmation dialog
- **Task List**: View all tasks in a clean, organized list
- **Real-time Updates**: Live task count and status updates

## Setup & Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (macOS) or Android Emulator

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd TaskManager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Run on your preferred platform**

   ```bash
   # iOS (requires macOS)
   npm run ios

   # Android
   npm run android

   # Web
   npm run web
   ```

5. **Open with Expo Client (Mobile)**
   - Install **Expo Go** app from App Store (iOS) or Google Play Store (Android)
   - Scan the QR code displayed in your terminal with the Expo Go app
   - Your Task Manager app will load directly on your mobile device
   - **Note**: Make sure your phone and computer are on the same WiFi network

## Usage

### Adding Tasks

1. Type your task description in the input field
2. Press "Add" button or hit Enter/Return
3. Task will appear in the list below

### Managing Tasks

- **Complete Task**: Tap the checkbox next to any task
- **Delete Task**: Tap the red "×" button (confirmation dialog will appear)
- **View Details**: Each task shows creation time

### Task States

- **Active**: White background with blue checkbox
- **Completed**: Gray background with blue checked box and strikethrough text

## Development

### Key Technologies

- **React Native**: Core framework
- **Expo**: Development platform and tools
- **React Hooks**: State management and side effects
- **StyleSheet**: Optimized styling system

## Project Structure

```
TaskManager/
├── App.js                 # Main application component
├── components/            # Reusable UI components
├── hooks/                 # Custom React hooks
├── constants/             # Design system constants
├── assets/                # Images, fonts, etc.
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## Performance Features

- **Optimized Rendering**: FlatList for efficient task list rendering
- **Memory Management**: Proper cleanup and state management
- **Smooth Animations**: Optimized touch interactions and feedback
