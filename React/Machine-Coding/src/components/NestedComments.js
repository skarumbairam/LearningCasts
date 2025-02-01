import { useState } from "react";

const updateReply = (obj, targetId, message) => {
  const commentsCopy = JSON.parse(JSON.stringify(obj));
  for (let el of commentsCopy) {
    if (el.id === targetId) {
      const tempObj = {
        id: Date.now(),
        message: message,
        replies: [],
      };
      el.replies.unshift(tempObj);
    }

    if (el.replies.length > 0) {
      el.replies = updateReply(el.replies, targetId, message);
    }
  }
  return commentsCopy;
};

const deleteComment = (tree, targetId) => {
  let commentsCopy = JSON.parse(JSON.stringify(tree));
  for (let i = 0; i < commentsCopy.length; i++) {
    if (commentsCopy[i].id === targetId) {
      commentsCopy.splice(i, 1);
    }

    if (commentsCopy[i]?.replies?.length > 0) {
      commentsCopy[i].replies = deleteComment(
        commentsCopy[i].replies,
        targetId
      );
    }
  }
  console.log(commentsCopy);
  return commentsCopy;
};

const deletePost = (obj, targetId) => {
  const posts = JSON.parse(JSON.stringify(obj));
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === targetId) {
      posts.splice(i, 1);
    }

    if (posts[i]?.replies?.length > 0) {
      posts[i].replies = deletePost(posts[i].replies, targetId);
    }
  }
  return posts;
};

const replyNewPost = (obj, targetId, message) => {
  const dataClone = JSON.parse(JSON.stringify(obj));

  for (let i = 0; i < dataClone.length; i++) {
    if (dataClone[i].id === targetId) {
      const tempObj = {
        id: Date.now(),
        message: message,
        replies: [],
      };
      // Push element to first of array
      dataClone[i].replies.unshift(tempObj);
    }

    if (dataClone[i].replies.length > 0) {
      dataClone[i].replies = replyNewPost(
        dataClone[i].replies,
        targetId,
        message
      );
    }
  }

  return dataClone;
};

const NestedComments = () => {
  const staticData = [
    {
      id: 1,
      message: "test message 1",
      replies: [
        { id: "1-1", message: "test message 1-1", replies: [] },
        { id: "1-2", message: "test message 1-2", replies: [] },
      ],
    },
    { id: 2, message: "test message 2", replies: [] },
    { id: 3, message: "test message 3", replies: [] },
  ];
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");

  // Text Area onchange event
  const textAreaChangeHandler = (e) => {
    const temp = e.target.value;
    setMessage(temp);
  };

  // Submit post
  const postComment = () => {
    setMessage("");
    const tempDataObj = {
      id: Date.now(),
      message: message,
      replies: [],
    };
    const tempData = [];
    tempData.push(tempDataObj);

    setData([...tempData, ...data]);
  };

  // Delete Comments
  const deleteHandler = (id) => {
    const updatedData = deletePost(data, id);
    setData([...updatedData]);
  };

  const postReplyHandler = (id, msg) => {
    const postData = replyNewPost(data, id, msg);
    console.log("Id", id, msg);
    setData([...postData]);
  };

  return (
    <div>
      <h2 className="text-xl leading-10">6. Nested Comments</h2>
      <p>
        This is nested comments, user can post and delete, edit the posted
        comment
      </p>
      <div className="text-center border-red-400 border mt-4 p-4">
        <div className="flex mb-2">
          <textarea
            typeof="text"
            placeholder="User Post"
            className="border border-e-indigo-200 p-4 w-50"
            rows="2"
            cols="75"
            value={message}
            onChange={(e) => textAreaChangeHandler(e)}
          />
          <button
            className="btn p-2 m-2 bg-slate-200 border-r-4"
            onClick={postComment}
          >
            Post Comment
          </button>
        </div>
        <div className="mt-2">
          <Comments
            data={data}
            deleteHandler={deleteHandler}
            postReplyHandler={postReplyHandler}
          />
        </div>
      </div>
    </div>
  );
};

const Comments = (props) => {
  const { data, deleteHandler, postReplyHandler } = props;
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="border border-red-300 m-2 p-2 text-left">
            <Comment
              data={item}
              deleteHandler={deleteHandler}
              postReplyHandler={postReplyHandler}
            />
            <div>
              {item.replies.length > 0 && (
                <Comments
                  data={item.replies}
                  deleteHandler={deleteHandler}
                  postReplyHandler={postReplyHandler}
                />
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const Comment = (props) => {
  const { message, id } = props.data;
  const { deleteHandler, postReplyHandler } = props;
  const [isReply, setIsReply] = useState(false);
  const [comment, replyComment] = useState("");

  const deleteMsg = () => {
    deleteHandler(id);
  };

  const postReply = () => {
    if (comment === "") return;
    postReplyHandler(id, comment);
    setIsReply(!isReply);
  };

  return (
    <div className="flex-row">
      <p className="p-2">{message}</p>

      {isReply && (
        <>
          <input
            className="border border-red-200 p-2"
            type="text"
            placeholder="Reply your comments"
            value={comment}
            autoFocus
            onChange={(e) => replyComment(e.target.value)}
          />
          <button
            className="btn bg-slate-300 m-1 pr-2 pl-2"
            onClick={postReply}
          >
            Post
          </button>
          <button
            className="btn bg-slate-300 m-1 pr-2 pl-2"
            onClick={(e) => setIsReply(!isReply)}
          >
            Cancel
          </button>
        </>
      )}

      {!isReply && (
        <>
          <button
            className="btn bg-slate-300 m-1 pr-2 pl-2"
            onClick={(e) => setIsReply(!isReply)}
          >
            Reply
          </button>
          <button
            className="btn bg-slate-300 m-1 pr-2 pl-2"
            onClick={deleteMsg}
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
};

export default NestedComments;
