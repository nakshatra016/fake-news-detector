document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("analyzeBtn").addEventListener("click", () => {
    const text = document.getElementById("newsInput").value.trim();

    if (!text) {
      document.getElementById("result").innerText = "Please enter some text.";
      return;
    }

    const apiUrl = "https://fakenewscheck123.azurewebsites.net/api/CheckFakeNews" + encodeURIComponent(text);

    fetch(apiUrl)
      .then(res => res.text())
      .then(data => {
        document.getElementById("result").innerText = "Response:\n" + data;
      })
      .catch(err => {
        document.getElementById("result").innerText = "Error: " + err.message;
      });
  });
});
