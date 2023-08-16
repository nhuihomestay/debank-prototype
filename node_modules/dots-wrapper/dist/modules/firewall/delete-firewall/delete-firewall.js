"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFirewall = void 0;
const deleteFirewall = ({ httpClient, }) => ({ firewall_id, }) => {
    const path = '/firewalls';
    const url = `${path}/${firewall_id}`;
    return httpClient.delete(url);
};
exports.deleteFirewall = deleteFirewall;
//# sourceMappingURL=delete-firewall.js.map