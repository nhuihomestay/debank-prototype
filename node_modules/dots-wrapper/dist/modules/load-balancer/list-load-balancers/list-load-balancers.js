"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listLoadBalancers = void 0;
const listLoadBalancers = ({ httpClient, }) => ({ page = 1, per_page = 25, }) => {
    const path = '/load_balancers';
    const query_params = { page, per_page };
    const url = `${path}`;
    return httpClient.get(url, { params: query_params });
};
exports.listLoadBalancers = listLoadBalancers;
//# sourceMappingURL=list-load-balancers.js.map