import React from "react";
import StarRating from "./StarRating";

type props = {
  comment: { name: string; commentText: string; star: number };
};

function CommentDetail({ comment }: props) {
  return (
    <div className="flex flex-row flex-wrap items-start rounded-[20px] border border-[#0000001a]  p-4 h-[240px]">
      <div className="flex flex-row justify-between items-start p-2">
        <div className="flex flex-col items-start space-y-3">
          {" "}
          <StarRating rating={comment.star} />
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-1">
              <span className="font-bold text-[20px]">{comment.name}</span>
              <img src="/assests/tick.png" alt="" />
            </div>
            <p className="text-[#00000099] font-normal text-[16px]">
              {comment.commentText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentDetail;
