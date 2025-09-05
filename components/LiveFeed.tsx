
import React from 'react';
import { Post } from '../types';
import { MessageCircleIcon } from './IconComponents';

interface LiveFeedProps {
  posts: Post[];
}

const LiveFeed: React.FC<LiveFeedProps> = ({ posts }) => {
  return (
    <div className="h-full max-h-[460px] overflow-y-auto pr-2 -mr-4 space-y-4">
      {posts.map((post) => (
        <div key={post.id} className="flex gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-700/50 transition-colors">
          <img src={post.avatar} alt={post.username} className="w-10 h-10 rounded-full mt-1" />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-slate-100">{post.username}</span>
                <span className="text-slate-400 ml-2">@{post.handle}</span>
              </div>
              <span className="text-xs text-slate-500">{post.timestamp}</span>
            </div>
            <p className="text-slate-300 mt-1 text-sm">{post.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LiveFeed;
