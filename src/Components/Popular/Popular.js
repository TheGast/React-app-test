import React from 'react';

import s from './popular.module.scss';

export const Popular = () => {
  return (
    <section className={s.popular}>
      <div className={s.container}>
        <h2 className="popular__title section-title">Популярные категории</h2>
        <div className="popular__content">
          <div className="categories-item gridDS">
            <h4 className="categories-item__title">Лен и полулен</h4>
          </div>
          <div className="categories-item">
            <h4 className="categories-item__title">Лен и полулен</h4>
          </div>
          <div className="categories-item">
            <h4 className="categories-item__title">Лен и полулен</h4>
          </div>
          <div className="categories-item gridDS">
            <h4 className="categories-item__title">Лен и полулен</h4>
          </div>
          <div className="categories-item">
            <h4 className="categories-item__title">Лен и полулен</h4>
          </div>
          <div className="categories-item">
            <h4 className="categories-item__title">Лен и полулен</h4>
          </div>
          <div className="categories-item">
            <h4 className="categories-item__title">Лен и полулен</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

