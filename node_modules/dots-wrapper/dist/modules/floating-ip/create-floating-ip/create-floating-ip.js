"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFloatingIp = void 0;
const createFloatingIp = ({ httpClient, }) => (body) => {
    const path = '/floating_ips';
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createFloatingIp = createFloatingIp;
//# sourceMappingURL=create-floating-ip.js.map