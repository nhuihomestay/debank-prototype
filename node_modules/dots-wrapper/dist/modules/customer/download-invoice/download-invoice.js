"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadInvoice = void 0;
const downloadInvoice = ({ httpClient, }) => ({ invoice_uuid, format, }) => {
    const path = '/customers/my/invoices';
    const url = `${path}/${invoice_uuid}/${format}`;
    return httpClient.get(url, {
        responseType: 'stream',
    });
};
exports.downloadInvoice = downloadInvoice;
//# sourceMappingURL=download-invoice.js.map