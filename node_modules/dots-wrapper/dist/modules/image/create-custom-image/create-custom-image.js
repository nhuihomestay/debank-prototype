"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomImage = void 0;
const createCustomImage = ({ httpClient, }) => ({ description, distribution, name, region, tags, url, }) => {
    const path = '/images';
    const _url = `${path}`;
    const body = {
        description,
        distribution,
        name,
        region,
        tags,
        url,
    };
    return httpClient.post(_url, body);
};
exports.createCustomImage = createCustomImage;
//# sourceMappingURL=create-custom-image.js.map