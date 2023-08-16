"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSshKey = void 0;
const getSshKey = ({ httpClient, }) => ({ ssh_key_id, }) => {
    const path = '/account/keys';
    const url = `${path}/${ssh_key_id}`;
    return httpClient.get(url);
};
exports.getSshKey = getSshKey;
//# sourceMappingURL=get-ssh-key.js.map