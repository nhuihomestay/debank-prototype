"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeDatabaseCluster = void 0;
const resizeDatabaseCluster = ({ httpClient, }) => ({ database_cluster_id, num_nodes, size, }) => {
    const path = '/databases';
    const body = {
        num_nodes,
        size,
    };
    const url = `${path}/${database_cluster_id}/resize`;
    return httpClient.put(url, body);
};
exports.resizeDatabaseCluster = resizeDatabaseCluster;
//# sourceMappingURL=resize-database-cluster.js.map