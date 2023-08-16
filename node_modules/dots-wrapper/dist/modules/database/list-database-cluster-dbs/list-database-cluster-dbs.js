"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseClusterDbs = void 0;
const listDatabaseClusterDbs = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const query_params = { page, per_page };
    const url = `${path}/${database_cluster_id}/dbs`;
    return httpClient.get(url, { params: query_params });
};
exports.listDatabaseClusterDbs = listDatabaseClusterDbs;
//# sourceMappingURL=list-database-cluster-dbs.js.map