"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateFirewall = void 0;
const updateFirewall = ({ httpClient, }) => ({ droplet_ids, id, inbound_rules, name, outbound_rules, tags, }) => {
    const path = '/firewalls';
    const body = {
        droplet_ids,
        inbound_rules,
        name,
        outbound_rules,
        tags,
    };
    const url = `${path}/${id}`;
    return httpClient.put(url, body);
};
exports.updateFirewall = updateFirewall;
//# sourceMappingURL=update-firewall.js.map