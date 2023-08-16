"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNodePool = void 0;
const createNodePool = ({ httpClient, }) => ({ auto_scale, count, kubernetes_cluster_id, labels, max_nodes, min_nodes, name, size, tags, taints, }) => {
    const path = '/kubernetes/clusters';
    const body = {
        auto_scale,
        count,
        labels,
        max_nodes,
        min_nodes,
        name,
        size,
        tags,
        taints,
    };
    const url = `${path}/${kubernetes_cluster_id}/node_pools`;
    return httpClient.post(url, body);
};
exports.createNodePool = createNodePool;
//# sourceMappingURL=create-node-pool.js.map