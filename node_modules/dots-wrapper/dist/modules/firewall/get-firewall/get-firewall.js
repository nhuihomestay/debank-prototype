"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFirewall = void 0;
const getFirewall = ({ httpClient, }) => ({ firewall_id, }) => {
    const path = '/firewalls';
    const url = `${path}/${firewall_id}`;
    return httpClient.get(url);
};
exports.getFirewall = getFirewall;
//# sourceMappingURL=get-firewall.js.map