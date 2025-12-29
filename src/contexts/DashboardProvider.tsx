"use client";

import React, { createContext, useContext, useState, useMemo } from 'react';
import type { Brand } from '@/lib/types';
import { brands } from '@/lib/data';

interface DashboardContextType {
  brands: Brand[];
  selectedBrand: Brand;
  setSelectedBrand: (brand: Brand) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [selectedBrand, setSelectedBrand] = useState<Brand>(brands[0]);

  const value = useMemo(() => ({
    brands,
    selectedBrand,
    setSelectedBrand,
  }), [selectedBrand]);

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (context === undefined) {
    throw new Error('useDashboard must be used within a DashboardProvider');
  }
  return context;
}
