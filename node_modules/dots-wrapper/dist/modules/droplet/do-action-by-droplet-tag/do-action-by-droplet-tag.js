"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doActionByDropletTag = void 0;
const doActionByDropletTag = ({ httpClient, }) => ({ tag_name, type, }) => {
    const path = '/droplets/actions';
    const query_params = { tag_name };
    const body = { type };
    const url = `${path}`;
    return httpClient.post(url, body, {
        params: query_params,
    });
};
exports.doActionByDropletTag = doActionByDropletTag;
//# sourceMappingURL=do-action-by-droplet-tag.js.map