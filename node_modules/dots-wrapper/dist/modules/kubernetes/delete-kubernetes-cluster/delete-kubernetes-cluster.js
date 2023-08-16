"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteKubernetesCluster = void 0;
const deleteKubernetesCluster = ({ httpClient, }) => ({ kubernetes_cluster_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}`;
    return httpClient.delete(url);
};
exports.deleteKubernetesCluster = deleteKubernetesCluster;
//# sourceMappingURL=delete-kubernetes-cluster.js.map