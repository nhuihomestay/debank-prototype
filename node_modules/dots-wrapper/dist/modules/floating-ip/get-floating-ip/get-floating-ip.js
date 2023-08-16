"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFloatingIp = void 0;
const getFloatingIp = ({ httpClient, }) => ({ ip, }) => {
    const path = '/floating_ips';
    const url = `${path}/${ip}`;
    return httpClient.get(url);
};
exports.getFloatingIp = getFloatingIp;
//# sourceMappingURL=get-floating-ip.js.map