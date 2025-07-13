export const login = (email: string, password: string): string | null => {
  if (email === 'tansen' && password === 'password') {
    return 'valid-session';
  }
  return null;
};
