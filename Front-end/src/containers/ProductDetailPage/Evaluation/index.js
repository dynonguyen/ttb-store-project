import commentApi from 'apis/commentApi';
import EvaluationView from 'components/ProductDetail/Evaluation';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

function Evaluation(props) {
  const { productId, rates } = props;
  const [cmtList, setCmtList] = useState([]);

  useEffect(() => {
    let isSubscribe = true;
    async function getCommentList() {
      try {
        const response = await commentApi.getCommentList(productId);
        if (response && isSubscribe) {
          setCmtList(response.data);
        }
      } catch (error) {}
    }
    getCommentList();

    return () => (isSubscribe = false);
  }, [props]);

  // rendering...
  return (
    <EvaluationView productId={productId} rates={rates} cmtList={cmtList} />
  );
}

Evaluation.defaultProps = {};
Evaluation.propTypes = {
  productId: PropTypes.string,
  rates: PropTypes.array || PropTypes.object,
};

export default Evaluation;
