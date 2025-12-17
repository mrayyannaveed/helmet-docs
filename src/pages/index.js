import React from 'react';
import Layout from '@theme/Layout';

function Home() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          Hello, Docusaurus! This is your home page.
        </p>
      </div>
    </Layout>
  );
}

export default Home;