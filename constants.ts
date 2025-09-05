
import { DashboardData, Topic, Post, Alert, SentimentDataPoint } from './types';

// --- Seed Data Generators ---

const generateInitialSentiment = (): SentimentDataPoint[] => {
  const data: SentimentDataPoint[] = [];
  const now = new Date();
  for (let i = 29; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 2000);
    data.push({
      time: time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
      value: Math.sin(i / 5) * 0.4 + (Math.random() - 0.5) * 0.2,
    });
  }
  return data;
};

// --- Mock Data Constants ---

export const INITIAL_TOPICS: Topic[] = [
  { name: '#AI', mentions: 185 },
  { name: '#Tech', mentions: 162 },
  { name: '#ReactJS', mentions: 140 },
  { name: '#Web3', mentions: 115 },
  { name: '#ClimateChange', mentions: 95 },
];

export const INITIAL_POSTS: Post[] = [
    { id: 1, username: 'EcoWarrior', handle: 'EcoWarrior', content: 'Deeply concerned about the recent news regarding #ClimateChange. We need to act now.', timestamp: '6:58:09 PM', avatar: 'https://picsum.photos/seed/user1/40/40' },
    { id: 2, username: 'StartupGuru', handle: 'StartupGuru', content: 'I\'m bullish on #AI for the long term. #innovation', timestamp: '6:58:10 PM', avatar: 'https://picsum.photos/seed/user2/40/40' },
    { id: 3, username: 'ReactDev', handle: 'ReactDev', content: 'What are your thoughts on the latest developments in #AI?', timestamp: '6:58:08 PM', avatar: 'https://picsum.photos/seed/user3/40/40' },
    { id: 4, username: 'visionaryUX', handle: 'visionaryUX', content: 'Building something cool with #AI! Can\'t wait to share more.', timestamp: '6:58:11 PM', avatar: 'https://picsum.photos/seed/user4/40/40' },
    { id: 5, username: 'CryptoKing', handle: 'CryptoKing', content: 'Hot take: #Web3 is overhyped and will not deliver on its promises.', timestamp: '6:58:12 PM', avatar: 'https://picsum.photos/seed/user5/40/40' },
];

export const INITIAL_ALERTS: Alert[] = [
  { id: 1, topic: 'AI', message: 'Topic "AI" is going viral with 125 mentions!', timestamp: '6:25:38 PM' },
  { id: 2, topic: 'Web3', message: 'Topic "Web3" has a sharp increase in negative sentiment.', timestamp: '6:27:41 PM' },
];

export const INITIAL_DATA: DashboardData = {
  sentiment: generateInitialSentiment(),
  topics: INITIAL_TOPICS,
  posts: INITIAL_POSTS,
  alerts: INITIAL_ALERTS,
};

// --- Data for Simulation ---
export const MOCK_USERNAMES = ['TechieTom', 'DataDiva', 'CodeWizard', 'CloudGuru', 'UXQueen', 'DevOpsDan'];
export const MOCK_HANDLES = ['techietom', 'datadiva', 'codewizard', 'cloudguru', 'uxqueen', 'devopsdan'];
export const MOCK_POST_CONTENT = [
    "Just deployed a new feature using #ReactJS. The performance gains are incredible!",
    "The potential of generative #AI is mind-blowing. We're just scratching the surface.",
    "Is #Web3 the future or just a fad? The debate rages on.",
    "Attending a great #Tech conference this week. So much to learn!",
    "Working on a new data visualization dashboard. #DataIsBeautiful",
    "Let's talk about sustainable #Tech solutions. #ClimateChange is a real issue.",
    "Serverless architecture is changing the game for developers.",
];
export const MOCK_ALERT_MESSAGES = [
    "is seeing a massive spike in mentions!",
    "is trending in the San Francisco region.",
    "has a sudden shift in sentiment towards negative.",
    "is being discussed by major influencers.",
];
