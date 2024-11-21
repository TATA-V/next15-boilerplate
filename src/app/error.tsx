'use client';

import NextError from 'next/error';

interface Props {
  error: Error;
}

function errorPage({ error }: Props) {
  return (
    <NextError statusCode={500} title={error.message} />
  );
}

export default errorPage;
