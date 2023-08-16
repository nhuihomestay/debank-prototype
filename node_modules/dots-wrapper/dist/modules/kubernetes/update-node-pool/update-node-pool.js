"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNodePool = void 0;
const updateNodePool = ({ httpClient, }) => ({ auto_scale, count, kubernetes_cluster_id, labels, max_nodes, min_nodes, name, node_pool_id, tags, taints, }) => {
    const path = '/kubernetes/clusters';
    const body = {
        auto_scale,
        count,
        labels,
        max_nodes,
        min_nodes,
        name,
        tags,
        taints,
    };
    const url = `${path}/${kubernetes_cluster_id}/node_pools/${node_pool_id}`;
    return httpClient.put(url, body);
};
exports.updateNodePool = updateNodePool;
//# sourceMappingURL=update-node-pool.js.map