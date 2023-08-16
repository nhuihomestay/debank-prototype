"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLoadBalancer = void 0;
const deleteLoadBalancer = ({ httpClient, }) => ({ load_balancer_id, }) => {
    const path = '/load_balancers';
    const url = `${path}/${load_balancer_id}`;
    return httpClient.delete(url);
};
exports.deleteLoadBalancer = deleteLoadBalancer;
//# sourceMappingURL=delete-load-balancer.js.map