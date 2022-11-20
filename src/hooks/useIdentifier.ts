import { useMemo } from "react";
import { nanoid } from "nanoid";

export const useIdentifier = (id?: string | undefined): string => {
  return useMemo(() => {
    if (id) return id;
    return `id-${nanoid()}`;
  }, [id]);
};
