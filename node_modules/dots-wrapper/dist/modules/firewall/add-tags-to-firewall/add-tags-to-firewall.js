"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTagsToFirewall = void 0;
const addTagsToFirewall = ({ httpClient, }) => ({ firewall_id, tags, }) => {
    const path = '/firewalls';
    const body = { tags };
    const url = `${path}/${firewall_id}/tags`;
    return httpClient.post(url, body);
};
exports.addTagsToFirewall = addTagsToFirewall;
//# sourceMappingURL=add-tags-to-firewall.js.map