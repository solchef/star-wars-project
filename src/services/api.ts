export const fetchHomeworld = async (url: string) => {
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch homeworld: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      return data;
      
    } catch (error) {
    //   console.error('Error fetching homeworld:', error);
      throw new Error('An error occurred while fetching the homeworld data. Please try again later.');
    }
  };
  