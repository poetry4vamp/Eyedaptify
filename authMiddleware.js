const authenticatedUsers = [];

const isAuthenticated = (req, res, next) => {
  const { email, code } = req.query;
  console.log('Email:', decodeURIComponent(email), 'Code:', decodeURIComponent(code));

  if (email && code) {

      req.isAuthenticated = true;
      req.user = { email, code };

      next();
      
  } else {
      return res.send('Invalid link!');
  }
};

module.exports = { isAuthenticated, authenticatedUsers };