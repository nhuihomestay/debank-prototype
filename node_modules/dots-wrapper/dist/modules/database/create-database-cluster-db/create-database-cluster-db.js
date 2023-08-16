"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDatabaseClusterDb = void 0;
const createDatabaseClusterDb = ({ httpClient, }) => ({ database_cluster_id, db_name, }) => {
    const path = '/databases';
    const body = { name: db_name };
    const url = `${path}/${database_cluster_id}/dbs`;
    return httpClient.post(url, body);
};
exports.createDatabaseClusterDb = createDatabaseClusterDb;
//# sourceMappingURL=create-database-cluster-db.js.map