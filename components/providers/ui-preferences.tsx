"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react";

export type Language = "KOR" | "US";

type UiPreferencesContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  userName: string;
  setUserName: (value: string) => void;
  t: (ko: string, en: string) => string;
};

const LANGUAGE_STORAGE_KEY = "dessert-mood-lab-language";
const USERNAME_STORAGE_KEY = "dessert-mood-lab-user-name";

const UiPreferencesContext = createContext<UiPreferencesContextValue | null>(null);

function canReadStorage(storage: Storage | undefined): storage is Storage {
  return typeof storage?.getItem === "function";
}

export function UiPreferencesProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window === "undefined") {
      return "KOR";
    }

    const savedLang = canReadStorage(window.localStorage)
      ? window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
      : null;
    return savedLang === "KOR" || savedLang === "US" ? savedLang : "KOR";
  });
  const [userName, setUserNameState] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return canReadStorage(window.sessionStorage)
      ? window.sessionStorage.getItem(USERNAME_STORAGE_KEY) ?? ""
      : "";
  });

  const setLang = useCallback((nextLang: Language) => {
    setLangState(nextLang);
    if (canReadStorage(window.localStorage)) {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLang);
    }
  }, []);

  const setUserName = useCallback((value: string) => {
    const trimmedValue = value.trim();
    setUserNameState(trimmedValue);

    if (!canReadStorage(window.sessionStorage)) {
      return;
    }

    if (trimmedValue) {
      window.sessionStorage.setItem(USERNAME_STORAGE_KEY, trimmedValue);
      return;
    }

    window.sessionStorage.removeItem(USERNAME_STORAGE_KEY);
  }, []);

  const t = useCallback(
    (ko: string, en: string) => {
      return lang === "KOR" ? ko : en;
    },
    [lang]
  );

  const value = useMemo(
    () => ({
      lang,
      setLang,
      userName,
      setUserName,
      t
    }),
    [lang, setLang, t, userName, setUserName]
  );

  return <UiPreferencesContext.Provider value={value}>{children}</UiPreferencesContext.Provider>;
}

export function useUiPreferences() {
  const context = useContext(UiPreferencesContext);
  if (!context) {
    throw new Error("useUiPreferences must be used within UiPreferencesProvider");
  }

  return context;
}
