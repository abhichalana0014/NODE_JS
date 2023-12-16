const reqFilter = (req, resp, next) => {
    if (!req.query.age) {
        resp.send("Please Provide your Age: ");
    } else if (req.query.age < 18) {
        resp.send("You are not eligible to access this page.");
    } else {
        next();
    }
};

module.exports = reqFilter