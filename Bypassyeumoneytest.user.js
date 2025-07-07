// ==UserScript==
// @name         Yeumoney Custom Style
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Applies custom styles to Yeumoney.com
// @author       YourName (Thay thế bằng tên của bạn nếu muốn)
// @match        https://yeumoney.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    // Thêm CSS để thay đổi màu nền của body thành màu đen
    // Bạn có thể tùy chỉnh màu sắc và các thuộc tính khác tại đây
    GM_addStyle(`
        body {
            background-color: #000 !important; /* Nền đen */
            color: #fff; /* Màu chữ trắng để dễ đọc trên nền đen */
        }
        /* Nếu có các phần tử khác cần điều chỉnh màu chữ hoặc nền để phù hợp với nền đen,
           bạn có thể thêm quy tắc CSS vào đây. Ví dụ: */
        .container, .card, .panel {
            background-color: #1a1a1a !important; /* Một màu xám đậm cho các khối nội dung */
            color: #eee;
        }
        /* Để loại bỏ dòng chữ "By Hoàng Sơn v.1..." nếu nó là một phần tử cụ thể,
           bạn cần biết ID hoặc class của nó. Ví dụ:
           #hoangson-signature {
               display: none !important;
           }
           Hoặc nếu nó là một văn bản đơn giản trong một phần tử nào đó, việc loại bỏ nó
           sẽ phức tạp hơn và có thể cần đến JavaScript để thao tác DOM.
           Tuy nhiên, vì script này không có logic bypass, nó sẽ không thêm dòng đó.
        */
    `);

    console.log('Yeumoney Custom Style script loaded: Background changed to black.');

    // Logic để loại bỏ dòng chữ "By Hoàng Sơn v.1..." nếu nó được thêm bởi script gốc
    // (Lưu ý: Phần này chỉ là ví dụ và có thể không hoạt động nếu phần tử đó
    // được tạo ra động hoặc có ID/Class khác trong script gốc bị làm rối)
    document.addEventListener('DOMContentLoaded', () => {
        // Cố gắng tìm và ẩn bất kỳ phần tử nào có thể chứa chữ ký
        // Bạn cần kiểm tra mã nguồn HTML của trang yeumoney.com để tìm ID/class chính xác
        const signatureElement = document.querySelector('#hoangson-signature, .author-signature');
        if (signatureElement) {
            signatureElement.style.display = 'none';
            console.log('Attempted to hide signature element.');
        }
    });

})();

