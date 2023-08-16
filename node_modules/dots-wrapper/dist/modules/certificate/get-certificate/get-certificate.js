"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCertificate = void 0;
const getCertificate = ({ httpClient, }) => ({ certificate_id, }) => {
    const path = '/certificates';
    const url = `${path}/${certificate_id}`;
    return httpClient.get(url);
};
exports.getCertificate = getCertificate;
//# sourceMappingURL=get-certificate.js.map