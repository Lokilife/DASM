import { Language, Page } from "../types";

export const pages: Page[] = [
  {
    title: "x86",
    pages: [
      {
        title: "Linux",
        pages: [
          {
            title: "Syscalls",
            url: "/docs/x86/linux/syscalls",
            lang: Language.English,
          },
          {
            title: "Int 80h",
            url: "/docs/x86/linux/80h",
            lang: Language.English,
          },
        ],
      },
      {
        title: "Команды",
        lang: Language.Russian,
        pages: [
          {
            title: "Перемещения",
            url: "/docs/x86/commands/movements",
          },
        ],
      },
    ],
  },
];
