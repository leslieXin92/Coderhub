const errorType = {
  name_or_password_is_required: {
    status: 400, // Bad Request
    message: 'Username Or Password Cannot Be Empty!'
  },
  user_has_already_exists: {
    status: 409, // Conflict
    message: 'User Has Already Exists!'
  },
  user_does_not_exists: {
    status: 400,
    message: 'User Does Not Exists!'
  },
  password_is_wrong: {
    status: 400,
    message: 'Password Was Wrong!'
  },
  unauthorized: {
    status: 401, // Unauthorized
    message: 'unauthorized'
  }
}

module.exports = errorType
