import * as React from 'react';
import { useTranslation } from 'react-i18next';

export const Home = ({ match }) => {
  const { t } = useTranslation();

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ match }) }}
        style={{ padding: '15px', border: '1px solid violet', marginBottom: '20px' }}
      />
    </div>
  );
};

export default Home;
