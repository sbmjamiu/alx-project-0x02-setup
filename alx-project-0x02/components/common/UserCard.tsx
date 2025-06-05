import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <div className="mt-2 text-sm text-gray-500">
        <p>
          {user.address.street}, {user.address.suite}
        </p>
        <p>
          {user.address.city}, {user.address.zipcode}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
