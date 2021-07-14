  <h1 align="center"><b>TTB STORE WEBSITE</b></h1>

- ## TTB Store là một website về cửa hàng thiết bị điện tử.
- ## Link demo: https://ttbstorevn.web.app/

- ## ✨ **Tính năng**

  - Show các sản phẩm nổi bật, chương trình khuyến mãi...
  - Tìm kiếm, lọc sản phẩm theo yêu cầu người dùng.
  - Hiển thị chi tiết sản phẩm và đề xuất các sản phẩm liên quan.
  - Cho phép người dùng thêm, bớt sản phẩm trong giỏ hàng.
  - So sánh 2 sản phẩm.
  - Đặt hàng (Thanh toán online với VNPay).
  - Đăng ký, đăng nhập.
  - Quản lý tài khoản người dùng, tính toán chương trình khuyến mãi.
  - Lưu lịch sử mua hàng, đề xuất sản phẩm liên quan.

- ## ⌨️ **Công nghệ sử dụng trong project**

  - ### **Back-end, Database**
    - NodeJS (ExpressJS).
    - MongoDB (mongooseJS).
    - Hosting: Heroku server
    - Cloud Server: Atlas MongoDB, Cloudinary.
    - API Documents: Swagger.
  - ### **Front-end**
    - SPA (Single Page Application) & CSR (Client Side Rendering) với ReactJS.
    - State Management Tool: Redux + Redux thunk.
    - Xây dựng UI với Ant Design, Css, Scss.
    - Build project với Webpack.
    - Restful API với Axios.
  - ### **Tool Team Work**
    - Git, Github.
    - Eslint, EditorConfig, Jsconfig.
    - Trello.
    - Slack.
    - IDE: Visual Studio Code.

- ## 📦 **Cài đặt node_module trước khi chạy**

  ```
  > cd Back-end -> yarn install
  > cd Front-end -> yarn install
  ```

- ## 🔨 **Run project**
  - Thay file .local.env bằng file .env và thay các giá trị trong file .env. Sau đó, chạy các lệnh sau:
  ```
    > cd front-end -> yarn build
    > cd back-end -> yarn start (node index.js)
    > browser: http://localhost:{ PORT | 3000 }
  ```
- ## 🌍 **Document API**
  `> browser: http://localhost:{PORT}/api-docs/`
- ## 🖥 **Môi trường hỗ trợ**

  - Modern browsers, Mobile Browser and Internet Explorer 11.

  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br> Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari |
  | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
