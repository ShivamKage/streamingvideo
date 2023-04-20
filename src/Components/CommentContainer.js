import React from "react";
import Comment from "./Comment";

const CommentsData = [
  {
    name: "Shivam",
    text: "Nice course, Enjoyed it a lot",
    replies: [],
  },
  {
    name: "Shivam",
    text: "Nice course, Enjoyed it a lot",
    replies: [
      {
        name: "Shivam",
        text: "Nice course, Enjoyed it a lot",
        replies: [
          {
            name: "Shivam",
            text: "Nice course, Enjoyed it a lot",
            replies: [
              {
                name: "Shivam",
                text: "Nice course, Enjoyed it a lot",
                replies: [
                  {
                    name: "Shivam",
                    text: "Nice course, Enjoyed it a lot",
                    replies: [
                      {
                        name: "Shivam",
                        text: "Nice course, Enjoyed it a lot",
                        replies: [
                          {
                            name: "Shivam",
                            text: "Nice course, Enjoyed it a lot",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Shivam",
    text: "Nice course, Enjoyed it a lot",
    replies: [],
  },
  {
    name: "Shivam",
    text: "Nice course, Enjoyed it a lot",
    replies: [
      {
        name: "Shivam",
        text: "Nice course, Enjoyed it a lot",
        replies: [],
      },
      {
        name: "Shivam",
        text: "Nice course, Enjoyed it a lot",
        replies: [
          {
            name: "Shivam",
            text: "Nice course, Enjoyed it a lot",
            replies: [],
          },
        ],
      },
      {
        name: "Shivam",
        text: "Nice course, Enjoyed it a lot",
        replies: [
          {
            name: "Shivam",
            text: "Nice course, Enjoyed it a lot",
            replies: [],
          },
        ],
      },
      {
        name: "Shivam",
        text: "Nice course, Enjoyed it a lot",
        replies: [],
      },
    ],
  },
  {
    name: "Shivam",
    text: "Nice course, Enjoyed it a lot",
    replies: [],
  },
  {
    name: "Shivam",
    text: "Nice course, Enjoyed it a lot",
    replies: [],
  },
  {
    name: "Shivam",
    text: "Nice course, Enjoyed it a lot",
    replies: [
      {
        name: "Shivam",
        text: "Nice course, Enjoyed it a lot",
        replies: [],
      },
      {
        name: "Shivam",
        text: "Nice course, Enjoyed it a lot",
        replies: [
          {
            name: "Shivam",
            text: "Nice course, Enjoyed it a lot",
            replies: [
              {
                name: "Shivam",
                text: "Nice course, Enjoyed it a lot",
                replies: [
                  {
                    name: "Shivam",
                    text: "Nice course, Enjoyed it a lot",
                    replies: [
                      {
                        name: "Shivam",
                        text: "Nice course, Enjoyed it a lot",
                        replies: [
                          {
                            name: "Shivam",
                            text: "Nice course, Enjoyed it a lot",
                            replies: [],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Shivam",
        text: "Nice course, Enjoyed it a lot",
        replies: [],
      },
    ],
  },
];
const CommentList = ({ list }) =>
  list.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentList list={comment.replies} />
      </div>
    </div>
  ));

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-semibold">Comments:</h1>
      <CommentList list={CommentsData} />
    </div>
  );
};

export default CommentContainer;
