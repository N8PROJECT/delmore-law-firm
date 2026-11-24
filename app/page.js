import { HomeSections } from "../components/sections";

export const metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return <main id="main"><HomeSections /></main>;
}