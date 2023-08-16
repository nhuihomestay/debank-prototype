"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCertificate = void 0;
const createCertificate = ({ httpClient, }) => ({ certificate_chain, dns_names, leaf_certificate, name, private_key, type, }) => {
    const path = '/certificates';
    const body = {
        certificate_chain,
        dns_names,
        leaf_certificate,
        name,
        private_key,
        type,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createCertificate = createCertificate;
//# sourceMappingURL=create-certificate.js.map