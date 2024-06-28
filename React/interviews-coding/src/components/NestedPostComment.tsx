import { useState, useEffect } from "react";

const staticData = [
  { id: 1, message: "Test message 1", replies: [] },
  {
    id: 2,
    message: "Test message 2",
    replies: [
      { id: 3, message: "Test message 3", replies: [] },
      { id: 4, message: "Test message 4", replies: [] },
    ],
  },
  { id: 5, message: "Test message 5", replies: [] },
];

const updateReply = (tree: any[], targetId: number, message: string) => {
  const commentsCopy = JSON.parse(JSON.stringify(tree));
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

const deleteComment = (tree: any[], targetId: number) => {
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

const NestedPostComment = () => {
  const [data, setData] = useState(staticData);
  const [post, setPost] = useState("");

  const postMessageHandler = () => {
    const tempData = {
      id: Date.now(),
      message: post,
      replies: [],
    };
    setData((d) => [tempData, ...d]);
    setPost("");
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const addReplyMessageHandler = (targetId: number, message: string) => {
    const newData = updateReply(data, targetId, message);
    setData(newData);
  };

  const deleteMessageHandler = (id: number) => {
    console.log(id);
    const newData = deleteComment(data, id);
    setData(newData);
  };

  return (
    <>
      <div className="w-full">
        <p>Nested Reply Comments</p>
        <textarea
          rows={4}
          cols={50}
          className="border border-solid bg-slate-400 text-white shadow-md"
          autoFocus
          placeholder="Describe yourself here..."
          onChange={(e) => setPost(e.target.value)}
          value={post}
        ></textarea>
        <button
          className="p-3 m-3 bg-slate-300 border border-solid rounded"
          onClick={() => postMessageHandler()}
        >
          Post Message
        </button>
      </div>

      <div>
        <Comments
          data={data}
          addReplyHandler={addReplyMessageHandler}
          deleteMessageHandler={deleteMessageHandler}
        />
      </div>
    </>
  );
};

const Comments: React.FC<{
  data: any[];
  addReplyHandler: (id: number, message: string) => void;
  deleteMessageHandler: (id: number) => void;
}> = ({ data, addReplyHandler, deleteMessageHandler }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div>
            <Comment
              key={item.id}
              data={item}
              addReply={addReplyHandler}
              deleteMessage={deleteMessageHandler}
            />
            <div className="ml-3">
              {item.replies.length > 0 && (
                <Comments
                  data={item.replies}
                  addReplyHandler={addReplyHandler}
                  deleteMessageHandler={deleteMessageHandler}
                />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

interface dataProps {
  id: number;
  message: string;
  replies: any[];
}
const Comment: React.FC<{
  data: dataProps;
  addReply: (id: number, message: string) => void;
  deleteMessage: (id: number) => void;
}> = ({ data, addReply, deleteMessage }) => {
  const [reply, setReply] = useState(false);
  const [comment, setComment] = useState("");
  const { id, message, replies } = data;

  const deletHandler = () => {
    deleteMessage(id);
  };
  const replyHandler = () => {
    addReply(id, comment);
    setReply(false);
    setComment("");
  };

  return (
    <div className="border border-solid m-2 p-2">
      <p>{message}</p>
      <div>
        {reply ? (
          <>
            <input
              type="text"
              placeholder="Enter Reply Message..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div>
              <button
                className="bg-blue-100 p-2 m-2"
                onClick={() => replyHandler()}
              >
                Add
              </button>
              <button
                className="bg-blue-100 p-1 m-1"
                onClick={() => setReply(!reply)}
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <div>
            <button
              className="bg-blue-100 p-1 m-1"
              onClick={() => setReply(!reply)}
            >
              Reply
            </button>
            <button
              className="bg-blue-100 p-1 m-1"
              onClick={() => deletHandler()}
            >
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NestedPostComment;
