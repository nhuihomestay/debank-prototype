"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCertificates = void 0;
const listCertificates = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/certificates';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listCertificates = listCertificates;
//# sourceMappingURL=list-certificates.js.map