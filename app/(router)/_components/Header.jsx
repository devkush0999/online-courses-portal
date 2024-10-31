import { BellDot, Search } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";

function Header() {
  return (
    <div className="p-7 bg-white flex justify-between">
      {/* ====================================  search bar ===================================== */}

      <div className="flex gap-2  border p-2 rounded-md">
        <Search className="h-5 w-5" />
        <input type="text" placeholder="Search....." className="outline-none" />
      </div>

      {/* ========================================== get started button ====================================================== */}

      <div className="flex items-center ">
        <BellDot className="text-gray-500 mr-3" />
        <Button>Click me</Button>
      </div>
    </div>
  );
}

export default Header;
