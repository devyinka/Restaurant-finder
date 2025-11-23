export const getFirebaseErrorMessage = (errorCode) => {
  const errorMessages = {
    'auth/invalid-email': 'The email address is not valid.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/email-already-in-use': 'This email is already registered.',
    'auth/weak-password': 'Password must be at least 6 characters.',
    'auth/network-request-failed': 'Network error. Please check your internet.',
  };

  return errorMessages[errorCode] || 'Something went wrong. Please try again.';
};