"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConnectionPool = void 0;
const createConnectionPool = ({ httpClient, }) => ({ database_cluster_id, db_name, mode, pool_name, size, user_name, }) => {
    const path = '/databases';
    const body = {
        db: db_name,
        mode,
        name: pool_name,
        size,
        user: user_name,
    };
    const url = `${path}/${database_cluster_id}/pools`;
    return httpClient.post(url, body);
};
exports.createConnectionPool = createConnectionPool;
//# sourceMappingURL=create-connection-pool.js.map