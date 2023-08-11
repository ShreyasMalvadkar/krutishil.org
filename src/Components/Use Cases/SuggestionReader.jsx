import React, { useState } from 'react';

const SuggestionReader = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    // Basic validation
    if (!username || !password) {
      setError('Please fill in both username and password.');
      return;
    }

    setError('');

    // Send the username and password to the server for verification
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Handle the response from the server if necessary
      if (response.ok) {
        // User is authenticated
        setAuthenticated(true);
        // Fetch suggestions after successful login
        fetchSuggestions();
      } else {
        // Handle authentication error responses from the server
        setError('Invalid username or password.');
      }
    } catch (error) {
      console.error('An error occurred while logging in:', error);
    }
  };

  const fetchSuggestions = async () => {
    try {
      const response = await fetch('/api/suggestions');
      const data = await response.json();

      // Handle the response from the server if necessary
      if (response.ok) {
        // Set the suggestions fetched from the server
        setSuggestions(data.suggestions);
      } else {
        // Handle error responses from the server
        console.error('Failed to fetch suggestions.');
      }
    } catch (error) {
      console.error('An error occurred while fetching suggestions:', error);
    }
  };

  if (!authenticated) {
    return (
      <form onSubmit={handleLogin}>
        {error && <p>{error}</p>}
        <div>
          <label>
            Username:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }

  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <h3>Suggestions:</h3>
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionReader;
