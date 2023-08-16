"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upgradeKubernetesCluster = void 0;
const upgradeKubernetesCluster = ({ httpClient, }) => ({ kubernetes_cluster_id, version, }) => {
    const path = '/kubernetes/clusters';
    const body = { version };
    const url = `${path}/${kubernetes_cluster_id}/upgrade`;
    return httpClient.post(url, body);
};
exports.upgradeKubernetesCluster = upgradeKubernetesCluster;
//# sourceMappingURL=upgrade-kubernetes-cluster.js.map