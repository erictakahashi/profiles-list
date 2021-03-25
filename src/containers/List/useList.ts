import { useCallback, useEffect, useState } from 'react';

import { getProfiles } from '../../services/profiles';

/**
 * Hook to support the `List` container.
 */
export const useList = () => {
  const [profiles, setProfiles] = useState([]);

  const onMount = useCallback(async () => {
    const result = await getProfiles();
    setProfiles(result);
  }, [setProfiles]);

  useEffect(() => {
    onMount();
  }, [onMount]);

  return {
    profiles
  };
};