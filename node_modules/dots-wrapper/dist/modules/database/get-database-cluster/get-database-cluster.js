"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabaseCluster = void 0;
const getDatabaseCluster = ({ httpClient, }) => ({ database_cluster_id, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}`;
    return httpClient.get(url);
};
exports.getDatabaseCluster = getDatabaseCluster;
//# sourceMappingURL=get-database-cluster.js.map