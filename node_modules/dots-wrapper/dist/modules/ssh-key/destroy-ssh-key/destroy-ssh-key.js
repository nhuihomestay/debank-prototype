"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroySshKey = void 0;
const destroySshKey = ({ httpClient, }) => ({ ssh_key_id, }) => {
    const path = '/account/keys';
    const url = `${path}/${ssh_key_id}`;
    return httpClient.delete(url);
};
exports.destroySshKey = destroySshKey;
//# sourceMappingURL=destroy-ssh-key.js.map