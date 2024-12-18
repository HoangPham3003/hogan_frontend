import Home from "./home/page";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hogan Pham",
  description: 'Welcome to my profile!'
}

export default function HomePage() {

  return (
    <Home />
  );
}
