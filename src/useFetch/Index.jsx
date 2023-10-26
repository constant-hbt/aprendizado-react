import React from 'react';

import useFetch from './useFetch';

const Index = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
    }

    fetchData();
  }, [request]);

  if (error !== null) return <div>{error}</div>;
  if (loading) return <div>Carregando...</div>;
  if (data) {
    return (
      <ul>
        {data.map((p) => (
          <li key={p.id}>{p.nome}</li>
        ))}
      </ul>
    );
  }

  return null;
};

export default Index;
