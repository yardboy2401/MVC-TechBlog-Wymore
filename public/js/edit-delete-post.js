//editing post function
async function editPostHandler(e) {
  e.preventDefault();
  //get the post title and the text from front-end fields
  const title = document.querySelector("#post-title").innerHTML;
  const body = document.querySelector("#post-body").innerHTML;
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(title, body);
  document.location.replace("/edit/" + post_id);
}

//deleting post function
async function deletePostHandler(e) {
  e.preventDefault();
  //make request to post route delete with the current post id
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  //DELETE fetch to back-end
  const response = await fetch("/api/posts/" + post_id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  //check if all good
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

//edit post event listener on-click
document.querySelector("#edit-btn").addEventListener("click", editPostHandler);
//delete post event listener on-click
document.querySelector("#delete-btn").addEventListener("click", deletePostHandler);
