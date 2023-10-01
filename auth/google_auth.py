import requests
def google_auth():
    # Replace with your Firebase Web API key
    firebase_api_key = "AIzaSyAPYlwFeQwKBLa1OxkxnTw9VI3mEviebcY"

    # Configure the Google Sign-In URL
    google_signin_url = f"https://identitytoolkit.googleapis.com/v1/accounts:signInWithGoogle?key={firebase_api_key}"

    # Construct the request payload
    data = {
        "requestUri": "http://localhost",
        "postBody": "id_token=<GOOGLE_ID_TOKEN>&providerId=google.com",
        "returnIdpCredential": True,
        "returnSecureToken": True
    }

    # Send the request to Firebase Authentication
    response = requests.post(google_signin_url, json=data)

    if response.status_code == 200:
        # Successful sign-in
        user_data = response.json()
        id_token = user_data["idToken"]
        local_id = user_data["localId"]
        print(f"Successfully signed in user with local ID: {local_id}")
    else:
        # Handle sign-in errors
        print(f"Sign-in error: {response.text}")
    