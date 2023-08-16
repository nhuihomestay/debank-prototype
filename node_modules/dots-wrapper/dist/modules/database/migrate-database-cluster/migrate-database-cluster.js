"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateDatabaseCluster = void 0;
const migrateDatabaseCluster = ({ httpClient, }) => ({ database_cluster_id, region, }) => {
    const path = '/databases';
    const body = { region };
    const url = `${path}/${database_cluster_id}/migrate`;
    return httpClient.put(url, body);
};
exports.migrateDatabaseCluster = migrateDatabaseCluster;
//# sourceMappingURL=migrate-database-cluster.js.map