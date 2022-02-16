import { SearchEngineType } from '@components/Result/enums/SearchEngineType';

export const initialResult = {
  searchEngine: SearchEngineType.DUCKDUCKGO,
  imageUrl:
    'https://external-content.duckduckgo.com/ip3/devblogs.microsoft.com.ico',
  link: 'https://devblogs.microsoft.com/dotnet/update-on-net-hot-reload-progress-and-visual-studio-2022-hi',
  title: 'Update on .NET Hot Reload progress and Visual Studio 2022 ...',
  description:
    "With these considerations, we've decided that starting with the upcoming\n" +
    '      .NET 6 GA release, we will enable Hot Reload functionality only through\n' +
    '      Visual Studio 2022 so we can focus on providing the best experiences to\n' +
    "      the most users. We'll also continue to pursue adding Hot Reload to Visual\n" +
    '      Studio for Mac in a future release. Update Oct 21, 2021:',
};
