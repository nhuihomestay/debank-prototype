"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDropletsFromFirewall = void 0;
const removeDropletsFromFirewall = ({ httpClient, }) => ({ droplet_ids, firewall_id, }) => {
    const path = '/firewalls';
    const body = {
        droplet_ids,
    };
    const url = `${path}/${firewall_id}/droplets`;
    return httpClient.delete(url, { data: body });
};
exports.removeDropletsFromFirewall = removeDropletsFromFirewall;
//# sourceMappingURL=remove-droplets-from-firewall.js.map