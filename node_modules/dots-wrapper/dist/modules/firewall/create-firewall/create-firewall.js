"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFirewall = void 0;
const createFirewall = ({ httpClient, }) => ({ droplet_ids, inbound_rules, name, outbound_rules, tags, }) => {
    const path = '/firewalls';
    const body = {
        droplet_ids,
        inbound_rules,
        name,
        outbound_rules,
        tags,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createFirewall = createFirewall;
//# sourceMappingURL=create-firewall.js.map