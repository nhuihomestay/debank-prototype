"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runClusterlintOnKubernetesCluster = void 0;
const runClusterlintOnKubernetesCluster = ({ httpClient, }) => ({ kubernetes_cluster_id, include_groups, include_checks, exclude_groups, exclude_checks, }) => {
    const path = '/kubernetes/clusters';
    const body = {
        include_groups,
        include_checks,
        exclude_groups,
        exclude_checks,
    };
    const url = `${path}/${kubernetes_cluster_id}/clusterlint`;
    return httpClient.post(url, body);
};
exports.runClusterlintOnKubernetesCluster = runClusterlintOnKubernetesCluster;
//# sourceMappingURL=run-clusterlint-on-kubernetes-cluster.js.map