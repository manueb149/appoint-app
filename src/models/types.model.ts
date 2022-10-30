import type { AppProps } from 'next/app';
import React from 'react';

export type CustomAppProps<T> = AppProps<T> & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout = AppProps['Component'] & {
  layout?: React.ElementType;
};
