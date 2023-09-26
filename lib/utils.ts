// This function takes an error (of type 'unknown') and returns an error message as a string.
export const getErrorMessage = (error: unknown): string => {
  let message: string;

  // Check if the error is an instance of the Error class (common in JavaScript).
  if (error instanceof Error) {
    message = error.message;
  } 
  // Check if the error is an object with a 'message' property (e.g., Axios error response).
  else if (error && typeof error === "object" && "message" in error) {
    message = String(error.message);
  } 
  // Check if the error is already a string.
  else if (typeof error === "string") {
    message = error;
  } 
  // If none of the above conditions match, provide a generic error message.
  else {
    message = "Something went wrong";
  }

  return message;
};
