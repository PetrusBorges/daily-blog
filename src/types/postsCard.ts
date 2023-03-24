export interface PostModal {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostCardInfo {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostsCardProps {
  postCard: PostCardInfo[];
}
