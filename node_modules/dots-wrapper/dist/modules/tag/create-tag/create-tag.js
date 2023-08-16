"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTag = void 0;
const createTag = ({ httpClient, }) => ({ name, }) => {
    const path = '/tags';
    const body = { name };
    const url = `${path}`;
    return httpClient.post(url, body);
};
exports.createTag = createTag;
//# sourceMappingURL=create-tag.js.map