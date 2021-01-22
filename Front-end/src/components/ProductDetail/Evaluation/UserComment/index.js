import { Avatar, Button, Comment, Rate } from 'antd';
import constants from 'constants/index';
import helpers from 'helpers';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function UserComment(props) {
  const { comment } = props;
  const { author, time, rate, content, nLike, replies } = comment;
  const { name, avt } = author;
  const isReduceCmt = content.length >= 200 ? true : false;
  const [isMore, setIsMore] = useState(false);
  const [loginRedirect, setLoginRedirect] = useState(false);
  // rendering ...
  return (
    <>
      {/* đăng nhập để nhận xét */}
      {loginRedirect && <Redirect to="/login" />}

      {/* Comment */}
      <Comment
        author={<b className="font-size-14px">{name}</b>}
        avatar={
          <Avatar
            src={avt !== '' ? avt : constants.DEFAULT_USER_AVT}
            alt={name}
          />
        }
        content={
          <>
            {rate !== -1 && (
              <>
                <Rate
                  defaultValue={rate + 1}
                  disabled
                  style={{ fontSize: 14 }}
                />
                <h3>{helpers.convertRateToText(rate)}</h3>
              </>
            )}

            <p className="t-justify">
              {isMore ? content : content.slice(0, 200)}
              {isReduceCmt && (
                <Button type="link" onClick={() => setIsMore(!isMore)}>
                  {isMore ? 'Thu gọn' : 'Xem thêm'}
                </Button>
              )}
            </p>
          </>
        }
        datetime={<span>{helpers.formatDate(time)}</span>}
      />
    </>
  );
}

UserComment.propTypes = {
  comment: PropTypes.object,
};

export default UserComment;
