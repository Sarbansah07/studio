"use client";

import Image from "next/image";
import { useDashboard } from "@/contexts/DashboardProvider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Brand } from "@/lib/types";

export default function BrandSelector() {
  const { brands, selectedBrand, setSelectedBrand } = useDashboard();

  const handleValueChange = (brandId: string) => {
    const brand = brands.find((b) => b.id === brandId);
    if (brand) {
      setSelectedBrand(brand);
    }
  };

  return (
    <Select onValueChange={handleValueChange} defaultValue={selectedBrand.id}>
      <SelectTrigger className="w-full md:w-[200px] lg:w-[300px]">
        <div className="flex items-center gap-2">
          <Image
            src={selectedBrand.logo}
            alt={`${selectedBrand.name} logo`}
            width={20}
            height={20}
            className="rounded-sm"
          />
          <SelectValue placeholder="Select a brand" />
        </div>
      </SelectTrigger>
      <SelectContent>
        {brands.map((brand: Brand) => (
          <SelectItem key={brand.id} value={brand.id}>
            <div className="flex items-center gap-2">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={20}
                height={20}
                className="rounded-sm"
              />
              <span>{brand.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
