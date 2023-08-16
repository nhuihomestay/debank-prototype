"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDatabaseClusterFirewallRules = void 0;
const updateDatabaseClusterFirewallRules = ({ httpClient, }) => ({ database_cluster_id, rules, }) => {
    const path = '/databases';
    const body = { rules };
    const url = `${path}/${database_cluster_id}/firewall`;
    return httpClient.put(url, body);
};
exports.updateDatabaseClusterFirewallRules = updateDatabaseClusterFirewallRules;
//# sourceMappingURL=update-database-cluster-firewall-rules.js.map