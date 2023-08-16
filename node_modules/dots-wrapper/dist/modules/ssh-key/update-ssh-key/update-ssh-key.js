"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSshKey = void 0;
const updateSshKey = ({ httpClient, }) => ({ name, ssh_key_id, }) => {
    const path = '/account/keys';
    const body = {
        name,
    };
    const url = `${path}/${ssh_key_id}`;
    return httpClient.put(url, body);
};
exports.updateSshKey = updateSshKey;
//# sourceMappingURL=update-ssh-key.js.map