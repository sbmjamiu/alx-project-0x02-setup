import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";
import React from "react";

const About: React.FC = () => (
  <div>
    <Header />
    <h1>About Page</h1>
    <p>Welcome to the About page of our project.</p>
    <div className="flex gap-4 mb-2">
      <Button size="small" shape="rounded-sm" />
      <Button size="medium" shape="rounded-md" />
      <Button size="large" shape="rounded-lg" />
      <Button size="large" shape="rounded-full" />
    </div>
  </div>
);

export default About;
