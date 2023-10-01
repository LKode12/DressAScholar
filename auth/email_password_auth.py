from firebase_admin import auth




# Create a new user with email and password
def create_new_user(email, password):
    try:
        user = auth.create_user(
            email=email,
            password=password
        )
        print(f"Successfully created user: {user.uid}")
        return user
    except Exception as e:
        print(f"Error creating user: {e}")
        return None


def sign_in_user(email, password):
# Sign in a user with email and password
    try:
        user = auth.get_user_by_email(email)
        print(f"Successfully signed in user: {user.uid}")
    except Exception as e:
        print(f"Error creating user: {e}")
        return None
