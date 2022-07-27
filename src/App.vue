<template>
  <header class="page-header">
    <div class="page-header__decor"></div>
    <nav class="page-header__nav navigation">
      <div class="navigation__wrapper">
        <ul class="navigation__menu">
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <svg
                class="navigation__link-icon"
                width="16"
                height="14"
                focusable="false"
                role="img"
              >
                <use href="/images/svg/header-menu.svg#favorites"></use>
              </svg>
              <span class="navigation__label">Избранное</span>
            </a>
          </li>
          <li class="navigation__item navigation__item--active">
            <a href="#" class="navigation__link">
              <svg
                class="navigation__link-icon"
                width="18"
                height="20"
                focusable="false"
                role="img"
              >
                <use href="/images/svg/header-menu.svg#storage"></use>
              </svg>
              <span class="navigation__label">Склад</span>
            </a>
          </li>
          <li class="navigation__item">
            <a href="#" class="navigation__link">
              <svg
                class="navigation__link-icon"
                width="18"
                height="20"
                focusable="false"
                role="img"
              >
                <use href="/images/svg/header-menu.svg#deal"></use>
              </svg>
              <span class="navigation__label">Сделки</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <main class="page-main">
    <div class="page-main__wrapper">
      <h1 class="visually-hidden">Каталог</h1>
      <div class="page-main__header controls">
        <section class="controls__sort sort">
          <h2 class="visually-hidden">Сортировка</h2>
          <ul class="sort__list">
            <li class="sort__item">
              <button class="sort__button sort__button--active">
                Все типы
              </button>
            </li>
            <li class="sort__item">
              <button class="sort__button">Прямые продажи</button>
            </li>
            <li class="sort__item">
              <button class="sort__button">Аукцион</button>
            </li>
          </ul>
        </section>
        <section class="controls__search search">
          <h2 class="visually-hidden">Поиск</h2>
          <label class="search__control">
            <input class="search__input" type="text" name="search" />
            <span class="visually-hidden">Поиск.</span>
            <button class="search__button" type="button">
              <span class="visually-hidden">Кнопка поиска.</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                focusable="false"
                role="img"
              >
                <path
                  d="M5.917.5a5.417 5.417 0 0 1 5.416 5.417 5.43 5.43 0 0 1-1.3 3.525l.225.225h.659l4.166 4.166-1.25 1.25-4.166-4.166v-.659l-.225-.225a5.43 5.43 0 0 1-3.525 1.3A5.416 5.416 0 1 1 5.917.5Zm0 1.667a3.734 3.734 0 0 0-3.75 3.75 3.734 3.734 0 0 0 3.75 3.75 3.734 3.734 0 0 0 3.75-3.75 3.734 3.734 0 0 0-3.75-3.75Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </label>
        </section>
      </div>
      <section class="catalog">
        <h2 class="visually-hidden">Каталог.</h2>
        <div class="catalog-list">
          <div class="catalog-list__wrapper">
            <article class="catalog-list__item offer">
              <div class="offer__main-info">
                <img
                  class="offer__image"
                  src="../public/images/stock-woods-1.jpg"
                  width="256"
                  height="256"
                  alt="Древесина."
                />
                <div class="offer__info">
                  <p class="offer__type">Аукцион</p>
                  <h3 class="offer__title">Пиломатериалы брус доска</h3>
                  <p class="offer__location">Санкт-Петербург, Красное Село</p>
                  <span class="offer__dealer">Продавец</span>
                  <span class="offer__dealer-name">Торговый Дом ГОСТ</span>
                  <p class="offer__product-name">
                    <span class="offer__product-type">Вид товара</span>
                    Стройматериалы
                  </p>
                  <p class="offer__description">
                    Пиломатериалы брус доска. Распродажа пиломатериалов в связи
                    закрытием ЛЕСО-БАЗЫ! Успейте приобрести пиломатериал со
                    скидками до закрытия 01.06.2022 ! Мы стараемся быть не
                    такими как все и даем вам: Доставка в согласованный день...
                  </p>
                </div>
              </div>
              <div class="offer__secondary-info">
                <b class="offer__price">33 000 ₽</b>
                <dl class="offer__price-details details">
                  <div class="details__item">
                    <dt class="details__name">Количество</dt>
                    <dd class="details__description">3 шт.</dd>
                  </div>
                  <div class="details__item">
                    <dt class="details__name">Стоимость за штуку</dt>
                    <dd class="details__description">11 000 ₽</dd>
                  </div>
                </dl>
                <div class="offer__button-wrapper">
                  <button class="offer__deal-button button" type="button">
                    Добавить в сделки
                  </button>
                  <button class="offer__favorite-button button" type="button">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.334 2.156c-.565.513-.963 1.33-.963 2.568 0 .768.37 1.652 1.023 2.593.645.93 1.52 1.845 2.414 2.66a30.729 30.729 0 0 0 3.185 2.521 33.038 33.038 0 0 0 3.196-2.585c.896-.827 1.771-1.749 2.418-2.673.658-.938 1.022-1.798 1.022-2.516a3.365 3.365 0 0 0-3.36-3.37 3.348 3.348 0 0 0-2.712 1.39.688.688 0 0 1-1.114 0 3.348 3.348 0 0 0-2.713-1.39c-.99 0-1.82.28-2.396.802ZM8 13.323l-.376.567-.002-.002-.005-.003-.017-.011a31.217 31.217 0 0 1-1.152-.807 32.113 32.113 0 0 1-2.57-2.094c-.934-.851-1.889-1.844-2.615-2.89C.545 7.05 0 5.892 0 4.725c0-1.543.508-2.75 1.407-3.566C2.296.352 3.488 0 4.73 0A4.71 4.71 0 0 1 8 1.315a4.728 4.728 0 0 1 8 3.409c0 1.129-.55 2.267-1.265 3.287-.724 1.035-1.677 2.032-2.61 2.892a34.415 34.415 0 0 1-3.651 2.92l-.065.044-.017.012-.005.003h-.001c0 .001-.001.001-.386-.56Zm0 0 .386.56a.694.694 0 0 1-.762.007L8 13.323Z"
                        fill="#2D3B87"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
            <article class="catalog-list__item offer">
              <div class="offer__main-info">
                <img
                  class="offer__image"
                  src="../public/images/stock-woods-1.jpg"
                  width="256"
                  height="256"
                  alt="Древесина."
                />
                <div class="offer__info">
                  <p class="offer__type">Аукцион</p>
                  <h3 class="offer__title">Пиломатериалы брус доска</h3>
                  <p class="offer__location">Санкт-Петербург, Красное Село</p>
                  <span class="offer__dealer">Продавец</span>
                  <span class="offer__dealer-name">Торговый Дом ГОСТ</span>
                  <p class="offer__product-name">
                    <span class="offer__product-type">Вид товара</span>
                    Стройматериалы
                  </p>
                  <p class="offer__description">
                    Пиломатериалы брус доска. Распродажа пиломатериалов в связи
                    закрытием ЛЕСО-БАЗЫ! Успейте приобрести пиломатериал со
                    скидками до закрытия 01.06.2022 ! Мы стараемся быть не
                    такими как все и даем вам: Доставка в согласованный день...
                  </p>
                </div>
              </div>
              <div class="offer__secondary-info">
                <b class="offer__price">33 000 ₽</b>
                <dl class="offer__price-details details">
                  <div class="details__item">
                    <dt class="details__name">Количество</dt>
                    <dd class="details__description">3 шт.</dd>
                  </div>
                  <div class="details__item">
                    <dt class="details__name">Стоимость за штуку</dt>
                    <dd class="details__description">11 000 ₽</dd>
                  </div>
                </dl>
                <div class="offer__button-wrapper">
                  <button class="offer__deal-button button" type="button">
                    Добавить в сделки
                  </button>
                  <button class="offer__favorite-button button" type="button">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.334 2.156c-.565.513-.963 1.33-.963 2.568 0 .768.37 1.652 1.023 2.593.645.93 1.52 1.845 2.414 2.66a30.729 30.729 0 0 0 3.185 2.521 33.038 33.038 0 0 0 3.196-2.585c.896-.827 1.771-1.749 2.418-2.673.658-.938 1.022-1.798 1.022-2.516a3.365 3.365 0 0 0-3.36-3.37 3.348 3.348 0 0 0-2.712 1.39.688.688 0 0 1-1.114 0 3.348 3.348 0 0 0-2.713-1.39c-.99 0-1.82.28-2.396.802ZM8 13.323l-.376.567-.002-.002-.005-.003-.017-.011a31.217 31.217 0 0 1-1.152-.807 32.113 32.113 0 0 1-2.57-2.094c-.934-.851-1.889-1.844-2.615-2.89C.545 7.05 0 5.892 0 4.725c0-1.543.508-2.75 1.407-3.566C2.296.352 3.488 0 4.73 0A4.71 4.71 0 0 1 8 1.315a4.728 4.728 0 0 1 8 3.409c0 1.129-.55 2.267-1.265 3.287-.724 1.035-1.677 2.032-2.61 2.892a34.415 34.415 0 0 1-3.651 2.92l-.065.044-.017.012-.005.003h-.001c0 .001-.001.001-.386-.56Zm0 0 .386.56a.694.694 0 0 1-.762.007L8 13.323Z"
                        fill="#2D3B87"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
            <article class="catalog-list__item offer">
              <div class="offer__main-info">
                <img
                  class="offer__image"
                  src="../public/images/stock-woods-1.jpg"
                  width="256"
                  height="256"
                  alt="Древесина."
                />
                <div class="offer__info">
                  <p class="offer__type">Аукцион</p>
                  <h3 class="offer__title">Пиломатериалы брус доска</h3>
                  <p class="offer__location">Санкт-Петербург, Красное Село</p>
                  <span class="offer__dealer">Продавец</span>
                  <span class="offer__dealer-name">Торговый Дом ГОСТ</span>
                  <p class="offer__product-name">
                    <span class="offer__product-type">Вид товара</span>
                    Стройматериалы
                  </p>
                  <p class="offer__description">
                    Пиломатериалы брус доска. Распродажа пиломатериалов в связи
                    закрытием ЛЕСО-БАЗЫ! Успейте приобрести пиломатериал со
                    скидками до закрытия 01.06.2022 ! Мы стараемся быть не
                    такими как все и даем вам: Доставка в согласованный день...
                  </p>
                </div>
              </div>
              <div class="offer__secondary-info">
                <b class="offer__price">33 000 ₽</b>
                <dl class="offer__price-details details">
                  <div class="details__item">
                    <dt class="details__name">Количество</dt>
                    <dd class="details__description">3 шт.</dd>
                  </div>
                  <div class="details__item">
                    <dt class="details__name">Стоимость за штуку</dt>
                    <dd class="details__description">11 000 ₽</dd>
                  </div>
                </dl>
                <div class="offer__button-wrapper">
                  <button class="offer__deal-button button" type="button">
                    Добавить в сделки
                  </button>
                  <button class="offer__favorite-button button" type="button">
                    <svg
                      width="16"
                      height="14"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.334 2.156c-.565.513-.963 1.33-.963 2.568 0 .768.37 1.652 1.023 2.593.645.93 1.52 1.845 2.414 2.66a30.729 30.729 0 0 0 3.185 2.521 33.038 33.038 0 0 0 3.196-2.585c.896-.827 1.771-1.749 2.418-2.673.658-.938 1.022-1.798 1.022-2.516a3.365 3.365 0 0 0-3.36-3.37 3.348 3.348 0 0 0-2.712 1.39.688.688 0 0 1-1.114 0 3.348 3.348 0 0 0-2.713-1.39c-.99 0-1.82.28-2.396.802ZM8 13.323l-.376.567-.002-.002-.005-.003-.017-.011a31.217 31.217 0 0 1-1.152-.807 32.113 32.113 0 0 1-2.57-2.094c-.934-.851-1.889-1.844-2.615-2.89C.545 7.05 0 5.892 0 4.725c0-1.543.508-2.75 1.407-3.566C2.296.352 3.488 0 4.73 0A4.71 4.71 0 0 1 8 1.315a4.728 4.728 0 0 1 8 3.409c0 1.129-.55 2.267-1.265 3.287-.724 1.035-1.677 2.032-2.61 2.892a34.415 34.415 0 0 1-3.651 2.92l-.065.044-.017.012-.005.003h-.001c0 .001-.001.001-.386-.56Zm0 0 .386.56a.694.694 0 0 1-.762.007L8 13.323Z"
                        fill="#2D3B87"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  </main>
  <footer class="page-footer">
    <h2 class="page-footer__title">Developed by: <span>Gorobec Ivan</span></h2>
  </footer>
</template>
