//submit comment function
async function submitCommentHandler(event) {
  event.preventDefault();
  //get the info we need
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const comment_text = document.querySelector("#comment-text").value.trim();
  if (comment_text) {
    //POST fetch request to back-end with comment_text/post_id if we have comment_text
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        comment_text, //removed user id
        post_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //check if everything is good
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

//post a commment event listener for on-click of #post-comment-btn
document.querySelector("#post-comment-btn").addEventListener("click", submitCommentHandler);
  