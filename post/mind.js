document.addEventListener("DOMContentLoaded", (event) => {
      displayButton();
});
var commentList = [];
function displayButton() {
      document.getElementById("commentList").innerHTML = "";
      commentList.map((item,i)=>{
            const user = document.createElement("div");
            const newComment = document.createElement("div");
            user.classList.add("userName");
            newComment.classList.add("commentText");
            user.innerHTML = item.user;
            newComment.innerHTML = item.comment;
            const container = document.createElement("div");
            container.classList.add("commentListContainer");
            container.appendChild(user);
            container.appendChild(newComment);
            document.getElementById("commentList").appendChild(container);
      })
}
function addComment() {
      var comment = document.getElementById("commentInput").value;
      if(comment==""){
            return;
      }
      var newComment = {
            user: "aang",
            comment: comment,
      };
      commentList.push(newComment);
      document.getElementById("commentInput").value = "";
      displayButton();
}
