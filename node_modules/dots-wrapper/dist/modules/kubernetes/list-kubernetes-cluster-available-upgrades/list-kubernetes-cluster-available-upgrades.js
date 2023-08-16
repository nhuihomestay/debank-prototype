"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listKubernetesClusterAvailableUpgrades = void 0;
const listKubernetesClusterAvailableUpgrades = ({ httpClient, }) => ({ kubernetes_cluster_id, }) => {
    const path = '/kubernetes/clusters';
    const url = `${path}/${kubernetes_cluster_id}/upgrades`;
    return httpClient.get(url);
};
exports.listKubernetesClusterAvailableUpgrades = listKubernetesClusterAvailableUpgrades;
//# sourceMappingURL=list-kubernetes-cluster-available-upgrades.js.map