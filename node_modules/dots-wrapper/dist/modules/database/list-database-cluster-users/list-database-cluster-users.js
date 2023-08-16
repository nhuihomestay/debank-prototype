"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listDatabaseClusterUsers = void 0;
const listDatabaseClusterUsers = ({ httpClient, }) => ({ page = 1, per_page = 25, database_cluster_id, }) => {
    const path = '/databases';
    const query_params = { page, per_page };
    const url = `${path}/${database_cluster_id}/users`;
    return httpClient.get(url, { params: query_params });
};
exports.listDatabaseClusterUsers = listDatabaseClusterUsers;
//# sourceMappingURL=list-database-cluster-users.js.map