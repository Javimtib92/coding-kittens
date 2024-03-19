import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from '~/components/ui/DropdownMenu.tsx';

export function LanguageSwitchButtonDropdown() {
  const onChangeLanguage = (locale: string) => {
    window.location.replace(`/${locale}`);
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
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeLanguage('ca')}>
          Català
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => onChangeLanguage('es')}>
          Español
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
