import axios from './api';

/**
 * Provides the profiles from the api or local storage.
 */
export const getProfiles = async () => {
  const localProfiles = localStorage.getItem('profiles');

  if (!localProfiles) {
    const profiles = await axios.get('');
    localStorage.setItem('profiles', JSON.stringify(profiles.data));
    return profiles.data;
  }

  return JSON.parse(localProfiles);
};
