
import { useState, useEffect } from 'react';
import { DashboardData, SentimentDataPoint, Post, Alert, Topic } from '../types';
import { INITIAL_DATA, MOCK_USERNAMES, MOCK_HANDLES, MOCK_POST_CONTENT, MOCK_ALERT_MESSAGES, INITIAL_TOPICS } from '../constants';

const MAX_SENTIMENT_POINTS = 30;
const MAX_POSTS = 10;
const MAX_ALERTS = 5;

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const useMockDataStream = () => {
  const [data, setData] = useState<DashboardData>(INITIAL_DATA);
  const [postCounter, setPostCounter] = useState(INITIAL_DATA.posts.length + 1);
  const [alertCounter, setAlertCounter] = useState(INITIAL_DATA.alerts.length + 1);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        // 1. Update Sentiment Chart
        const now = new Date();
        const newSentimentPoint: SentimentDataPoint = {
          time: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
          value: prevData.sentiment[prevData.sentiment.length - 1].value + (Math.random() - 0.5) * 0.2,
        };
        const newSentiment = [...prevData.sentiment, newSentimentPoint].slice(-MAX_SENTIMENT_POINTS);

        // 2. Update Trending Topics
        const newTopics = prevData.topics.map(topic => ({
          ...topic,
          mentions: topic.mentions + Math.floor(Math.random() * 5),
        })).sort((a, b) => b.mentions - a.mentions);

        // 3. Update Live Feed
        let newPosts = [...prevData.posts];
        if (Math.random() > 0.6) { // Add a new post ~40% of the time
            const userIndex = Math.floor(Math.random() * MOCK_USERNAMES.length);
            const newPost: Post = {
                id: postCounter,
                username: MOCK_USERNAMES[userIndex],
                handle: MOCK_HANDLES[userIndex],
                content: getRandomItem(MOCK_POST_CONTENT),
                timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
                avatar: `https://picsum.photos/seed/user${postCounter}/40/40`,
            };
            newPosts = [newPost, ...prevData.posts].slice(0, MAX_POSTS);
            setPostCounter(c => c + 1);
        }

        // 4. Update Viral Alerts
        let newAlerts = [...prevData.alerts];
        if (Math.random() > 0.9) { // Add a new alert ~10% of the time
            const randomTopic = getRandomItem(INITIAL_TOPICS);
            const newAlert: Alert = {
                id: alertCounter,
                topic: randomTopic.name.replace('#',''),
                message: `Topic "${randomTopic.name}" ${getRandomItem(MOCK_ALERT_MESSAGES)}`,
                timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }),
            };
            newAlerts = [newAlert, ...prevData.alerts].slice(0, MAX_ALERTS);
            setAlertCounter(c => c + 1);
        }
        
        return {
          sentiment: newSentiment,
          topics: newTopics,
          posts: newPosts,
          alerts: newAlerts,
        };
      });
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postCounter, alertCounter]);

  return data;
};
