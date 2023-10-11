document.getElementById("register-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const options = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            firstname: form.get("firstname"),
            surname: form.get("surname"),
            email_address: form.get("email_address"),
            contact_number: form.get("contact_number"),
            address: form.get("address"),
            post_code: form.get("post_code"),
            password: form.get("password")
        })
    }

    // const response = await fetch("", options);
    // const data = await response.json();

    // if (response.status == 201) {
    //     alert("Registration successful!");
    //     window.location.assign("login.html");
    // } else {
    //     alert(data.error);
    // }
});