import React from "react";

function CommentDetail({
  comment,
}: {
  comment: { name: string; commentText: string };
}) {
  return (
    <div className="flex flex-row flex-wrap items-start rounded-[20px] border border-[#0000001a]  p-4 h-[240px]">
      <div className="flex flex-row justify-between items-start p-2">
        <div className="flex flex-col items-start space-y-3">
          {" "}
          <div className="flex space-x-2">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
                fill="#F9940A"
              />
            </svg>
          </div>
          <div className="flex flex-col items-start space-y-2">
            <div className="flex items-center space-x-1">
              <span className="font-bold text-[20px]">{comment.name}</span>
              <img src="assests/tick.png" alt="" />
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
