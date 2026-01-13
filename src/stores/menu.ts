import { atom } from "nanostores";

// Estado global del menú
export const isMenuOpenStore = atom(false);

// Funciones helper (renombradas para evitar conflicto)
export const setMenuOpen = () => isMenuOpenStore.set(true);
export const setMenuClosed = () => isMenuOpenStore.set(false);
export const toggleMenuState = () =>
  isMenuOpenStore.set(!isMenuOpenStore.get());
