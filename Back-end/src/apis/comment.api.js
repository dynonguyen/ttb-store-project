const commentApi = require('express').Router();
const commentController = require('../controllers/comment.controller');

// api: Lấy danh sách comment của 1 sản phẩm
commentApi.get('/', commentController.getCommentList);

// api: Thêm 1 comment
commentApi.post('/', commentController.postComment);

module.exports = commentApi;
