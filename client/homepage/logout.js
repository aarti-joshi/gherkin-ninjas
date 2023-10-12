//logout and redirect to index.html

document.getElementById("logout").addEventListener("click", async (e) => {
    e.preventDefault();
    localStorage.removeItem("token". data.token);
    window.location.assign("../index.html");
});



