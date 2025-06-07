import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";

export default function UsersPage({ users }: { users: UserProps[] }) {
  return (
    <div className="max-w-5xl mx-auto p-6">
      <Header />
      <h1 className="text-2xl font-bold mb-6">Users</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UserProps[] = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
