"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageAction = void 0;
const getImageAction = ({ httpClient, }) => ({ image_id, action_id, }) => {
    const path = '/images';
    const url = `${path}/${image_id}/actions/${action_id}`;
    return httpClient.get(url);
};
exports.getImageAction = getImageAction;
//# sourceMappingURL=get-image-action.js.map