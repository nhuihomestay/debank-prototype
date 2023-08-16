"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDropletsFromLoadBalancer = void 0;
const removeDropletsFromLoadBalancer = ({ httpClient, }) => ({ droplet_ids, load_balancer_id, }) => {
    const path = '/load_balancers';
    const body = {
        droplet_ids,
    };
    const url = `${path}/${load_balancer_id}/droplets`;
    return httpClient.delete(url, { data: body });
};
exports.removeDropletsFromLoadBalancer = removeDropletsFromLoadBalancer;
//# sourceMappingURL=remove-droplets-from-load-balancer.js.map