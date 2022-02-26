module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f9b6cbae84bb7e2a175100f410ea4e97'),
  },
});
