import { initializeApp, cert, ServiceAccount } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import env from './env';

const serviceAccount: ServiceAccount = {
  // type: env.FirebaseType,
  projectId: env.FirebaseProjectId,
  // private_key_id: env.FirebasePrivateKey,
  privateKey: env.FirebasePrivateKey,
  clientEmail: env.FirebaseClientEmail,
  // client_id: env.FirebaseClientId,
  // auth_uri: env.FirebaseAuthUri,
  // token_uri: env.FirebaseTokenUri,
  // auth_provider_x509_cert_url: env.FirebaseAuthProviderX509CertUrl,
  // client_x509_cert_url: env.FirebaseClientX509CertUrl,
  // universe_domain: env.FirebaseUniverseDomain,
};

const app = initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore(app);
