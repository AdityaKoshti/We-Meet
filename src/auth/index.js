export const signIn = (user) => (
    fetch(`${process.env.REACT_APP_API_URL}/signin`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
)

export const signUp = (user) =>
    fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    })
        .then((res) => res.json())
        .catch((error) => console.error("Error:", error));

export const authenticate = (jwt, next) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('jwt', JSON.stringify(jwt));
        next();
    }
}