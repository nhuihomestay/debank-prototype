"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDomains = void 0;
const listDomains = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/domains';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listDomains = listDomains;
//# sourceMappingURL=list-domains.js.map