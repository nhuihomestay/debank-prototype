"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateKubernetesCluster = void 0;
const updateKubernetesCluster = ({ httpClient, }) => ({ auto_upgrade, kubernetes_cluster_id, maintenance_policy, name, tags, }) => {
    const path = '/kubernetes/clusters';
    const body = {
        auto_upgrade,
        maintenance_policy,
        name,
        tags,
    };
    const url = `${path}/${kubernetes_cluster_id}`;
    return httpClient.put(url, body);
};
exports.updateKubernetesCluster = updateKubernetesCluster;
//# sourceMappingURL=update-kubernetes-cluster.js.map