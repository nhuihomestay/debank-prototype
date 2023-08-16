"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKubernetesCluster = void 0;
const getKubernetesCluster = ({ httpClient, }) => ({ kubernetes_cluster_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}`;
    return httpClient.get(url);
};
exports.getKubernetesCluster = getKubernetesCluster;
//# sourceMappingURL=get-kubernetes-cluster.js.map