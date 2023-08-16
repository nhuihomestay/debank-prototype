"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRulesToFirewall = void 0;
const addRulesToFirewall = ({ httpClient, }) => ({ firewall_id, inbound_rules, outbound_rules, }) => {
    const path = '/firewalls';
    const body = { inbound_rules, outbound_rules };
    const url = `${path}/${firewall_id}/rules`;
    return httpClient.post(url, body);
};
exports.addRulesToFirewall = addRulesToFirewall;
//# sourceMappingURL=add-rules-to-firewall.js.map