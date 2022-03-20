// @ts-check

import FingerPrint from "@fingerprintjs/fingerprintjs";
import { UserBloc } from "../UserBloc";

/**
 * @param {UserBloc} it
 */
export const setBrowserFingerPrint = (it) => {
  if (!window?.requestIdleCallback) return;

  requestIdleCallback(async () => {
    const agent = await FingerPrint.load();
    const visitor = await agent.get();
    it.browserFingerPrint = FingerPrint.hashComponents(visitor.components);
    localStorage.setItem(it.keyBrowserFingerPrint, it.browserFingerPrint);
  });
};
