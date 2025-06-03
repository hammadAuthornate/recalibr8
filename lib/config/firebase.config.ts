import { initializeApp, credential } from "firebase-admin";

const admin = initializeApp({
  credential: credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY,
  }),
});

const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

export { db };
