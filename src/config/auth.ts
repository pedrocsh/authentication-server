export const auth = {
  secret: process.env.JWT || 'secret',
  expiresIn: '1h'
};
