exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }
  
  console.log('headers', event.headers);

  console.log('body', event.body);

  return {
    statusCode: 200,
    body: 'OK',
  };
};