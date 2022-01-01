//create post function
async function createPostHandler(event) {
  event.preventDefault();
  //get info we need from front-end fields
  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  if (body) {
    //make sure we have comment text and PUT fetch request to back-end with title/body
    const response = await fetch("/api/posts/" + post_id, {
      method: "PUT",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //check if response is good
    if (response.ok) {
      //replace with post id
      document.location.replace("/dashboard"); 
    } else {
      alert(response.statusText);
    }
  }
}

//event listener for on-click of #create-post-btn
document.querySelector("#create-post-btn").addEventListener("click", createPostHandler);
