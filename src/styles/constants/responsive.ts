export const breakPoints = {
  SM: 530,
  MD: 840,
  LG: 1024,
  HG: 1400,
};

export const responsive = (media: string) => `(min-width: ${breakPoints[media as keyof typeof breakPoints]}px)`;
