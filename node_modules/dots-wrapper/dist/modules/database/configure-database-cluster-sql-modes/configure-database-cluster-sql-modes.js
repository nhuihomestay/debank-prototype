"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureDatabaseClusterSqlModes = void 0;
const configureDatabaseClusterSqlModes = ({ httpClient, }) => ({ database_cluster_id, sql_mode, }) => {
    const path = '/databases';
    const body = { sql_mode };
    const url = `${path}/${database_cluster_id}/sql_mode`;
    return httpClient.put(url, body);
};
exports.configureDatabaseClusterSqlModes = configureDatabaseClusterSqlModes;
//# sourceMappingURL=configure-database-cluster-sql-modes.js.map