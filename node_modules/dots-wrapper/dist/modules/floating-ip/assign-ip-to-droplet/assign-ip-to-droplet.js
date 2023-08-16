"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignIpToDroplet = void 0;
const assignIpToDroplet = ({ httpClient, }) => ({ droplet_id, ip, }) => {
    const path = '/floating_ips';
    const type = 'assign';
    const body = { droplet_id, type };
    const url = `${path}/${ip}/actions`;
    return httpClient.post(url, body);
};
exports.assignIpToDroplet = assignIpToDroplet;
//# sourceMappingURL=assign-ip-to-droplet.js.map