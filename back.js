const name1 = document.getElementById("name");
const description = document.getElementById("description");
const category = document.getElementById("category");
const imageUrl = document.getElementById("imageUrl");
const form = document.getElementById("form");
const submit = document.getElementById("submit");

// POST

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

submit.addEventListener("click", () => {
  const bodyData = {};
  bodyData.name = name1.value;
  bodyData.description = description.value;
  bodyData.category = category.value;
  bodyData.imageUrl = imageUrl.value;
  console.log(bodyData);
  let json = JSON.stringify(bodyData);
  let post = {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzYxMDk1NzIsImV4cCI6MTYzNzMxOTE3Mn0.J2RZxDc1jW74qU_3RClbmQJeq9GA1ws-YWq6CvGPxDc",
      "Content-Type": "application/json",
    },
    body: json,
  };

  let postObject = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/movies",
        post
      );
      if (response.ok) {
        let body = await response.json();
        console.log(body);
      } else {
        throw new Error("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  };

  postObject();
});
