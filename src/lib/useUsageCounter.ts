"use client";

import { useState, useEffect, useCallback } from "react";

const STORAGE_KEY = "demandflow_usage";
const FREE_LIMIT = 3;

interface UsageData {
  month: string; // "YYYY-MM"
  count: number;
}

function getCurrentMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

function loadUsage(): UsageData {
  if (typeof window === "undefined") return { month: getCurrentMonth(), count: 0 };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const data = JSON.parse(raw) as UsageData;
      const currentMonth = getCurrentMonth();
      if (data.month === currentMonth) return data;
      // New month — reset
      return { month: currentMonth, count: 0 };
    }
  } catch {
    // Corrupted data — reset
  }
  return { month: getCurrentMonth(), count: 0 };
}

function saveUsage(data: UsageData) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // Storage full or unavailable
  }
}

/**
 * Tracks how many letters the user has generated in the current month.
 * Returns { count, limit, increment, remaining }.
 * For Pro users, limit is Infinity and usage is not incremented.
 */
export function useUsageCounter(isPro: boolean) {
  const [usage, setUsage] = useState<UsageData>({ month: getCurrentMonth(), count: 0 });

  // Hydrate from localStorage on mount
  useEffect(() => {
    setUsage(loadUsage());
  }, []);

  const increment = useCallback(() => {
    if (isPro) return; // Pro users don't track
    setUsage((prev) => {
      const currentMonth = getCurrentMonth();
      const updated: UsageData =
        prev.month === currentMonth
          ? { ...prev, count: prev.count + 1 }
          : { month: currentMonth, count: 1 };
      saveUsage(updated);
      return updated;
    });
  }, [isPro]);

  const limit = isPro ? Infinity : FREE_LIMIT;
  const remaining = Math.max(0, limit - usage.count);

  return {
    count: usage.count,
    limit,
    remaining,
    isPro,
    increment,
  };
}
