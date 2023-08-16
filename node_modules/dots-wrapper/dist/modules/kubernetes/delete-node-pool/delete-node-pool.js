"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteNodePool = void 0;
const deleteNodePool = ({ httpClient, }) => ({ kubernetes_cluster_id, node_pool_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;
    return httpClient.delete(url);
};
exports.deleteNodePool = deleteNodePool;
//# sourceMappingURL=delete-node-pool.js.map