import React, { useState, useEffect } from 'react';

interface WebsiteData {
  SiteName: string;
  Description: string;
}

const Website: React.FC = () => {
  const [websiteData, setWebsiteData] = useState<WebsiteData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams(window.location.search);
      const query = params.get('q');

      if (query) {
        try {
          const response = await fetch(`https://api.weather.gov/points/39.7456,-97.0892`);
          const data = await response.json();
          setWebsiteData(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Website</h1>
      {websiteData ? (
        <div>
          <h2>{websiteData.SiteName}</h2>
          <p>{websiteData.Description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Website;
