async function createPostHandler(e) {
  e.preventDefault();
  
  //get values needed from front-end fields
  const title = document.querySelector("#post-title").value.trim();
  const body = document.querySelector("#post-body").value.trim();

  if (body) {
    //make sure we have comment text and then POST fetch to back-end
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    //check if all good
    if (response.ok) {
      document.location.replace("/dashboard"); //replace with post id
    } else {
      alert(response.statusText);
    }
  }
}

//event listener for click on #create-post-btn to run createPostHandler function
document.querySelector("#create-post-btn").addEventListener("click", createPostHandler);