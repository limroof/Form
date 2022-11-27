let validator = (obj) => {
  if (obj.firstName && obj.age && obj.address) {
    return true;
  } else {
    return false;
  }
};

module.exports = validator;
