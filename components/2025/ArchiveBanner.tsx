import Link from "next/link";

export function ArchiveBanner() {
  return (
    <div className="fixed left-0 right-0 top-16 z-40 border-b border-[#CFB991]/20 bg-[#1a1a1a]/95 px-4 py-3 text-center text-sm text-white/80 backdrop-blur-md">
      You are viewing the 2025 symposium archive.
      {" "}
      <Link
        href="/2026"
        className="font-semibold text-[#DDB945] underline decoration-[#DDB945] decoration-2 underline-offset-2"
      >
        Go to the 2026 site
      </Link>
      .
    </div>
  );
}
