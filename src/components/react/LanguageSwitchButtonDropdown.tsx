import { Check, Languages } from "lucide-react";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";
import { cn } from "~/utils/cn";

export function LanguageSwitchButtonDropdown({
  locale,
}: {
  locale: string | undefined;
}) {
  const items = [
    {
      id: "en",
      name: "English",
    },
    {
      id: "es",
      name: "Español",
    },
    {
      id: "ca",
      name: "Català",
    },
  ];
  const onChangeLanguage = (locale: string) => {
    const url = new URL(window.location.href);

    url.pathname = url.pathname.replace(/^\/[^/]+/, `/${locale}`);

    localStorage.setItem("selectedLanguage", locale);

    window.location.replace(url.href);
  };

  return (
    <MenuTrigger>
      <Button
        aria-label="Switch language button"
        className="-mx-4 -my-2 px-4 py-2"
      >
        <span className="h-6 w-6 text-primary-600 dark:text-primary-100">
          <Languages />
        </span>
      </Button>
      <Popover
        className={cn(
          "bg-popover text-popover-foreground z-50 min-w-32 overflow-hidden rounded-md border bg-white p-1 shadow-md dark:bg-background-700",
        )}
      >
        <Menu items={items} onAction={(id) => onChangeLanguage(id as string)}>
          {(item) => (
            <MenuItem
              className={cn(
                "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors",
              )}
            >
              <div className="font-body flex flex-row items-center justify-between gap-2">
                {item.name} {locale === item.id && <Check className="w-4" />}
              </div>
            </MenuItem>
          )}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
