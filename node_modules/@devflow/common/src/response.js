function sendSuccess(res, data) {
  res.status(200).json({
    success: true,
    data: data
  });
}

function sendError(res, message, statusCode = 500) {
  res.status(statusCode).json({
    success: false,
    message: message
  });
}

module.exports = {
  sendSuccess,
  sendError
};
