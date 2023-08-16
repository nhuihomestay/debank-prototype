"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagResources = void 0;
const tagResources = ({ httpClient, }) => ({ tag_name, resources, }) => {
    const path = '/tags';
    const body = { resources };
    const url = `${path}/${tag_name}/resources`;
    return httpClient.post(url, body);
};
exports.tagResources = tagResources;
//# sourceMappingURL=tag-resources.js.map