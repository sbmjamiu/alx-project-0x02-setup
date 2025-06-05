import React from "react";
import Button from "@/components/common/Button";

import Header from "@/components/layout/Header";

export default function AboutPage() {
  return (
    <div className="max-w-xl mx-auto p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-6">About Page</h1>

      <div className="space-y-4">
        <Button label="Small & Rounded-sm" size="small" shape="rounded-sm" />
        <Button label="Medium & Rounded-md" size="medium" shape="rounded-md" />
        <Button
          label="Large & Rounded-full"
          size="large"
          shape="rounded-full"
        />
      </div>
    </div>
  );
}
