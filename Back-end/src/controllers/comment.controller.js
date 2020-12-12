const CommentModel = require('../models/comment.model');
const ProductModel = require('../models/product.models/product.model');

// api: Lấy danh sách comment của 1 sản phẩm
const getCommentList = async (req, res, next) => {
  try {
    const { id } = req.query;
    const data = await CommentModel.find({ productId: id }).select(
      '-productId -_id',
    );
    if (data) return res.status(200).json(data);
  } catch (error) {
    return res.status(409).json({ message: error });
  }
};

// api: Thêm 1 comment
const postComment = async (req, res, next) => {
  try {
    const data = req.body;
    // Nếu có rate thì cập nhật lại rate trong product
    if (data.hasOwnProperty('rate')) {
      const { productId, rate } = data;
      const product = await ProductModel.findById(productId);
      if (product) {
        let oldRate = product.rate;
        oldRate[rate]++;
        await ProductModel.updateOne(
          { _id: productId },
          { rate: [...oldRate] },
        );
      }
    }
    const response = await CommentModel.create(data);
    if (response) return res.status(200).send('success');
  } catch (error) {
    return res.status(400).send('success');
  }
};

module.exports = {
  getCommentList,
  postComment,
};
