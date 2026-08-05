# Marhba Mobile Application

React Native mobile client built with **Expo SDK 54**, **Expo Router**, **Zustand**, and **Axios**.

## Tech Stack
- **Framework**: React Native with Expo
- **Routing**: Expo Router (file-based navigation)
- **State Management**: Zustand
- **API Client**: Axios
- **Storage**: AsyncStorage
- **UI Components**: React Native Custom Components & Expo Vector Icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure backend API URL in `service/service.js`:
   ```javascript
   const api = axios.create({
     baseURL: "http://<YOUR_LOCAL_IP>:3000/api"
   });
   ```

3. Start the Expo app:
   ```bash
   npm run start
   ```

4. Scan the QR code using **Expo Go** or launch an emulator (`a` for Android, `i` for iOS).
