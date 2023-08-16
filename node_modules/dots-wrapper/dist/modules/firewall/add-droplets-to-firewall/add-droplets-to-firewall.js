"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDropletsToFirewall = void 0;
const addDropletsToFirewall = ({ httpClient, }) => ({ droplet_ids, firewall_id, }) => {
    const path = '/firewalls';
    const body = {
        droplet_ids,
    };
    const url = `${path}/${firewall_id}/droplets`;
    return httpClient.post(url, body);
};
exports.addDropletsToFirewall = addDropletsToFirewall;
//# sourceMappingURL=add-droplets-to-firewall.js.map