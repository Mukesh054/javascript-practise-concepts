class RateLimiter {
  constructor() {
    this.requests = {};
  }

  // Deny a request if that CLIENT has made more than 100 requests in past 1 sec
  isAllow(clientId) {
    const timeInSeconds = Math.floor(Date.now() / 1000); // time in seconds
    const requestTime = timeInSeconds - 1; // Substract 1 second from time

    // Get all request for this clientId
    const allRequests = this.requests[clientId] || [];
    const updateRequests = allRequests.filter(
      (timestamp) => timestamp > requestTime
    );

    // Limit upto 100 request
    if (updateRequests.length > 100) return false;

    updateRequests.push(requestTime);
    this.requests[clientId] = updateRequests;
    return true;
  }
}

// Usage
const rateLimiter = new RateLimiter();

app.get("apiURL", (req, res) => {
  const clientId = req.headers["x-client-id"];

  if (!rateLimiter.isAllow(clientId)) {
    res.status(429).send("Too many requests");
    return;
  }

  // continue processing the request
});