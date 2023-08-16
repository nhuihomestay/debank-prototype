"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableDropletPrivateNetworking = void 0;
const enableDropletPrivateNetworking = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'enable_private_networking';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.enableDropletPrivateNetworking = enableDropletPrivateNetworking;
//# sourceMappingURL=enable-droplet-private-networking.js.map