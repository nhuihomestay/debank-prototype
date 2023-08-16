"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRulesToLoadBalancer = void 0;
const addRulesToLoadBalancer = ({ httpClient, }) => ({ forwarding_rules, load_balancer_id, }) => {
    const path = '/load_balancers';
    const body = {
        forwarding_rules,
    };
    const url = `${path}/${load_balancer_id}/forwarding_rules`;
    return httpClient.post(url, body);
};
exports.addRulesToLoadBalancer = addRulesToLoadBalancer;
//# sourceMappingURL=add-rules-to-load-balancer.js.map