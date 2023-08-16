"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeDropletKernel = void 0;
const changeDropletKernel = ({ httpClient, }) => ({ droplet_id, kernel, }) => {
    const path = '/droplets';
    const type = 'change_kernel';
    const body = { kernel, type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.changeDropletKernel = changeDropletKernel;
//# sourceMappingURL=change-droplet-kernel.js.map