"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resizeVolume = void 0;
const resizeVolume = ({ httpClient, }) => ({ region, size_gigabytes, volume_id, }) => {
    const path = '/volumes';
    const type = 'resize';
    const body = { region, size_gigabytes, type };
    const url = `${path}/${volume_id}/actions`;
    return httpClient.post(url, body);
};
exports.resizeVolume = resizeVolume;
//# sourceMappingURL=resize-volume.js.map