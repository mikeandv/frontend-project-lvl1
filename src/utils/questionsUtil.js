export const getRandomNum = (scale) => Math.round(Math.random() * scale);

export const getRandomNumInRange = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const gcd = (a, b) => {
  const reminder = a % b;
  return reminder === 0 ? b : gcd(b, reminder);
};

export const mul = (a, b, m) => {
  if (b === 1) {
    return a;
  }
  if (b % 2 === 0) {
    const t = mul(a, b / 2, m);
    return (2 * t) % m;
  }
  return (mul(a, b - 1, m) + a) % m;
};

export const pow = (a, b, m) => {
  if (b === 0) {
    return 1;
  }
  if (b % 2 === 0) {
    const t = pow(a, b / 2, m);
    return mul(t, t, m) % m;
  }
  return (mul(pow(a, b - 1, m), a, m)) % m;
};
