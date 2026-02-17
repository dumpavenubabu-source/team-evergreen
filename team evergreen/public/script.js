async function askQuery() {
  const query = document.getElementById("query").value;

  const response = await fetch("http://localhost:5000/api/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  });

  const data = await response.json();
  document.getElementById("response").innerText = data.answer;
}
