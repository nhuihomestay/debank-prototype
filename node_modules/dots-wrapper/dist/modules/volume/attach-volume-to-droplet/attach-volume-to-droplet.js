"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachVolumeToDroplet = void 0;
const attachVolumeToDroplet = ({ httpClient, }) => ({ droplet_id, region, volume_id, }) => {
    const path = '/volumes';
    const type = 'attach';
    const body = { droplet_id, region, type };
    const url = `${path}/${volume_id}/actions`;
    return httpClient.post(url, body);
};
exports.attachVolumeToDroplet = attachVolumeToDroplet;
//# sourceMappingURL=attach-volume-to-droplet.js.map