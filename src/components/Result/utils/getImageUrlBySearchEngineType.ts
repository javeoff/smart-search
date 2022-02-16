import { SearchEngineType } from '@components/Result/enums/SearchEngineType';

export const getImageUrlBySearchEngineType = (
  engineType: SearchEngineType,
): string => {
  switch (engineType) {
    case SearchEngineType.DUCKDUCKGO:
    case SearchEngineType.GOOGLE:
    case SearchEngineType.YANDEX:
    default:
      return 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FLogos%2Fduckduckgo1600.png&f=1&nofb=1';
  }
};
