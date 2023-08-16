"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKubernetesClusterCredentials = void 0;
const getKubernetesClusterCredentials = ({ httpClient, }) => ({ kubernetes_cluster_id, expiration_in_seconds, }) => {
    const path = '/kubernetes/clusters';
    const query_params = { expiry_seconds: expiration_in_seconds };
    const url = `${path}/${kubernetes_cluster_id}/credentials`;
    return httpClient.get(url, { params: query_params });
};
exports.getKubernetesClusterCredentials = getKubernetesClusterCredentials;
//# sourceMappingURL=get-kubernetes-cluster-credentials.js.map