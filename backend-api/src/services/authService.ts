export const login = (email: string, password: string): string | null => {
  if (email === 'user@example.com' && password === 'securepassword') {
    return 'valid-session';
  }
  return null;
};
