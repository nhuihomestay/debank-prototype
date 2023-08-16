"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVolumeByName = void 0;
const deleteVolumeByName = ({ httpClient, }) => ({ region, volume_name, }) => {
    const path = '/volumes';
    const query_params = { name: volume_name, region };
    const url = `${path}`;
    return httpClient.delete(url, { params: query_params });
};
exports.deleteVolumeByName = deleteVolumeByName;
//# sourceMappingURL=delete-volume-by-name.js.map