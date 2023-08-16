"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDropletsToLoadBalancer = void 0;
const addDropletsToLoadBalancer = ({ httpClient, }) => ({ droplet_ids, load_balancer_id, }) => {
    const path = '/load_balancers';
    const body = {
        droplet_ids,
    };
    const url = `${path}/${load_balancer_id}/droplets`;
    return httpClient.post(url, body);
};
exports.addDropletsToLoadBalancer = addDropletsToLoadBalancer;
//# sourceMappingURL=add-droplets-to-load-balancer.js.map