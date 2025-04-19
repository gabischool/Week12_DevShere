import React from 'react';
import moment from 'moment';
import { Star, GitFork, Eye, Clock } from 'lucide-react';
import '../styles/ProjectCard.css';

const ProjectCard = ({
  name,
  description,
  language,
  html_url,
  stargazers_count,
  forks_count,
  updated_at,
  topics,
  watchers_count,
}) => {  
  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-name">{name}</h3>
        {language && (
          <div className="language-badge">
            {language}
          </div>
        )}
      </div>
      
      <p className="project-description">
        {description || 'No description provided'}
      </p>
      
      {topics && topics.length > 0 && (
        <div className="project-topics">
          {topics.map((topic) => (
            <span key={topic} className="topic-badge">
              {topic}
            </span>
          ))}
        </div>
      )}
      
      <div className="project-stats">
        <div className="stat-group">
          <div className="project-stat">
            <Star size={14} />
            <span>{stargazers_count}</span>
          </div>
          <div className="project-stat">
            <GitFork size={14} />
            <span>{forks_count}</span>
          </div>
          <div className="project-stat">
            <Eye size={14} />
            <span>{watchers_count}</span>
          </div>
        </div>
        <div className="project-updated">
          <Clock size={14} />
          <span>Updated {moment(updated_at).format('MMM D, YYYY')}</span>
        </div>
      </div>
      
      <a 
        href={html_url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="project-link"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;