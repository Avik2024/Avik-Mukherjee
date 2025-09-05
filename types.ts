
export interface SentimentDataPoint {
  time: string;
  value: number;
}

export interface Topic {
  name: string;
  mentions: number;
}

export interface Post {
  id: number;
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  avatar: string;
}

export interface Alert {
  id: number;
  topic: string;
  message: string;
  timestamp: string;
}

export interface DashboardData {
  sentiment: SentimentDataPoint[];
  topics: Topic[];
  posts: Post[];
  alerts: Alert[];
}
