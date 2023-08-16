"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listVolumeActions = void 0;
const listVolumeActions = ({ httpClient, }) => ({ page = 1, per_page = 25, volume_id, }) => {
    const path = '/volumes';
    const query_params = { page, per_page };
    const url = `${path}/${volume_id}/actions`;
    return httpClient.get(url, { params: query_params });
};
exports.listVolumeActions = listVolumeActions;
//# sourceMappingURL=list-volume-actions.js.map