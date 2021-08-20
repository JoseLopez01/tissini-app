import React from 'react';

export interface RouterProps {
  isAuthenticated: boolean;
  component: React.ComponentType;
  exact: boolean;
  path: string;
}