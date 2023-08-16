"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKubernetesClusterKubeconfig = void 0;
const getKubernetesClusterKubeconfig = ({ httpClient, }) => ({ kubernetes_cluster_id, expiration_in_seconds, }) => {
    const path = '/kubernetes/clusters';
    const query_params = { expiry_seconds: expiration_in_seconds };
    const url = `${path}/${kubernetes_cluster_id}/kubeconfig`;
    return httpClient.get(url, { params: query_params });
};
exports.getKubernetesClusterKubeconfig = getKubernetesClusterKubeconfig;
//# sourceMappingURL=get-kubernetes-cluster-kubeconfig.js.map