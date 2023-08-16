"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseClusterFirewallRules = void 0;
const listDatabaseClusterFirewallRules = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const query_params = { page, per_page };
    const url = `${path}/${database_cluster_id}/firewall`;
    return httpClient.get(url, { params: query_params });
};
exports.listDatabaseClusterFirewallRules = listDatabaseClusterFirewallRules;
//# sourceMappingURL=list-database-cluster-firewall-rules.js.map