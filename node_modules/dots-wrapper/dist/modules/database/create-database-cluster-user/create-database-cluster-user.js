"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseClusterUser = void 0;
const createDatabaseClusterUser = ({ httpClient, }) => ({ database_cluster_id, mysql_settings, user_name, }) => {
    const path = '/databases';
    const body = { name: user_name, mysql_settings };
    const url = `${path}/${database_cluster_id}/users`;
    return httpClient.post(url, body);
};
exports.createDatabaseClusterUser = createDatabaseClusterUser;
//# sourceMappingURL=create-database-cluster-user.js.map