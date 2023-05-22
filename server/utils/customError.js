class customError {
  constructor(status, message) {
    (this.status = status), (this.msg = message);
  }
}

module.exports = customError;
