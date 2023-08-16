"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableDropletIpv6 = void 0;
const enableDropletIpv6 = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'enable_ipv6';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.enableDropletIpv6 = enableDropletIpv6;
//# sourceMappingURL=enable-droplet-ipv6.js.map