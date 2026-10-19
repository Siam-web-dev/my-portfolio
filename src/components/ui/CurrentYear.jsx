"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export default function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => 2026
  );

  return <span>{year}</span>;
}
