"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCertificate = void 0;
const deleteCertificate = ({ httpClient, }) => ({ certificate_id, }) => {
    const path = '/certificates';
    const url = `${path}/${certificate_id}`;
    return httpClient.delete(url);
};
exports.deleteCertificate = deleteCertificate;
//# sourceMappingURL=delete-certificate.js.map