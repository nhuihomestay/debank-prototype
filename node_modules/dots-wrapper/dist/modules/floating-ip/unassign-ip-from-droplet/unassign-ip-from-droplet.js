"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unassignIpFromDroplet = void 0;
const unassignIpFromDroplet = ({ httpClient, }) => ({ ip, }) => {
    const path = '/floating_ips';
    const type = 'unassign';
    const body = { type };
    const url = `${path}/${ip}/actions`;
    return httpClient.post(url, body);
};
exports.unassignIpFromDroplet = unassignIpFromDroplet;
//# sourceMappingURL=unassign-ip-from-droplet.js.map