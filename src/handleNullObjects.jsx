import { useEffect, useState } from "react";
// handle null or undefined objects as a state
const HandleNullObjects = () => {
  const [post, setPost] = useState(null);

  //   you can also use a loader to check if the data is loaded.
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dummyjson.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h3>How to handle null / undefined objects...</h3>
      {
        // you can specify that the object might be undefined / null using "?" or you can use a loader variable to specify that the data is loaded.
      }
      {!loading && (
        <>
          <h4>{post?.title}</h4>
          <p>{post?.body}</p>
        </>
      )}
    </div>
  );
};

export default HandleNullObjects;
