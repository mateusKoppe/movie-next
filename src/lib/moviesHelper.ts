export enum coverSize {
  small = "https://www.themoviedb.org/t/p/w220_and_h330_face/",
  medium = "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/",
  backdrop = "https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/"
}

export const getMovieImage = (
  image: string,
  size: coverSize = coverSize.small
) => `${size}/${image}`;
