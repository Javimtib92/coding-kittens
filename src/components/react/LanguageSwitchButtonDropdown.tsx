import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Languages, Check } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '~/components/react/DropdownMenu';

export function LanguageSwitchButtonDropdown({
  locale,
}: {
  locale: string | undefined;
}) {
  const onChangeLanguage = (locale: string) => {
    const url = new URL(window.location.href);

    url.pathname = url.pathname.replace(/^\/[^/]+/, '/' + locale);

    localStorage.setItem('selectedLanguage', locale);

    window.location.replace(url.href);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          aria-label='Switch language button'
          className='-mx-4 -my-2 px-4 py-2'
        >
          <span className='h-6 w-6 text-primary-600 dark:text-primary-100'>
            <Languages />
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => onChangeLanguage('en')}>
          <div className='flex flex-row items-center justify-between gap-2'>
            English {locale === 'en' && <Check className='w-4' />}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeLanguage('ca')}>
          <div className='flex flex-row items-center justify-between gap-2'>
            Català {locale === 'ca' && <Check className='w-4' />}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeLanguage('es')}>
          <div className='flex flex-row items-center justify-between gap-2'>
            Español {locale === 'es' && <Check className='w-4' />}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
