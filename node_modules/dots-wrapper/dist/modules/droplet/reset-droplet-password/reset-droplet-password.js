"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetDropletPassword = void 0;
const resetDropletPassword = ({ httpClient, }) => ({ droplet_id, }) => {
    const path = '/droplets';
    const type = 'password_reset';
    const body = { type };
    const url = `${path}/${droplet_id}/actions`;
    return httpClient.post(url, body);
};
exports.resetDropletPassword = resetDropletPassword;
//# sourceMappingURL=reset-droplet-password.js.map