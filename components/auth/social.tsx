"use client";

import { Button } from "../ui/button";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export const Social = () => {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" className="w-full" variant="outline">
        <FcGoogle className="size-5" />
      </Button>
      <Button size="lg" className="w-full" variant="outline">
        <FaGithub className="size-5" />
      </Button>
    </div>
  );
};
