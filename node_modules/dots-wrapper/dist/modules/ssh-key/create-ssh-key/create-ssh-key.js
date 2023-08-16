"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSshKey = void 0;
const createSshKey = ({ httpClient, }) => ({ name, public_key, }) => {
    const path = '/account/keys';
    const body = {
        name,
        public_key,
    };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createSshKey = createSshKey;
//# sourceMappingURL=create-ssh-key.js.map