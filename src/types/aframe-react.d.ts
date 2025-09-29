declare module 'aframe-react' {
  import * as React from 'react';

  export interface EntityProps extends React.HTMLAttributes<any> {
    primitive?: string;
    geometry?: string;
    material?: string;
    position?: string;
    rotation?: string;
    scale?: string;
    [key: string]: any; // para aceptar props extra
  }

  export const Entity: React.FC<EntityProps>;

  export interface SceneProps extends React.HTMLAttributes<any> {
    [key: string]: any;
  }

  export const Scene: React.FC<SceneProps>;
}
