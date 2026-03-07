const fetcher = async (url: string): Promise<unknown> => {
  const res = await fetch(url);
  return res.json();
};

export default fetcher;
