"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeTagsFromFirewall = void 0;
const removeTagsFromFirewall = ({ httpClient, }) => ({ firewall_id, tags, }) => {
    const path = '/firewalls';
    const body = { tags };
    const url = `${path}/${firewall_id}/tags`;
    return httpClient.delete(url, { data: body });
};
exports.removeTagsFromFirewall = removeTagsFromFirewall;
//# sourceMappingURL=remove-tags-from-firewall.js.map