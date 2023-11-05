"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
var app_1 = require("firebase-admin/app");
var firestore_1 = require("firebase-admin/firestore");
var env_1 = require("./env");
var serviceAccount = {
    // type: env.FirebaseType,
    projectId: env_1.default.FirebaseProjectId,
    // private_key_id: env.FirebasePrivateKey,
    privateKey: env_1.default.FirebasePrivateKey,
    clientEmail: env_1.default.FirebaseClientEmail,
    // client_id: env.FirebaseClientId,
    // auth_uri: env.FirebaseAuthUri,
    // token_uri: env.FirebaseTokenUri,
    // auth_provider_x509_cert_url: env.FirebaseAuthProviderX509CertUrl,
    // client_x509_cert_url: env.FirebaseClientX509CertUrl,
    // universe_domain: env.FirebaseUniverseDomain,
};
var app = (0, app_1.initializeApp)({
    credential: (0, app_1.cert)(serviceAccount),
});
exports.db = (0, firestore_1.getFirestore)(app);
