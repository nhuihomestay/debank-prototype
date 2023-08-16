"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureDatabaseClusterEvictionPolicy = void 0;
const configureDatabaseClusterEvictionPolicy = ({ httpClient, }) => ({ database_cluster_id, eviction_policy, }) => {
    const path = '/databases';
    const body = { eviction_policy };
    const url = `${path}/${database_cluster_id}/eviction_policy`;
    return httpClient.put(url, body);
};
exports.configureDatabaseClusterEvictionPolicy = configureDatabaseClusterEvictionPolicy;
//# sourceMappingURL=configure-database-cluster-eviction-policy.js.map