"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVolumeSnapshot = void 0;
const createVolumeSnapshot = ({ httpClient, }) => ({ name, tags, volume_id, }) => {
    const path = '/volumes';
    const body = { name, tags };
    const url = `${path}/${volume_id}/snapshots`;
    return httpClient.post(url, body);
};
exports.createVolumeSnapshot = createVolumeSnapshot;
//# sourceMappingURL=create-volume-snapshot.js.map