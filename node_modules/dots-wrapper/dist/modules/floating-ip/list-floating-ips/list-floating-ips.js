"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listFloatingIps = void 0;
const listFloatingIps = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/floating_ips';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listFloatingIps = listFloatingIps;
//# sourceMappingURL=list-floating-ips.js.map