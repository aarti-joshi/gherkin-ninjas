document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email_address: form.get("email_address"),
            password: form.get("password")
        })
    }

    const response = await fetch("http://localhost:3000/Volunteers/login", options);
    const data = await response.json();

    if (response.status == 200) {
        localStorage.setItem("token", data.token);
        window.location.assign("homepage.html");
    } else {
        alert(data.error);
    }
});