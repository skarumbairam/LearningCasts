import { useEffect, useRef, useState } from "react";

const objData = [
  {
    text: "Comment Text 1",
    id: 1,
    replies: [],
  },
  {
    text: "Comment Text 2",
    id: 2,
    replies: [
      { text: "Comment Text 2-1", id: 3, replies: [] },
      { text: "Comment Text 2-2", id: 4, replies: [] },
    ],
  },
];

const NestedCommentsComponent = () => {
  return (
    <div>
      <Comments comments={objData} />
    </div>
  );
};

export default NestedComments;
