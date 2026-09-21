import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { authApi, setStoredToken } from '../services/api';

const AuthContext = createContext(null);

const USER_KEY = 'taskflow_user';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem(USER_KEY);
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('taskflow_token') || null;
  });

  const [isLoading, setIsLoading] = useState(false);

  const logout = useCallback(() => {
    setStoredToken(null);
    localStorage.removeItem(USER_KEY);
    setUser(null);
    setToken(null);
  }, []);

  // Listen for unauthorized 401 events dispatched by api.js
  useEffect(() => {
    const handleUnauthorized = () => {
      logout();
    };
    window.addEventListener('taskflow:unauthorized', handleUnauthorized);
    return () => {
      window.removeEventListener('taskflow:unauthorized', handleUnauthorized);
    };
  }, [logout]);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const response = await authApi.login({ email, password });
      const { token: receivedToken, user: receivedUser } = response.data || {};

      if (!receivedToken) {
        throw new Error('No authentication token received from server.');
      }

      setStoredToken(receivedToken);
      localStorage.setItem(USER_KEY, JSON.stringify(receivedUser));

      setToken(receivedToken);
      setUser(receivedUser);

      return { success: true, user: receivedUser };
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async ({ name, email, password, role }) => {
    setIsLoading(true);
    try {
      const response = await authApi.register({ name, email, password, role });
      const { token: receivedToken, user: receivedUser } = response.data || {};

      // If backend returns a token upon registration, automatically authenticate
      if (receivedToken && receivedUser) {
        setStoredToken(receivedToken);
        localStorage.setItem(USER_KEY, JSON.stringify(receivedUser));
        setToken(receivedToken);
        setUser(receivedUser);
      }

      return {
        success: true,
        user: receivedUser,
        hasToken: Boolean(receivedToken),
      };
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    token,
    isAuthenticated: Boolean(token && user),
    isLoading,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
