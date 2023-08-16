"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detachVolumeFromDroplet = void 0;
const detachVolumeFromDroplet = ({ httpClient, }) => ({ droplet_id, region, volume_id, }) => {
    const path = '/volumes';
    const type = 'detach';
    const body = { droplet_id, region, type };
    const url = `${path}/${volume_id}/actions`;
    return httpClient.post(url, body);
};
exports.detachVolumeFromDroplet = detachVolumeFromDroplet;
//# sourceMappingURL=detach-volume-from-droplet.js.map