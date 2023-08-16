"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTag = void 0;
const deleteTag = ({ httpClient, }) => ({ tag_name, }) => {
    const path = '/tags';
    const url = `${path}/${tag_name}`;
    return httpClient.delete(url);
};
exports.deleteTag = deleteTag;
//# sourceMappingURL=delete-tag.js.map