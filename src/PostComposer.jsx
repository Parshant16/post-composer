import { useState } from "react";

function PostComposer() {
  const [platform, setPlatform] = useState("Twitter");
  const [post, setPost] = useState("");

  const limit = platform === "Twitter" ? 280 : 3000;

  return (
    <div>
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
      >
        <option value="Twitter">Twitter</option>
        <option value="LinkedIn">LinkedIn</option>
      </select>

      <br /><br />

      <textarea
        value={post}
        onChange={(e) => setPost(e.target.value)}
        placeholder="Enter your post"
        rows="8"
        cols="50"
      />

      <p>
        Character Count: {post.length}/{limit}
      </p>

      {post.length > limit && (
        <p className="error">
          Error: Character limit exceeded.
        </p>
      )}
    </div>
  );
}

export default PostComposer;