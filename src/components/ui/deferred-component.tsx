import React, { Suspense, lazy, ComponentType } from 'react';

interface DeferredComponentProps {
  component: () => Promise<{ default: ComponentType<any> }>;
  fallback?: React.ReactNode;
}

export function DeferredComponent({ component, fallback = null }: DeferredComponentProps) {
  const LazyComponent = lazy(component);

  return (
    <Suspense fallback={fallback}>
      <LazyComponent />
    </Suspense>
  );
}