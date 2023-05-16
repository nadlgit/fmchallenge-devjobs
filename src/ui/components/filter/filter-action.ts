export type FilterAction = (filters: {
  title: string;
  location: string;
  fullTime: boolean;
}) => void;
