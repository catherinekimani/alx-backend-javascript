export default function handleResponseFromAPI(promise) {
  return promise
    //resolve
    .then(() => ({
      status: 200,
      body: 'Success',
    }))
    .catch(() => Error()) //empty error obj
    .finally(() => console.log('Got a response from the API'));
}
