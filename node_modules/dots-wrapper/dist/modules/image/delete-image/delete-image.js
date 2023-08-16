"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteImage = void 0;
const deleteImage = ({ httpClient, }) => ({ image_id, }) => {
    const path = '/images';
    const url = `${path}/${image_id}`;
    return httpClient.delete(url);
};
exports.deleteImage = deleteImage;
//# sourceMappingURL=delete-image.js.map