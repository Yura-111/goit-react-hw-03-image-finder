
import React from 'react';
import ContentLoader from 'react-content-loader';

export const ImgSkeleton = props => (
  <ContentLoader
    width={1400}
    height={575}
    viewBox="0 0 1400 575"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="12" y="58" rx="2" ry="2" width="400" height="250" />
    <rect x="432" y="57" rx="2" ry="2" width="400" height="250" />
    <rect x="852" y="56" rx="2" ry="2" width="400" height="250" />

    <rect x="12" y="320" rx="2" ry="2" width="400" height="250" />
    <rect x="432" y="319" rx="2" ry="2" width="400" height="250" />
    <rect x="852" y="318" rx="2" ry="2" width="400" height="250" />
  </ContentLoader>
)