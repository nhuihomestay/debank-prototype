"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteConnectionPool = void 0;
const deleteConnectionPool = ({ httpClient, }) => ({ database_cluster_id, pool_name, }) => {
    const path = '/databases';
    const url = `${path}/${database_cluster_id}/pools/${pool_name}`;
    return httpClient.delete(url);
};
exports.deleteConnectionPool = deleteConnectionPool;
//# sourceMappingURL=delete-connection-pool.js.map