export const fetchHomeworld = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Failed to fetch homeworld');
    return response.json();
  };
  