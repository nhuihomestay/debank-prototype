"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVolume = void 0;
const deleteVolume = ({ httpClient, }) => ({ volume_id, }) => {
    const path = '/volumes';
    const url = `${path}/${volume_id}`;
    return httpClient.delete(url);
};
exports.deleteVolume = deleteVolume;
//# sourceMappingURL=delete-volume.js.map