document.addEventListener('DOMContentLoaded', async function() {
    const volunteer_id = 8;  // hardcoded id value

    try {
        let response = await fetch(`https://community-async.onrender.com/Volunteers/${volunteer_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // 'token' in localStorage
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();

        document.getElementById('displayName').textContent = `${data.firstname} ${data.surname}`;
        document.getElementById('displayUsername').textContent = `${data.firstname}`;
        document.getElementById('displayEmail').textContent = data.email_address;

    } catch (error) {
        console.error('Fetch error: ', error);
    }
});

function enableEdit(fieldId) {
    document.getElementById(fieldId).readOnly = false;
}
