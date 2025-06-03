import { initializeApp, credential } from "firebase-admin";

const firebaseConfig = {
  apiKey: "AIzaSyDIxU5Pfm9GBWkqhJAUct4WSKMpeoKPw7Q",
  authDomain: "recalibr8-dashboard.firebaseapp.com",
  projectId: "recalibr8-dashboard",
  storageBucket: "recalibr8-dashboard.firebasestorage.app",
  messagingSenderId: "21918464362",
  appId: "1:21918464362:web:f88e9a43cac79cc3208d13",
};

const admin = initializeApp({
  credential: credential.cert(
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("../../recalibr8-dashboard-firebase-adminsdk-fbsvc-6ddcc952ab.json")
  ),
});

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

export { db };
