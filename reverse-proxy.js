exports.handler = async (event) => {
  const { request } = event;
  const { method, headers, body } = request;

  const forwardedRequest = {
    method,
    headers: { ...headers, Host: 'js.puter.com' },
    body,
  };

  const response = await fetch(`https://js.puter.com/v2/${event.path.substring(18)}`, forwardedRequest);

  const { status, headers, body } = response;
  return {
    statusCode: status,
    headers,
    body,
  };
};
