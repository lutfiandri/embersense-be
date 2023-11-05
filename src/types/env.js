"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
var zod_1 = require("zod");
exports.Env = zod_1.z.object({
    AppId: zod_1.z.string(),
    MqttUrl: zod_1.z.string(),
    MqttTopic: zod_1.z.string(),
    FirebaseType: zod_1.z.string(),
    FirebaseProjectId: zod_1.z.string(),
    FirebasePrivateKeyId: zod_1.z.string(),
    FirebasePrivateKey: zod_1.z.string(),
    FirebaseClientEmail: zod_1.z.string(),
    FirebaseClientId: zod_1.z.string(),
    FirebaseAuthUri: zod_1.z.string(),
    FirebaseTokenUri: zod_1.z.string(),
    FirebaseAuthProviderX509CertUrl: zod_1.z.string(),
    FirebaseClientX509CertUrl: zod_1.z.string(),
    FirebaseUniverseDomain: zod_1.z.string(),
});
