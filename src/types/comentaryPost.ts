export interface ComentaryPostInfo {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface ComentaryPostProps {
  comentaryPost: ComentaryPostInfo[];
}
