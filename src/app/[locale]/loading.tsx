import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">
      {/* Hero Skeleton */}
      <div className="flex flex-col items-center text-center space-y-4 pt-12">
        <Skeleton className="h-6 w-36 rounded-full" />
        <Skeleton className="h-12 w-3/4 max-w-2xl rounded-lg" />
        <Skeleton className="h-5 w-full max-w-lg rounded" />
        <div className="flex gap-3 pt-4">
          <Skeleton className="h-9 w-32 rounded-lg" />
          <Skeleton className="h-9 w-32 rounded-lg" />
        </div>
      </div>

      {/* Cards Skeleton Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 pt-8">
        <Skeleton className="h-48 rounded-xl" />
        <Skeleton className="h-48 rounded-xl" />
        <Skeleton className="h-48 rounded-xl" />
      </div>
    </div>
  );
}
