"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFloatingIp = void 0;
const deleteFloatingIp = ({ httpClient, }) => ({ ip, }) => {
    const path = '/floating_ips';
    const url = `${path}/${ip}`;
    return httpClient.delete(url);
};
exports.deleteFloatingIp = deleteFloatingIp;
//# sourceMappingURL=delete-floating-ip.js.map