// * 1) Fetch API with GET request
// * 2) Fetch API with POST request

const url = `https://backendapi.turing.com`
let accessToken = ''

// * 1) Fetch API with GET request

async function fetch_GET(){
   const response = await fetch(`${url}/categories/7`)
    .then(res => res.json())
    .then( data => data)
    console.log('Simple GET request response', response);
}
// fetch_GET()


// * 2) Fetch API with POST request

async function SIGN_IN_CUSTOMER(){
    let details = {
        email: "alanjames123@gmail.com",
        password: "test@123"
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(details)
    }

    const response = await fetch(`${url}/customers/login`, options)
    .then(res => res.json())
    .then(data => {
        accessToken = data.accessToken
        console.log(data);
        console.log(accessToken);
    })

}
// SIGN_IN_CUSTOMER()


// * 3) Update Customer

async function UPDATE_CUSTOMER(){
    let details = {
        name: "Alannnn",
        email: "alanjames123@gmail.com"
    }

    const options = {
        method: 'PUT',
        headers: {
            'user-key': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjdXN0b21lcl9pZCI6OTAxNTMsIm5hbWUiOiJhbGFuIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjI5ODY3NjMyLCJleHAiOjE2Mjk5NTQwMzJ9.k6Qp0__TpF_-tIese2iyPfEUYEKzE_-lPBbxCte9RpY',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(details)
    }

    const response = await fetch(`${url}/customer`, options)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })


}
UPDATE_CUSTOMER()