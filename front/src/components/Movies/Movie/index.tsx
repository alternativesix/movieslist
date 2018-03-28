import * as React from 'react';

import './styles.css';

export default function Movie({ title, description }: Pick<Movie, 'title' | 'description'>) {
  return (
    <div className="Movie">
      <div className="Movie-title"><b>title:</b> {title} </div>
      {description && <div className="Movie-description"><b>description:</b> {description} </div>}
    </div>
  );
}
