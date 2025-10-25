interface InfoProps {
  pages: number;
  next: number | null;
  prev: number | null;
  count: number;
}

export interface EpisodeProps {
  id: string;
  name: string;
  air_date: string;
  episode: string;
}

export interface EpisodeData {
  episodes: {
    info: InfoProps;
    results: EpisodeProps[];
  };
}

export type EpisodeCardProps = Pick<EpisodeProps, "id" | "name" | "air_date" | "episode">;
