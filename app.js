const soon = document.getElementById("soon");

const get = {
  headers: {
    authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzYxMDk1NzIsImV4cCI6MTYzNzMxOTE3Mn0.J2RZxDc1jW74qU_3RClbmQJeq9GA1ws-YWq6CvGPxDc",
  },
};

// get movies for homepage

let getMovies = async () => {
  try {
    let response = await fetch(
      "https://striveschool-api.herokuapp.com/api/movies/",
      get
    );

    if (response.ok) {
      let data = await response.json();
      console.log(data);
      let hello = await data.forEach((element) => {
        fetch(
          `https://striveschool-api.herokuapp.com/api/movies/${element}`,
          get
        )
          .then((response) => response.json())
          .then((body) => {
            console.log(body);
            body.forEach((ele) => {
              soon.innerHTML += `
              <img
              src="${ele.imageUrl}"
              class="img-fluid section-img"
              alt=""
            />`;
            });
          });
      });
    } else {
      throw Error("Can't fetch from api");
    }
  } catch (err) {
    console.log(err);
  }
};

getMovies();

// inset new movies for backend

const submit = document.getElementById("submit");

function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);

submit.addEventListener("click", () => {
  let bodyData = {};
  bodyData.name = name.value;
  bodyData.description = description.value;
  bodyData.category = category.value;
  bodyData.imageUrl = imageUrl.value;
  console.log(bodyData);
  let json = JSON.stringify(bodyData);
  let post = {
    method: "POST",
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyOTRjYWFhY2FhMjAwMTU1MmExOWMiLCJpYXQiOjE2MzYxMDk1NzIsImV4cCI6MTYzNzMxOTE3Mn0.J2RZxDc1jW74qU_3RClbmQJeq9GA1ws-YWq6CvGPxDc",
    },
    body: json,
  };
  let postMovies = async () => {
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
  postMovies();
});
