import { GlassCard } from "@/components/ui/GlassCard";

export function EmailInput() {
  return (
    <GlassCard className="w-full max-w-md p-6">
      <div className="mb-4 flex items-center gap-3 border-b border-black/5 pb-4">
        <div className="h-3 w-3 rounded-full bg-red-500/50" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
        <div className="h-3 w-3 rounded-full bg-green-500/50" />
        <span className="ml-auto text-xs text-muted-gray">Input Source</span>
      </div>
      
      <div className="space-y-4 font-mono text-sm text-muted-gray">
        <div className="flex gap-2 text-xs text-muted-gray/70">
          <span className="w-12">From:</span>
          <span className="text-ink">marketing@inkrl.com</span>
        </div>
        <div className="flex gap-2 text-xs text-muted-gray/70">
          <span className="w-12">Subject:</span>
          <span className="text-ink">Discover our new features</span>
        </div>
        
        <div className="mt-6 space-y-2 border-l-2 border-black/5 pl-4">
          <p>Hey there,</p>
          <p>We noticed you haven&apos;t checked out our latest updates yet.</p>
          <p>Our new AI engine is faster and smarter than ever.</p>
          <p>Click here to learn more.</p>
        </div>
      </div>
    </GlassCard>
  );
}
