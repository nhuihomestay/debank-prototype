"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRegistry = void 0;
const deleteRegistry = ({ httpClient, }) => () => {
    const path = '/registry';
    const url = `${path}`;
    return httpClient.delete(url);
};
exports.deleteRegistry = deleteRegistry;
//# sourceMappingURL=delete-registry.js.map