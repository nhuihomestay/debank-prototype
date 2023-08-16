"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRulesFromFirewall = void 0;
const removeRulesFromFirewall = ({ httpClient, }) => ({ firewall_id, inbound_rules, outbound_rules, }) => {
    const path = '/firewalls';
    const body = { inbound_rules, outbound_rules };
    const url = `${path}/${firewall_id}/rules`;
    return httpClient.delete(url, { data: body });
};
exports.removeRulesFromFirewall = removeRulesFromFirewall;
//# sourceMappingURL=remove-rules-from-firewall.js.map