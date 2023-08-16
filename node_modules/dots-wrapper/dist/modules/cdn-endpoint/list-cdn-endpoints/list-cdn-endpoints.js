"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCdnEndpoints = void 0;
const listCdnEndpoints = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/cdn/endpoints';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listCdnEndpoints = listCdnEndpoints;
//# sourceMappingURL=list-cdn-endpoints.js.map