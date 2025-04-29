import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { ExternalLink } from 'lucide-react';
import '../styles/Home.css';

const Contact = () => {
  const [userContact, setUserContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(()=>{
      const fetchUserContact = async() =>{
        try{
          const response = await axios.get('https://api.github.com/users/nimco-yusuf')
          setUserContact(response.data);
          setLoading(false);
        } catch(error){
          console.error('Error fetching user', error);
          setError('something went wrong while fetching data ');
          setLoading(false);
      }
    }
    fetchUserContact();
  },[])
  
  if (loading) return <div className="loading">Loading contact info...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="home-container">
      {userContact && (
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-container">
              <img
                src={userContact.avatar_url}
                alt={`${userContact.name}'s avatar`}
                className="avatar"
              />
            </div>
            <div className="profile-info">
              <h1 className="profile-name">{userContact.name}</h1>
              <h2 className="profile-username">@{userContact.login}</h2>
            </div>
          </div>

          {userContact.bio && (
            <div className="profile-bio">
              <p>{userContact.bio}</p>
            </div>
          )}

          <div className="profile-links">
            <p>
              <span>GitHub:</span>{' '}
              <a
                href={userContact.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {userContact.html_url} <ExternalLink size={14} />
              </a>
            </p>

            {userContact.twitter_username && (
              <p>
                <span>Twitter:</span>{' '}
                <a
                  href={`https://twitter.com/${userContact.twitter_username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @{userContact.twitter_username} <ExternalLink size={14} />
                </a>
              </p>
            )}

            {userContact.blog && (
              <p>
                <span>Website:</span>{' '}
                <a
                  href={
                    userContact.blog.startsWith('http')
                      ? userContact.blog
                      : `https://${userContact.blog}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {userContact.blog} <ExternalLink size={14} />
                </a>
              </p>
            )}

            {userContact.email && (
              <p>
                <span>Email:</span>{' '}
                <a href={`mailto:${userContact.email}`}>
                  {userContact.email}
                </a>
              </p>
            )}
          </div>

          <div className="profile-actions">
            <Link to="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
