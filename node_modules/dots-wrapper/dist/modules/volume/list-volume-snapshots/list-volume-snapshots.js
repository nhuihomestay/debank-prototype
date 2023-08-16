"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listVolumeSnapshots = void 0;
const listVolumeSnapshots = ({ httpClient, }) => ({ page = 1, per_page = 25, volume_id, }) => {
    const path = '/volumes';
    const query_params = { page, per_page };
    const url = `${path}/${volume_id}/snapshots`;
    return httpClient.get(url, { params: query_params });
};
exports.listVolumeSnapshots = listVolumeSnapshots;
//# sourceMappingURL=list-volume-snapshots.js.map