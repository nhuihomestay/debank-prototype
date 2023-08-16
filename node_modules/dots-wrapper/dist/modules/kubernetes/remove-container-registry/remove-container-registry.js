"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeContainerRegistry = void 0;
const removeContainerRegistry = ({ httpClient, }) => ({ cluster_uuids, }) => {
    const path = '/kubernetes/clusters/registry';
    const body = { cluster_uuids };
    const url = `${path}`;
    return httpClient.delete(url, { data: body });
};
exports.removeContainerRegistry = removeContainerRegistry;
//# sourceMappingURL=remove-container-registry.js.map