class ApiResponse {
  static success(res, data, message = 'Success', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data,
    });
  }

  static error(res, message = 'Error', statusCode = 500, errors = []) {
    return res.status(statusCode).json({
      success: false,
      message,
      ...(errors.length > 0 && { errors }),
    });
  }

  static created(res, data, message = 'Created') {
    return this.success(res, data, message, 201);
  }

  static notFound(res, message = 'Not found') {
    return this.error(res, message, 404);
  }
}

module.exports = ApiResponse;
