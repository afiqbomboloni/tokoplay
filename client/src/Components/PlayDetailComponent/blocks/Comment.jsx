import axios from "axios";
import { useState } from "react";
const Comment = ({ comments, videoId, baseUrl, message }) => {

  const [data, setData] = useState({
    username: "",
    comment: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentData = {
      videoId: videoId,
      username: data.username,
      comment: data.comment,
    };
    axios
      .post(baseUrl + `/channels/comments`, commentData)
      .then((response) => {
        setData({ username: "", comment: "" });
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  const formatTimestamp = (timestamp) => {
    const dateObject = new Date(timestamp);
    const day = dateObject.getDate().toString().padStart(2, "0");
    const month = (dateObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObject.getFullYear();
    return `${day}-${month}-${year}`;
  };
  return (
    <aside
      id="default-sidebar"
      class="fixed top-0 right-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-6 overflow-y-auto bg-green-50">
        <section class="bg-white py-8 lg:py-16 rounded-md">
          <div class="max-w-2xl mx-auto px-4">
            {message ? (
              <p>{message}</p>
            ) : (
              <ul>
                {comments.map((comment, index) => (
                  <li>
                    <article class="p-6 mb-6 text-base bg-white rounded-lg">
                      <footer class="flex justify-between items-center mb-2">
                        <div class="flex items-center">
                          <p class="inline-flex items-center mr-4 text-xs text-gray-900">
                            <img
                              class="mr-2 w-6 h-6 rounded-full"
                              src="https://www.wellpower.org/wp-content/uploads/2017/12/placeholder-man.png"
                              alt={comment.username}
                            />
                            {comment.username}
                          </p>
                          <p class="text-xs text-gray-600 dark:text-gray-400">
                            <time
                              pubdate
                              datetime={comment.timestamp}
                              title={formatTimestamp(comment.timestamp)}
                            >
                              {formatTimestamp(comment.timestamp)}
                            </time>
                          </p>
                        </div>
                      </footer>
                      <p class="text-gray-500 text-sm">{comment.comment}</p>
                    </article>
                  </li>
                ))}
              </ul>
            )}

            <div class="flex justify-between items-center mb-6">
              <h2 class="text-md lg:text-2xl font-bold text-gray-900">
                Discussion ({comments.length})
              </h2>
            </div>
            <form class="mb-6" onSubmit={handleSubmit}>
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                <label for="username" class="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  rows="6"
                  class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Tulis username"
                  value={data.username}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                <label for="comment" class="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="6"
                  class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Write a comment..."
                  value={data.comment}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </form>
          </div>
        </section>
      </div>
    </aside>
  );
};

export default Comment;
